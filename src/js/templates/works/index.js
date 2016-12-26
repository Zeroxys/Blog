const page = require('page');
const empty = require('empty-element');
const template = require('./template.js');

page('/works', (ctx,next) => {
  const cont = document.getElementById('Contenido');
  empty(cont).appendChild(template);
});