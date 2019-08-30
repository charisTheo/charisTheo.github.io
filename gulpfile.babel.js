let gulp = require('gulp');
let babel = require('gulp-babel');
let del = require('del');
let minifyCSS = require('gulp-minify-css');
let concat = require('gulp-concat');
let ngAnnotate = require('gulp-ng-annotate');
// let ngAnnotate = require('babel-plugin-angularjs-annotate');
let uglify = require('gulp-uglify');
let htmlmin = require('gulp-htmlmin');
var sourcemaps = require('gulp-sourcemaps');
let workboxBuild = require('workbox-build');
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

const clean = () => del(['styles/css/compressed/*', 'js/bundle/*', 'partials/compressed/*', 'service-worker.js', 'index.html']);

gulp.task('minify-js', function(done) {
    gulp.src([
        'vendor/angular.min.js',
        'vendor/angular-animate.min.js',
        'vendor/angular-aria.min.js',
        'vendor/angular-messages.min.js',
        'vendor/angular-material.min.js',
        'vendor/angular-cookies.min.js'
    ])
    .pipe(sourcemaps.init())
    .pipe(concat('angular-bundle.min.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('js/bundle/'));

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
    gulp.src([
        'styles/css/imagePicker.css',
        'styles/css/media.css',
        'styles/css/scrollBar.css',
        'styles/css/styles.css',
        'vendor/styles/angular-material.min.css'
    ])
    .pipe(minifyCSS())
    .pipe(concat('styles.min.css'))
    .pipe(gulp.dest('styles/css/compressed'));
    
    gulp.src('./styles/css/dark-mode.css')
    .pipe(minifyCSS())
    .pipe(concat('dark-mode.min.css'))
    .pipe(gulp.dest('styles/css/compressed'));

    return done();
});

// Gulp task to minify HTML files
gulp.task('minify-html', function(done) {
    gulp.src('./partials/*.html')
      .pipe(htmlmin({
        collapseWhitespace: true,
        removeComments: true,
        minifyCSS: true,
        minifyJS: true
    }))
    .pipe(gulp.dest('./partials/compressed'));

    gulp.src('index-src.html')
      .pipe(htmlmin({
        collapseWhitespace: true,
        removeComments: true,
        minifyCSS: true,
        minifyJS: true
    }))
    .pipe(concat('index.html'))
    .pipe(gulp.dest(__dirname));

    return done();
});

gulp.task('service-worker', function(done) {
    return workboxBuild.injectManifest({
        swSrc: 'service-worker-src.js',
        swDest: 'service-worker.js',
        globDirectory: './',
        globPatterns: [
          'styles/css/compressed/*.min.css',
          'index.html',
          'partials/compressed/*.html',
          'js/bundle/*.min.js',
          'img/**/*.*',
          'favicon.ico',
          'manifest.json',
          'manifest.webmanifest'
        ]
    }).then(resources => {
        console.log(`Injected ${resources.count} resources for precaching, ` +
        `totaling ${resources.size} bytes.`);
        return done();

    }).catch(err => {
        console.log('Uh oh 😬', err);
        return done();

    });
});

gulp.task('build', gulp.series(clean, 'service-worker', 'minify-css', 'minify-js', 'minify-html'));

const watch = () => {
    gulp.watch('./service-worker-src.js', gulp.series('service-worker'));
    gulp.watch('styles/css/*.css', gulp.series('minify-css', stream));
    gulp.watch(['js/components/*.js', 'js/*.js'], gulp.series('minify-js', reload));
    gulp.watch(['partials/*.html', 'index-src.html', '404.html', 'img/logos/*.svg'], gulp.series('minify-html', reload));
}

gulp.task('browserSync', gulp.series('build', serve, watch));
