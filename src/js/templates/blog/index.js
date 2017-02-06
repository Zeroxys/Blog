const page = require('page');
const empty = require('empty-element');
const title = require('title');
const template = require('../renderBlogs');
//var request = require('superagent');
var axios = require('axios');

page('/blog', loading,loadBlogsAxios, function(ctx,next){
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

//Midleware del spinner
function loading (ctx,next) {
  var cont = document.getElementById('Contenido');
  var el = document.createElement('div');
  var container = document.createElement('div');

  container.classList.add('spinnerCont');
  el.classList.add('loader');

  empty(cont).appendChild(container.appendChild(el));
}

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