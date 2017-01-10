const page = require('page');
const empty = require('empty-element');
const title = require('title');
const template = require('../renderBlogs');

page('/blog', function(ctx,next){
  title('Blog-about');
  var cont = document.getElementById('Contenido');

  var blogs = [{name:'title',
                url:'http://bit.ly/2j3Ho0X',
                blog:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim laudantium ipsum saepe dolore, expedita ab officiis porro doloremque dignissimos dolor molestias libero incidunt, natus nemo officia nesciunt, recusandae veniam quas. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim laudantium ipsum saepe dolore, expedita ab officiis porro doloremque dignissimos dolor molestias libero incidunt, natus nemo officia nesciunt, recusandae veniam quas. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim laudantium ipsum saepe dolore, expedita ab officiis porro doloremque dignissimos dolor molestias libero incidunt, natus nemo officia nesciunt, recusandae veniam quas. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim laudantium ipsum saepe dolore, expedita ab officiis porro doloremque dignissimos dolor molestias libero incidunt, natus nemo officia nesciunt, recusandae veniam quas.',
                likes:16,
                comments:8
               },
               
               {name:'title 2',
                url:'http://bit.ly/2j3Ho0X',
                blog:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim laudantium ipsum saepe dolore, expedita ab officiis porro doloremque dignissimos dolor molestias libero incidunt, natus nemo officia nesciunt, recusandae veniam quas.',
                likes:2,
                comments:3
               },

               {name:'title 3',
                url:'http://bit.ly/2j3Ho0X',
                blog:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim laudantium ipsum saepe dolore, expedita ab officiis porro doloremque dignissimos dolor molestias libero incidunt, natus nemo officia nesciunt, recusandae veniam quas.',
                likes:2,
                comments:3
               }];

  console.log(blogs)
  empty(cont).appendChild(template(blogs));
});