const express = require('express');
const morgan = require('morgan');
const serveStatic = require('serve-static');
const app = express();

const port = process.env.PORT || 8080;

app.set('engine','html');
app.use(morgan(':status :req[x-real-ip] :method :response-time ms :url'));
app.use(serveStatic('./dist/', {'index': ['index.html']}));

app.get('/', (req,res) => {
});

app.get('/about', (req,res) => {
  res.status(200).sendfile('./dist/index.html');
  
});

app.get('/blog', (req,res) => {
  res.status(200).sendfile('./dist/index.html');
});

app.get('/works', (req,res) => {
  res.status(200).sendfile('./dist/index.html');
});

app.listen(port, (err) => {
  if (err) {
    console.log(`Ha ocurrido el siguiente problema :  ${err}`)
    process.exit(1)
  }
  console.log(`Servidor corriendo en puerto : ${port}`)
})