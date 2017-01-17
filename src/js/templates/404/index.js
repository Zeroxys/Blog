const page = require('page');
const empty = require('empty-element');
const template = require('./template.js');
const title = require('title')

page('*', function(ctx,next){
  title('404');
  var body = document.getElementById('body');
  empty(body).appendChild(template);
})