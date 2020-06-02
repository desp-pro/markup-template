const gulp = require('gulp');
const plumber = require('gulp-plumber');
const pug = require('gulp-pug');

module.exports = function pug2html() {
  return gulp.src('src/views/*.pug')
    .pipe(plumber())
    .pipe(pug())
    .pipe(plumber.stop())
    .pipe(gulp.dest('dist'))
};
