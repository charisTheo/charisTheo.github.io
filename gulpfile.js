let gulp = require('gulp');
let del = require('del');
let minifyCSS = require('gulp-minify-css');
let concat = require('gulp-concat');
let minifyJS = require('gulp-ng-annotate');
let browserSync = require('browser-sync');
let server = browserSync.create();

function reload(done) {
    server.reload();
    done();
}
  
function serve(done) {
    server.init({
      server: {
        baseDir: './'
      }
    });
    done();
}

const clean = () => del(['styles/css/compressed', 'js/compressed']);

// TODO: Angular loading error when using bundle js file
gulp.task('minify-js', function(clean) {
    gulp.src([
        'js/app.js',
        'js/components/portfolio.ctr.js',
        'js/components/share-listener.fac.js',
        'js/accelerometer.js',
    ])
    .pipe(concat('app.min.js'))
    .pipe(minifyJS({add: true}))
    .pipe(gulp.dest('js/compressed/'));
    
    return clean();
});

gulp.task('minify-css', function(clean) {
    gulp.src('styles/css/*.css')
        .pipe(minifyCSS())
        .pipe(concat('styles.min.css'))
        .pipe(gulp.dest('styles/css/compressed'));
    return clean();
});

const watch = () => gulp.watch([
    'partials/*.html', 
    'index.html',
    'js/components/*.js',
    'js/*.js',
    'styles/css/*.css'
], gulp.series('minify-css', 'minify-js', reload));

gulp.task('browserSync', gulp.series(clean, 'minify-css', 'minify-js', serve, watch));
