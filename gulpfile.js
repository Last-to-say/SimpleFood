const {src, dest, watch, parallel, series} = require('gulp');
const scss = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
const uglify = require('gulp-uglify');
const fileInclude   = require('gulp-file-include');
const del = require('del');
const browserSync = require('browser-sync').create();


const htmlInclude = () => {
  return src(['app/html/*.html']) 													
  .pipe(fileInclude({
    prefix: '@',
    basepath: '@file',
  }))
  .pipe(dest('app'))
  .pipe(browserSync.stream());
}

function browsersync() {
  browserSync.init({
    server: {
      baseDir: 'app/'
    },
    notify: false
  })
}


function styles() {
  return src('app/scss/*.scss')
    .pipe(scss({outputStyle: 'compressed'}))
    .pipe(autoprefixer({
      overrideBrowserslist:['last 10 versions'],
      grid: true,
    }))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(dest('app/css')) 
    .pipe(browserSync.stream())
}


function scripts() {
  return src([
    'node_modules/jquery/dist/jquery.js',
    'node_modules/mixitup/dist/mixitup.js',
    'node_modules/slick-slider/slick/slick.js',
    'app/js/main.js'
  ])
  .pipe(concat('main.min.js'))
  .pipe(uglify())
  .pipe(dest('app/js'))
  .pipe(browserSync.stream())
}


function build() {
  return src([
    'app/**/*.html',
    'app/css/style.min.css',
    'app/js/main.min.js',
  ], {base: 'app'})
  .pipe(dest('dist'))
}


function cleanDist() {
  return del('dist')
}


function watching() {
  watch(['app/scss/**/*.scss'], styles);
  watch(['app/js/**/*.js', '!app/js/main.min.js'], scripts);
  watch(['app/html/**/*.html'], htmlInclude);
  watch(['app/**/*.html']).on('change', browserSync.reload); 
}



exports.styles = styles;
exports.scripts = scripts;
exports.htmlInclude = htmlInclude;
exports.browsersync = browsersync;
exports.watching = watching;
exports.cleanDist = cleanDist;
exports.build = series(cleanDist, build);

exports.default = parallel(htmlInclude, styles, scripts, browsersync, watching);