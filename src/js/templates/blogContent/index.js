const page = require('page');
const empty = require('empty-element');
const title = require('title');
const template = require('./template.js');

page('/content', function(ctx,next){
  title('Blog-Content');
  var contenido = document.getElementById('Contenido');
  empty(contenido).appendChild(template);
})