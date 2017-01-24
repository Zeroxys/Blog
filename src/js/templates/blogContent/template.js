const yo = require('yo-yo');
const landing = require('../landing');

module.exports = function blogsContents(blog){
var el = yo`<section class="blogsContents">
    <img src="${blog.imageUrl}" class="blogsContents-img"/>

    <section class="blogsContents-textContent u-wrapper">
      <h2 class="blogsContents-textContent-title">${blog.title}</h2>
      <p class="blogsContents-textContent-text">
        ${blog.blogContent}
      </p>
    </section>

    <section class="blogsContents-icons u-wrapper">
      <a  href="#" class="blogsContents-icons-heart"></a>
      <a href="#" class="blogsContents-icons-share"></a>
    </section>

    <section class="blogsContents-boxComments">
      <section class="blogsContents-boxComments-fbComments u-wrapper">
        <div class="fb-comments" data-href="http://localhost:8080/content" data-width="100%" data-numposts="3"></div>
      </section>
    </section>
  </section>` ;

  return landing(el);
}
