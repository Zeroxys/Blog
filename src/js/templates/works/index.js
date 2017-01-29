const page = require('page');
const empty = require('empty-element');
const template = require('./template.js');
const title = require('title');
const axios = require('axios');

page('/works',pictures, function(ctx,next) {
  title('Blog-works');
  const cont = document.getElementById('Contenido');
  empty(cont).appendChild(template(ctx.pictures));
});

function pictures(ctx,next){
  axios.get('/api/pictures')
    .then(function (res){
      ctx.pictures = res.data;
      next();
    })
    .catch(function(err){
      console.log(err);
    })
}