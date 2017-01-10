const page = require('page');
const empty = require('empty-element');
const template = require ('./template')
const title = require('title');

page('/', (ctx,next) => {
  title('Blog');
  var contenido = document.getElementById('Contenido');

  empty(contenido).appendChild(template);
})