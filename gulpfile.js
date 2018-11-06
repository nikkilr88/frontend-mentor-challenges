const gulp = require('gulp')
const sass = require('gulp-sass')

gulp.task('sass', () => {
  gulp
    .src('fylo-landing-page-496436-master/sass/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('fylo-landing-page-496436-master/css'))
})

gulp.task('watch:styles', () => {
  gulp.watch('fylo-landing-page-496436-master/sass/main.scss', ['sass'])
})
