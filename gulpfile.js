// code from: https://cloudfour.com/thinks/the-hidden-power-of-handlebars-partials/

const handlebars = require('gulp-compile-handlebars');
const rename = require('gulp-rename');
const gulp = require('gulp')

gulp.task('html', () => {
	let templateData = {
		groupName: 'Next Sing',
		auditionDate: '2/9/19',
		audStartTime: '10:00 am',
		audEndTime: '10:00 pm',
		auditionPlace: 'the Next TFL piano room',
		audFormClose: '2/7/19 0:00 EST',
		currentSemester: 'Spring 2019'
	}

  return gulp.src('./src/pages/*.hbs')
    .pipe(handlebars(templateData, {
      ignorePartials: true,
      batch: ['./src/partials']
    }))
    .pipe(rename({
      extname: '.html'
    }))
    .pipe(gulp.dest('./dist'));
});
