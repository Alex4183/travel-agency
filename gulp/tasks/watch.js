var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

gulp.task('html', function() {
    browserSync.reload();
});

gulp.task('watch', function() {

    browserSync.init({
        server: {
            baseDir: "app"
        }
    });

    watch('./app/index.html', gulp.series('html'));
    
    watch('./app/assets/styles/**/*.css', gulp.series('cssInject'));
});

gulp.task('cssInject', gulp.series('styles', function() {
    return gulp.src('./app/temp/styles/styles.css')
        .pipe(browserSync.stream());
}));