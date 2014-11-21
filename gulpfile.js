var gulp = require('gulp');
var connect = require('gulp-connect');
var sass = require('gulp-sass');

// SERVE TASKS //
gulp.task('connect', function() {
  connect.server({
    root: './app',
    port: 9999,
    livereload: {port: 30000}
  });
});
gulp.task('watch', function() {
  gulp.watch('./app/index.html', ['reload'])
  gulp.watch('./app/app.scss', ['sass']);
});
gulp.task('reload', function() {
  gulp.src('./app').pipe(connect.reload());
});
gulp.task('sass', function() {
  gulp.src('./app/app.scss') // create new css file
    .pipe(sass({errLogToConsole: true}))
    .pipe(gulp.dest('./app/'))
});

gulp.task('serve', ['sass', 'connect', 'watch']);
