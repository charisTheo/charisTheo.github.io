let gulp = require('gulp');
let minifyCSS = require('gulp-minify-css');
let concat = require('gulp-concat');

gulp.task('minify-css', function(clean) {
    gulp.src('./styles/css/*.css')
        .pipe(minifyCSS())
        .pipe(concat('styles.min.css'))
        .pipe(gulp.dest('styles/'));
    return clean();
});

gulp.task('watch', function(clean) {
    gulp.watch('./styles/css/*.css', function() {
      gulp.task('minify-css');
    });
    return clean();
});