/*******************************************************************************
 *  Dependencies
 */
var gulp = require('gulp');
var log = require('gulp-util').log;
var rename = require('gulp-rename');
var stylus = require('gulp-stylus');
var nib = require('nib');
var plumber = require('gulp-plumber');

/*******************************************************************************
 *  Configurations
 */
var config = {
    watch: './src/**/*.*',
    css: {
        src: './src/style.styl',
        destination: 'dist'
    }
};

/*******************************************************************************
 *  Stylus task (optional to change the name of the file)
 */
gulp.task('styles', function() {
           gulp.src(config.css.src)
               .pipe(plumber())
               .pipe(stylus({ use: nib() }))
               .pipe(rename('style.css'))
               .pipe(gulp.dest(config.css.destination));
});

/*******************************************************************************
 *  Watch task
 */
gulp.task('watch', function() {
    log('Watching files');
    gulp.watch(config.watch, ['build']);
});

/*******************************************************************************
 *  Command line task commands
 */
gulp.task('build', ['styles']);
gulp.task('default', ['build', 'watch']);
