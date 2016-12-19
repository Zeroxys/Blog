const gulp = require('gulp')
const postcss = require('gulp-postcss')
const browserSync = require('browser-sync').create()
const autoprefixer = require('autoprefixer')
const nested = require('postcss-nested')
const cssnext = require('postcss-cssnext')

//servidor de desarrollo
gulp.task('serve', function (){
  browserSync.init({
      server:{
        baseDir:'./dist'
      }
    })
})

//tarea procesar css
gulp.task('css', function(){
  
  var processors = [
    nested,
    cssnext({
      browsers: ['>5%', 'ie 8']
    })
  ]

  gulp.src('./src/*.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('./dist/css'))
    .pipe(browserSync.stream())
})

gulp.task('img', function(){
  gulp.src(['src/assets/img/*.png','src/assets/img/*.jpg'])
    .pipe(gulp.dest('dist/img/'))
})

//tarea para vigilar cambios
gulp.task('watch', function(){
  gulp.watch('./src/assets/img', ['img']).on('change', browserSync.reload)
  gulp.watch('./src/*.css', ['css'])
  gulp.watch('./dist/*.html').on('change', browserSync.reload)
})

gulp.task('default', ['watch','serve','img'])