const yo = require('yo-yo');
const blogCont = require('../blogTemplates');
const layout = require('../blogLayout');

module.exports = function renderBlogs (blogs){

 var el = yo`${blogs.map( function (theme) {
        return blogCont(theme);
      })}`; 
  return layout(el);
}