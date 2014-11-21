var gulp = require('gulp');
var connect = require('gulp-connect');
var sass = require('gulp-sass');

// SERVE TASKS //
gulp.task('connect', function() {
  connect.server({
    root: './',
    port: 9999,
    livereload: {port: 30000}
  });
});
gulp.task('watch', function() {
  gulp.watch('index.html', ['reload'])
  gulp.watch('app.scss', ['sass']);
});
gulp.task('reload', function() {
  gulp.src('./').pipe(connect.reload());
});
gulp.task('sass', function() {
  gulp.src('app.scss') // create new css file
    .pipe(sass({errLogToConsole: true}))
    .pipe(gulp.dest('./'))
});

gulp.task('serve', ['sass', 'connect', 'watch']);
