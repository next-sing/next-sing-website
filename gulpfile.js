// code from: https://cloudfour.com/thinks/the-hidden-power-of-handlebars-partials/

const handlebars = require('gulp-compile-handlebars');
const rename = require('gulp-rename');
const gulp = require('gulp')

gulp.task('html', () => {
  return gulp.src('./src/pages/*.hbs')
    .pipe(handlebars({}, {
      ignorePartials: true,
      batch: ['./src/partials']
    }))
    .pipe(rename({
      extname: '.html'
    }))
    .pipe(gulp.dest('./dist'));
});
