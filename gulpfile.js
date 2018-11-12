const gulp = require('gulp')
const sass = require('gulp-sass')
const wait = require('gulp-wait')

gulp.task('sass', () => {
  gulp
    .src('fylo-landing-page-227273-master/sass/main.scss')
    .pipe(wait(200))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('fylo-landing-page-227273-master/css'))
})

gulp.task('watch:styles', () => {
  gulp.watch('fylo-landing-page-227273-master/sass/**/*.scss', ['sass'])
})
