let gulp = require('gulp');
let babel = require('gulp-babel');
let del = require('del');
let minifyCSS = require('gulp-minify-css');
let concat = require('gulp-concat');
let ngAnnotate = require('gulp-ng-annotate');
// let ngAnnotate = require('babel-plugin-angularjs-annotate');
let uglify = require('gulp-uglify');
let browserSync = require('browser-sync');
let server = browserSync.create();

function reload(done) {
    server.reload();
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

gulp.task('bundle-js', function(done) {
    gulp.src([
        'js/app.js',
        'js/components/portfolio.ctr.js',
        'js/components/share-listener.fac.js',
        'js/accelerometer.js',
    ])
    .pipe(concat('bundle.js'))
    .pipe(ngAnnotate())
    .pipe(babel())
    .pipe(gulp.dest('js/bundle/'));
    
    return done();
});
gulp.task('minify-js', function(done) {
    gulp.src('js/bundle/bundle.js')
    .pipe(concat('bundle.min.js'))
    .pipe(gulp.dest('js/bundle/'))
    .pipe(uglify())
    .on('error', (error) => console.log(error))
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

const watch = () => gulp.watch([
    'partials/*.html', 
    'index.html',
    'js/components/*.js',
    'js/*.js',
    'styles/css/*.css'
], gulp.series('minify-css', 'bundle-js', 'minify-js', reload));

gulp.task('browserSync', gulp.series('minify-css', 'bundle-js', 'minify-js', serve, watch));
