const page = require('page');
const empty = require('empty-element');
const title = require('title');
const template = require('../renderBlogs');

page('/blog', function(ctx,next){
  title('Blog-about');
  var cont = document.getElementById('Contenido');


  var blogs = [{name:'title',
                imageUrl:'http://bit.ly/2j3Ho0X',
                previewBlog:'Lorem ipsum dolor sit amet, consectetur adipisicing equist? Quasi sed, repudiandae.',
                urlBlog:'/content',
                likes:16,
                comments:8
               },
               
               {name:'title 2',
                imageUrl:'http://bit.ly/2j3Ho0X',
                previewBlog:'Lorem ipsum dolor sit amet, consectetur adipisicing equist? Quasi sed, repudiandae.',
                urlBlog:'/about',
                likes:16,
                comments:8
               },

               {name:'title 3',
                imageUrl:'http://bit.ly/2j3Ho0X',
                previewBlog:'Lorem ipsum dolor sit amet, consectetur adipisicing equist? Quasi sed, repudiandae.',
                urlBlog:'/about',
                likes:16,
                comments:8
               },
               
                {name:'title 4',
                imageUrl:'http://bit.ly/2j3Ho0X',
                previewBlog:'Lorem ipsum dolor sit amet, consectetur adipisicing equist? Quasi sed, repudiandae.',
                urlBlog:'/about',
                likes:16,
                comments:8
               }];

  empty(cont).appendChild(template(blogs));
});