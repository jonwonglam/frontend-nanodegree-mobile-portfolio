/* File: gulpfile.js */

// grab our gulp packages
var gulp  = require('gulp'),
    gutil = require('gulp-util'),
    cleanCSS = require('gulp-clean-css'),
    htmlmin = require('gulp-htmlmin'),
    imagemin = require('gulp-imagemin'),
    uglify = require('gulp-uglify'),
    pump = require('pump');

gulp.task('default', ['min-css', 'min-html', 'min-images', 'min-js', 'watch']);

gulp.task('min-css', function() {
  return gulp.src('app/css/*.css')
    .pipe(cleanCSS({compatibility: '*'}))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('min-html', function() {
  return gulp.src('app/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'));
});

gulp.task('min-images', function() {
  gulp.src('app/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'));
});

gulp.task('min-js', function(cb) {
  pump([
      gulp.src('app/js/*.js'),
      uglify(),
      gulp.dest('dist/js')
    ],
    cb
  );
});

gulp.task('watch', function() {
  gulp.watch('app/css/*.css', ['min-css']);
  gulp.watch('app/*.html', ['min-html']);
});
