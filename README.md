# Simple Simple Theme Tooling

## Skeletons for package.json and gulpfile.js for use in themes.

### Usage notes

#### Stylelint

- Stylelint is set up to warn of any SCSS/CSS inconsistencies, errors. Please fix these before commiting.
- The configuration is set in `.stylelintrc`. Feel free to add rules, but let others know.

#### JS

- JS compilation and transpiling is done automatically through gulp.
- Before commiting, please run `npm run js` to clean up src js files in order to maintain consistency. This will use (prettier)[https://github.com/prettier/prettier] as the clean up rules.

### Issues

- Can't seem to get env to work as a babel preset so it is set to use es2015 for now.
- Imagemin was removed as it didn't play well with watch.
- PostCSS Sorting has not been added due to client requirements. Set this up manually for now.