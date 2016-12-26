const page = require('page');
const empty = require('empty-element');
const template = require ('./template')

page('/', (ctx,next) => {
  const contenido = document.getElementById('Contenido');

  empty(contenido).appendChild(template);
})