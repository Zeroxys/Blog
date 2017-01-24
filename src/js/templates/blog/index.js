const page = require('page');
const empty = require('empty-element');
const title = require('title');
const template = require('../renderBlogs');
//var request = require('superagent');
var axios = require('axios');

page('/blog', loadBlogsAxios, function(ctx,next){
  title('Blog-about');
  var cont = document.getElementById('Contenido');

  empty(cont).appendChild(template(ctx.blogs));
});

//peticion con superagent (callbacks)
/*function loadBlogs(ctx,next){
  request
    .get('/api/blogs')
    .end(function (err,res){
      if (err) return console.log(`Se encontro el siguient error : ${err}`);

      ctx.blogs = res.body;
      next();
    })
}*/


//peticion con AXIOS usando promises
function  loadBlogsAxios (ctx,next){
  axios.get('/api/blogs')
    .then(function(res){
      ctx.blogs = res.data;
      next()
    })
    .catch(function (err){
      console.log(err);
    })
}