let gulp = require('gulp');
let babel = require('gulp-babel');
let del = require('del');
let minifyCSS = require('gulp-minify-css');
let concat = require('gulp-concat');
let ngAnnotate = require('gulp-ng-annotate');
// let ngAnnotate = require('babel-plugin-angularjs-annotate');
let uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
let browserSync = require('browser-sync');
let server = browserSync.create();

function reload(done) {
    server.reload();
    return done();
}

function stream(done) {
    server.stream();
    return done();
}
  
function serve(done) {
    server.init({
      server: {
        baseDir: './'
      }
    });
    return done();
}

const clean = () => del(['styles/css/compressed/*', 'js/bundle/*']);

gulp.task('minify-js', function(done) {
    gulp.src([
        'js/app.js',
        'js/components/portfolio.ctr.js',
        'js/components/share-listener.fac.js'
    ])
    .pipe(sourcemaps.init())
    .pipe(concat('bundle.min.js'))
    .pipe(ngAnnotate())
    .pipe(babel())
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('js/bundle/'));

    return done();
});

gulp.task('minify-css', function(done) {
    gulp.src('styles/css/*.css')
    .pipe(minifyCSS())
    .pipe(concat('styles.min.css'))
    .pipe(gulp.dest('styles/css/compressed'));

    return done();
});

gulp.task('build', gulp.series(clean, 'minify-css', 'minify-js'));

const watch = () => {
    gulp.watch('styles/css/*.css', gulp.series('minify-css', stream));
    gulp.watch(['js/components/*.js', 'js/*.js'], gulp.series('minify-js', reload));
    gulp.watch(['partials/*.html', 'index.html', '404.html', 'img/logos/*.svg'], gulp.series(reload));
}

gulp.task('browserSync', gulp.series('build', serve, watch));
