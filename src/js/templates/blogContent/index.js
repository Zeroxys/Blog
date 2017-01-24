const page = require('page');
const empty = require('empty-element');
const title = require('title');
const template = require('./template.js');
const axios = require('axios');

page('/:blogs',blogsContent,function(ctx,next){
  title(`blog-${ctx.params.blogs}`);
  var contenido = document.getElementById('Contenido');
  empty(contenido).appendChild(template(ctx.blogsContents));
})

function blogsContent(ctx,next){
  axios.get(`/api/${ctx.params.blogs}`)
    .then(function(res){
      ctx.blogsContents = res.data;
      next()
    })
    .catch(function(err){
      console.log(err);
    })
}