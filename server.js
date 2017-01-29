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
  
  var blogs = [
  {blog:{
      title:'Este es el Primer blog',
      imageUrl:'https://hiringsolved.com/blog/assets/iphone-developer-developer.jpg',
      previewBlog:'Lorem ipsum dolor sit amet, consectetur adipisicing equist? Quasi sed, repudiandae.',
      content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis vitae nemo quis est fugiat itaque, ducimus dolorem in laboriosam provident id quas non facilis tenetur dolorum perspiciatis amet. Quo, quidem?'
    },
    urlBlog:'/blog/primer-blog',
    likes:16,
    liked:false,
    comments:8
   },

   {blog:{
      title:'Este es el Segundo blog',
      imageUrl:'http://bit.ly/2j3Ho0X',
      previewBlog:'Lorem ipsum dolor sit amet, consectetur adipisicing equist? Quasi sed, repudiandae.',
    },
    urlBlog:'/blog/segundo-blog',
    likes:5,
    liked:false,
    comments:8
   },

   {blog:{
      title:'Este es el Tercer blog',
      imageUrl:'http://virtualrealityobserver.com/wp-content/uploads/2016/10/20151120193840-code-coding-programming-css-macbook-laptop-computer-technology-working-business-web-design-developer-.jpeg',
      previewBlog:'Lorem ipsum dolor sit amet, consectetur adipisicing equist? Quasi sed, repudiandae.',
    },
    urlBlog:'/blog/tercer-blog',
    likes:5,
    liked:false,
    comments:8
  }];
               
res.send(blogs);

});

app.get('/works', (req,res) => {
  res.status(200).sendfile('./dist/index.html');
});

app.get('/api/blogs/:blogsContent', (req,res) => {
  
  var contents = {
    title:'titulo del blog',
    imageUrl:'http://bit.ly/2j3Ho0X',
    blogContent:' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi unde a doloribus saepe provident amet, voluptate officiis explicabo deleniti. Natus deleniti odio laudantium voluptates doloribus, ut magni eveniet, maiores nulla.', 
    liked:true
  } 

  res.send(contents);
})

app.get('/api/pictures', (req,res) => {

  var pictures = [
            {image:'http://kingofwallpapers.com/developer/developer-004.jpg'},
            {image:'http://kingofwallpapers.com/developer/developer-004.jpg'},
            {image:'http://kingofwallpapers.com/developer/developer-004.jpg'}
  ]
  res.send(pictures)
});




app.get('/blog/:blogs', (req,res) => {
  res.status(200).sendfile('./dist/index.html');
  console.log(req.params.blogs);
});

app.get('*', (req,res) => {
  res.status(404).sendfile('./dist/index.html');
});

app.listen(port, (err) => {
  if (err) {
    console.log(`Ha ocurrido el siguiente problema :  ${err}`)
    process.exit(1)
  }
  console.log(`Servidor corriendo en puerto : ${port}`)
})
