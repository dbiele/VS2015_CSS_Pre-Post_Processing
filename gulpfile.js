var gulp = require('gulp');
var sass = require('gulp-sass');
var prefixer = require('gulp-autoprefixer');
// upgrade to the latest node version or use e6-promise.  Fixes problem with `gulp-postcss "Promise is not defined"`
require('es6-promise').polyfill();

gulp.task('build.css', function () {
    gulp.src('./scripts/components/materials/components/**/*.scss')
    // Guilp-Sass runs the pre processor on the .scss files using Sass.
    // Gulp-AutoPrefixer post processes the .css files using PostCSS.
    // CSS and Folder structure is saved to destination folder.
    .pipe(sass().on('error', sass.logError))
    .pipe(prefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(gulp.dest('./www/css'));
});
