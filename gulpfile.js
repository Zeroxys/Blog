const gulp = require('gulp') // Gulp
const postcss = require('gulp-postcss') // Postcss
const browserSync = require('browser-sync').create() // Servidor de desarrollo
const autoprefixer = require('autoprefixer') //Plugin Prefixers
const nested = require('postcss-nested')// Instanciar clases css
const cssnext = require('postcss-cssnext')//Plugin css next
const rucksack = require('rucksack-css')//Responsive de textos
const csswring = require('csswring') // Comprime el css final
const mqpacker = require('css-mqpacker')//Organiza las media queries
const mixins = require('postcss-mixins') //Plugin para mixins
const livereload = require('gulp-livereload')//Recarga y escucha cambios en el navegador
const nodemon = require('gulp-nodemon') // Recarga cambios en el servidor
const babel = require('babelify') // Babel
const browserify = require('browserify')//Modularizamos y hacemos bundle final
const rename = require('gulp-rename') // Renonbramos archivos pasados a gulp
const source = require('vinyl-source-stream') // Las tareas realizadas con browserify las podemos volver a tomar con gulp
const watchify = require('watchify')//Queda esperando cambios en los ficheros
const es2015 = require('babel-preset-es2015')

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
    mixins(),
    nested,
    rucksack(),
    cssnext({browsers: ['>5%']}),
    mqpacker,
    csswring()
  ]

  gulp.src('./src/*.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('./dist/css'))
    .pipe(browserSync.stream())
})

//Tarea coloca imagenes de src a dist
gulp.task('img', function(){
  gulp.src(['src/assets/img/*.png','src/assets/img/*.jpg','src/assets/img/*.svg'])
    .pipe(gulp.dest('dist/img/'))
})

//Funcion que hace el bundle de js
var compile = function (watch){
  var bundle = watchify(browserify('./src/js/index.js'));
  
  function rebundle (){
    bundle
      .transform(babel,{presets:['es2015']})
      .bundle()
      .on('error', function(err){
          console.log(err);
          this.emit('end')
        })
      .pipe(source('index.js'))
      .pipe(rename('app.js'))
      .pipe(gulp.dest('./dist/js'))

    console.log('Finish...')  
  }

  if  (watch){
    bundle.on('update', function(){
      console.log('Rebundling...')
      rebundle()
    })
  }
  rebundle()
}

//Ejecuta la funcion compile y hace bundling
gulp.task('bundling', function(){
  return compile();
})

//Watch manda true a compile para que almenes se ejecute una vez
gulp.task('watch', function(){
  compile(true);
})

//tarea para vigilar cambios
gulp.task('watchFiles', function(){
  gulp.watch('./src/assets/img', ['img']);
  gulp.watch('./dist/*.html',['watch']);
  gulp.watch('./src/*.css', ['css']);
})

//Tareas por defecto
gulp.task('default', ['watchFiles','serve','img','css']);