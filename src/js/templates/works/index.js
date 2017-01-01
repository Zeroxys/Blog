const page = require('page');
const empty = require('empty-element');
const template = require('./template.js');
const title = require('title');

page('/works', (ctx,next) => {
  title('Blog-works');
  const cont = document.getElementById('Contenido');
  empty(cont).appendChild(template);
});