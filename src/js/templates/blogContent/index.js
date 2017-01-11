const page = require('page');
const empty = require('empty-element');
const title = require('title');
const template = require('./template');

page('/content', function(ctx,next){
  title('Blog-Content');

  var cont = document.getElementById('Contenido');

  cont.appendChild(template);

})