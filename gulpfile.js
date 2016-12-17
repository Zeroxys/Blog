const gulp = require('gulp')
const postcss = require('gulp-postcss')
const browserSync = require('browser-sync').create()
const autoprefixer = require('autoprefixer')

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
  
  var processors = [autoprefixer]

  gulp.src('./src/*.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('./dist/css'))
    .pipe(browserSync.stream())
})

//tarea para vigilar cambios
gulp.task('watch', function(){
  gulp.watch('./src/*.css', ['css'])
  gulp.watch('./dist/*.html').on('change', browserSync.reload)
})

gulp.task('default', ['watch','serve'])