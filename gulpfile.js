`use strict`;

const gulp = require(`gulp`);
const plumber = require(`gulp-plumber`);
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require(`gulp-sourcemaps`);

const postcss = require(`gulp-postcss`);
const autoprefixer = require(`autoprefixer`);
const csso = require(`gulp-csso`);
const rename = require(`gulp-rename`);
const server = require(`browser-sync`).create();
const webp = require(`gulp-webp`);
const posthtml = require(`gulp-posthtml`);
const include = require(`posthtml-include`);
const del = require(`del`);

gulp.task(`sass`, function () {
  return gulp.src([`_src/scss/style.scss`], {base: `_src/scss/`})
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer(),
    ]))
    .pipe(gulp.dest(`build/css`))
    .pipe(csso())
    .pipe(rename({
      suffix: `.min`,
    }))
    .pipe(sourcemaps.write(`.`))
    .pipe(gulp.dest(`build/css`))
    .pipe(server.stream());
});

gulp.task(`webp`, function () {
  return gulp.src([`_src/images/**/*.{jpg,png}`], {base: `_src/images`})
    .pipe(webp({quality: 80}))
    .pipe(gulp.dest(`build/images`));
});

gulp.task(`html`, function () {
  return gulp.src([`_src/**/*.html`], {base: `_src`})
    .pipe(plumber())
    .pipe(posthtml([
      include(),
    ]))
    .pipe(gulp.dest(`build`));
});

gulp.task(`copy`, function () {
  return gulp.src([`_src/fonts/**/*.{woff,woff2}`], {base: `_src`})
    .pipe(gulp.dest(`build/`));
});

gulp.task(`clear`, function () {
  return del(`build`);
});

gulp.task(`refresh`, function (done) {
  server.reload();
  done();
});

gulp.task(`server`, function () {
  server.init({
    server: `build/`,
    notify: false,
    open: true,
    cors: true,
    ui: false,
  });

  gulp.watch(`_src/scss/**/*.scss`, gulp.series(`sass`));
  gulp.watch(`_src/**/*.html`, gulp.series(`html`, `refresh`));
});

gulp.task(`build`, gulp.series(`sass`, `html`));

gulp.task(`start`, gulp.series(`build`, `server`));

// 73
