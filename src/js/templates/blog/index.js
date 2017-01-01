const page = require('page');
const empty = require('empty-element');
const template = require('./template.js');
const title = require('title');

page('/blog', (ctx,next) => {
  title('Blog-blogs');
  var cont = document.getElementById('Contenido');
  
  empty(cont).appendChild(template);
})