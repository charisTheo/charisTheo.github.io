let fs = require('fs');
let gulp = require('gulp');
let babel = require('gulp-babel');
let del = require('del');
let minifyCSS = require('gulp-minify-css');
let concat = require('gulp-concat');
let ngAnnotate = require('gulp-ng-annotate');
// let ngAnnotate = require('babel-plugin-angularjs-annotate');
let uglify = require('gulp-uglify');
let htmlmin = require('gulp-htmlmin');
let sourcemaps = require('gulp-sourcemaps');
let replace = require('gulp-replace');
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
        'vendor/angular-material.min.js'
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
    .pipe(concat('portfolio-bundle.min.js'))
    .pipe(ngAnnotate())
    .pipe(babel())
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('js/bundle/'));

    done();
});

gulp.task('bundle-js', function(done) {
    setTimeout(function() {
        gulp.src([
            'js/bundle/angular-bundle.min.js',
            'js/bundle/portfolio-bundle.min.js',
        ])
        .pipe(sourcemaps.init())
        .pipe(concat('bundle.min.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('js/bundle/'));

        done();
    }, 2000);
});

gulp.task('minify-css', function(done) {
    gulp.src([
        'vendor/styles/angular-material.css',
        'styles/css/imagePicker.css',
        'styles/css/media.css',
        'styles/css/scrollBar.css',
        'styles/css/styles.css'
    ])
    .pipe(minifyCSS())
    .pipe(concat('styles.min.css'))
    .pipe(gulp.dest('styles/compressed'));
    
    gulp.src('./styles/css/dark-mode.css')
    .pipe(minifyCSS())
    .pipe(concat('dark-mode.min.css'))
    .pipe(gulp.dest('styles/compressed'));

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
    .pipe(replace(/<link href=".\/styles\/compressed\/styles.min.css"[^>]*>/, function(s) {
        var style = fs.readFileSync('./styles/compressed/styles.min.css', 'utf8');
        return '<style>\n' + style + '\n</style>';
    }))
    .pipe(gulp.dest(__dirname));

    return done();
});

gulp.task('service-worker', function(done) {
    setTimeout(() => {
        return workboxBuild.injectManifest({
            swSrc: 'service-worker-src.js',
            swDest: 'service-worker.js',
            globDirectory: '.',
            globPatterns: [
              'index.html',
              'partials/compressed/*.html',
              'styles/compressed/*.css',
              'fonts/*.woff2',
              'js/bundle/bundle.min.js',
              'img/**/*.*',
              'favicons/*',
              'projects-data.json',
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
    }, 2000);
});

gulp.task('build', gulp.series(clean, 'minify-css', 'minify-js', 'bundle-js', 'minify-html', 'service-worker'));

const watch = () => {
    gulp.watch('service-worker-src.js', gulp.series('service-worker'));
    gulp.watch('styles/css/*.css', gulp.series('minify-css', 'minify-html', reload));
    gulp.watch(['js/components/*.js', 'js/*.js'], gulp.series('minify-js', 'bundle-js', reload));
    gulp.watch(['partials/*.html', 'index-src.html', '404.html', 'img/logos/*.svg'], gulp.series('minify-html', reload));
}

gulp.task('browserSync', gulp.series('build', serve, watch));
