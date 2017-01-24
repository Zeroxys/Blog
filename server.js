const express = require('express');
const morgan = require('morgan');
const serveStatic = require('serve-static');
const bodyParser = require('body-parser');
const app = express();

const port = process.env.PORT || 8080;

app.set('engine','html');
app.use(bodyParser.urlencoded({extended:false}));
app.use (bodyParser.json());
app.use(morgan(':status :req[x-real-ip] :method :response-time ms :url'));
app.use(serveStatic('./dist/'));

app.get('/', (req,res) => {
  res.status(200).sendfile('./dist/index.html')
});

app.get('/about', (req,res) => {
  res.status(200).sendfile('./dist/index.html');

});

app.get('/blog', (req,res) => {
  res.status(200).sendfile('./dist/index.html');
});

app.get('/api/blogs', (req,res) => {
  
  var blogs = [{blog:{
                  title:'Este es el primer blog',
                  imageUrl:'http://bit.ly/2j3Ho0X',
                  previewBlog:'Lorem ipsum dolor sit amet, consectetur adipisicing equist? Quasi sed, repudiandae.',
                },
                urlBlog:'/primer-blog',
                likes:16,
                liked:true,
                comments:8
               },

               {blog:{
                  title:'Este es el segundo blog',
                  imageUrl:'http://bit.ly/2j3Ho0X',
                  previewBlog:'Lorem ipsum dolor sit amet, consectetur adipisicing equist? Quasi sed, repudiandae.',
                },
                urlBlog:'/primer-blog',
                likes:16,
                liked:true,
                comments:8
               }];
               
  res.send(blogs);

});

app.get('/works', (req,res) => {
  res.status(200).sendfile('./dist/index.html');
});

app.get('/api/:blogsContent', (req,res) => {
  
  var contents = {
    title:'titulo del blog',
    imageUrl:'http://bit.ly/2j3Ho0X',
    blogContent:' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi unde a doloribus saepe provident amet, voluptate officiis explicabo deleniti. Natus deleniti odio laudantium voluptates doloribus, ut magni eveniet, maiores nulla.', 
    liked:true
  } 

  res.send(contents);
})

app.get('*', (req,res) => {
  res.status(404).sendfile('./dist/index.html');
});

app.get('/:blogs', (req,res) => {
  res.status(200).sendfile('./dist/index.html');
  console.log(req.params.blogs);
});

app.listen(port, (err) => {
  if (err) {
    console.log(`Ha ocurrido el siguiente problema :  ${err}`)
    process.exit(1)
  }
  console.log(`Servidor corriendo en puerto : ${port}`)
})
