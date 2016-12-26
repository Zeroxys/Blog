const page = require('page');
const empty = require('empty-element');
const template = require('./template.js');

page('/about', function(ctx,next){
  const cont = document.getElementById('Contenido');
  empty(cont).appendChild(template);
});