const page = require('page');
const empty = require('empty-element');
const template = require('./template.js');
const title = require('title');

page('/about', function(ctx,next){
  title('Blog-about');
  const cont = document.getElementById('Contenido');
  empty(cont).appendChild(template);
});