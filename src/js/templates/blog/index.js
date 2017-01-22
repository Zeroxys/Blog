const page = require('page');
const empty = require('empty-element');
const title = require('title');
const template = require('../renderBlogs');

page('/blog', function(ctx,next){
  title('Blog-about');
  var cont = document.getElementById('Contenido');

  var blogs = [{blog:{
                  title:'title',
                  imageUrl:'http://bit.ly/2j3Ho0X',
                  previewBlog:'Lorem ipsum dolor sit amet, consectetur adipisicing equist? Quasi sed, repudiandae.',
                },
                urlBlog:'/primer-blog',
                likes:16,
                liked:true,
                comments:8
               },

               {blog:{
                  title:'title',
                  imageUrl:'http://bit.ly/2j3Ho0X',
                  previewBlog:'Lorem ipsum dolor sit amet, consectetur adipisicing equist? Quasi sed, repudiandae.',
                },
                urlBlog:'/primer-blog',
                likes:16,
                liked:true,
                comments:8
               }];

  empty(cont).appendChild(template(blogs));
});

  
