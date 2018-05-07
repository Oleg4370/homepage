let gulp = require('gulp');
let sass = require('gulp-sass');
let browserSync = require('browser-sync');

//Compile styles
gulp.task('styles', function() {
  gulp.src('styles/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./styles/'));
});

// Static Server + watching scss/html files
gulp.task('serve', ['styles'], function() {

  browserSync.init({
    server: "./"
  });

  gulp.watch('styles/sass**/*.scss',['styles']);
  gulp.watch("index.html").on('change', browserSync.reload);
});