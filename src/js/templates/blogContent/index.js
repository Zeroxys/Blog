const page = require('page');
const empty = require('empty-element');
const title = require('title');
const template = require('./content/template.js');

page('/primer-blog', function(ctx,next){
  title('blog.name');
  var contenido = document.getElementById('Contenido');
  empty(contenido).appendChild(template);
})
