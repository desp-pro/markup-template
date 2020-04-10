const gulp = require('gulp');

module.exports = function fonts() {
  return gulp.src('src/public/**/*.*')
    .pipe(gulp.dest('dist'))
};
