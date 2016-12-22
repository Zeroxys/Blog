const gulp = require('gulp') // Gulp
const postcss = require('gulp-postcss') // Postcss
//const browserSync = require('browser-sync').create() // Servidor de desarrollo
const autoprefixer = require('autoprefixer') //Plugin Prefixers
const nested = require('postcss-nested')// Instanciar clases css
const cssnext = require('postcss-cssnext')//Plugin css next
const rucksack = require('rucksack-css')//Responsive de textos
const csswring = require('csswring') // Comprime el css final
const mqpacker = require('css-mqpacker')//Organiza las media queries
const mixins = require('postcss-mixins') //Plugin para mixins
const livereload = require('gulp-livereload')
const nodemon = require('gulp-nodemon')
const babel = require('babelify')
const browserify = require('browserify')
const rename = require('gulp-rename')
const source = require('vinyl-source-stream')

//servidor de desarrollo
/*gulp.task('serve', function (){
  browserSync.init({
      server:{
        baseDir:'./dist'
      }
    })
})*/

//Inicializa servidor en desarrollo
gulp.task('serve', function(){
  livereload({start : true})
    nodemon({
      script:'server.js',
      ext:'js',
      env:{'NODE_ENV': 'development'}
    }).on('restart',function(){
        gulp.src('server.js')
          .pipe(livereload())
        console.log('Reiniciando el Servidor')  
      })
})

//tarea procesar css
gulp.task('css', function(){
  
  var processors = [
    mixins(),
    nested,
    rucksack(),
    cssnext({browsers: ['>5%', 'ie 8']}),
    mqpacker,
    csswring()
  ]

  gulp.src('./src/*.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('./dist/css'))
    //.pipe(browserSync.stream())
})

gulp.task('img', function(){
  gulp.src(['src/assets/img/*.png','src/assets/img/*.jpg','src/assets/img/*.svg'])
    .pipe(gulp.dest('dist/img/'))
})

//Tarea para crear bundle con browserify y babel
gulp.task('scripts', function(){
  browserify('./src/index.js')
    .transform(babel)
    .bundle()
    .pipe(source('index.js'))
    .pipe(rename('app.js'))
    .pipe(gulp.dest('./dist/js'))
})

//tarea para vigilar cambios
gulp.task('watch', function(){
  //gulp.watch('./src/assets/img', ['img']).on('change', browserSync.reload)
  //gulp.watch('./dist/*.html').on('change', browserSync.reload)
  gulp.watch('./src/*.css', ['css'])
})

gulp.task('default', ['watch','serve','scripts','img'])