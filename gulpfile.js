const gulp = require('gulp');
const gutil = require('gulp-util');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');

const postcss     = require('gulp-postcss');
const reporter    = require('postcss-reporter');
const syntax_scss = require('postcss-scss');
const stylelint   = require('stylelint');

gulp.task('default', function () {
  gulp.watch('./scss/**/*.scss', ['scss-lint', 'scss']);
});

gulp.task('min', function () {
    gulp.src('./js/**/*.js')
      .pipe(babel({
          presets: ['es2015']
      }))
      .pipe(uglify())
      .pipe(gulp.dest('./build/js'))
});

gulp.task('scss-lint', function () {
   var processors = [
    stylelint(),
    reporter({
      clearMessages: true,
      throwError: false
    })
  ];
  return gulp.src(
      ['./scss/**/*.scss']
    )
    .pipe(postcss(processors, {syntax: syntax_scss}));
});

gulp.task('scss', function () {
  return gulp.src('./scss/**/*.scss')
    .pipe(sourcemaps.init({
      loadMaps: true,
      identityMap: true
    }))
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(autoprefixer({
        browsers: ['last 2 versions']
    }))
    .pipe(sourcemaps.write('.', {
      sourceRoot: './build/css'
    }))
    .pipe(gulp.dest('./css'));
});