'use strict';

const gulp = require('gulp');

gulp.task('data', function () {
  gulp.src('_data/**')
    .pipe(gulp.dest('./dist/assets/data')
  );
});
