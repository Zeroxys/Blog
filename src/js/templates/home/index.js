const page = require('page');
const empty = require('empty-element');
const template = require('./template.js');

page('/home', (ctx,next) => {
  var cont = document.getElementById('Contenido');
  
  empty(cont).appendChild(template);
});