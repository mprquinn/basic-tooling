# Frontend Tooling

## Skeletons for package.json and gulpfile.js for use in themes.

### Usage notes

#### Folders

- There are dummy src and build folders here. Feel free to delete and update the gulpfile sources as required.

#### Stylelint

- Stylelint is set up to warn of any SCSS/CSS inconsistencies, errors. Please fix these before committing. More info: https://stylelint.io/user-guide/rules/
- The configuration is set in `.stylelintrc`. Feel free to add rules, but let others know.

#### JS

- JS compilation and transpiling is done automatically through gulp.
- A pre-commit hook will clean up all `.js` files located in the `/src/` directory. The cleanup will use prettier.js as a guideline.

### Issues

- Can't seem to get env to work as a babel preset so it is set to use es2015 for now.
- Imagemin was removed as it didn't play well with watch.
- PostCSS Sorting has not been added due to differing client requirements. Set this up manually for now.