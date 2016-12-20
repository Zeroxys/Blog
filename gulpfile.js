const gulp = require('gulp') // Gulp
const postcss = require('gulp-postcss') // Postcss
const browserSync = require('browser-sync').create() // Servidor de desarrollo
const autoprefixer = require('autoprefixer') //Plugin Prefixers
const nested = require('postcss-nested')// Instanciar clases css
const cssnext = require('postcss-cssnext')//Plugin css next
const rucksack = require('rucksack-css')//Responsive de textos
const csswring = require('csswring') // Comprime el css final
const mixins = require('postcss-mixins') //Plugin para mixins

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
    mixins,
    nested,
    rucksack(),
    cssnext({browsers: ['>5%', 'ie 8']}),
    csswring()
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