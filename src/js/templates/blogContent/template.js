const yo = require('yo-yo');
const landing = require('../landing');

module.exports = function blogsContents(blog){

  var el;

  function render(blogContent) {
    return yo`<section class="blogsContents">
        <img src="${blogContent[0].blog.imageUrl}" class="blogsContents-img"/>

        <section class="blogsContents-textContent u-wrapper">
          <h2 class="blogsContents-textContent-title">${blogContent[0].blog.title}</h2>
          <p class="blogsContents-textContent-text">
            ${blogContent[0].blog.content}
          </p>
        </section>

        <section class="blogsContents-icons u-wrapper">
          <div class="blogsContents-number ${blog[0].liked ? 'liked' : ''}">
            <a  href="#" onclick=${like.bind(null, true)} class="blogsContents heart"></a>
            <a  href="#" onclick=${like.bind(null, false)} class="blogsContents heartdislike"></a>
            <span class="blogsContents-number-num">${blog[0].likes}</span>
          </div>
          <a href="#" class="blogsContents-icons-share"></a>
        </section>

        <section class="blogsContents-boxComments">
          <section class="blogsContents-boxComments-fbComments u-wrapper">
            <div class="fb-comments" data-href="http://localhost:8080/content" data-width="100%" data-numposts="3"></div>
          </section>
        </section>
      </section>`;
  }

  function like(liked){
    blog[0].liked = liked;
    blog[0].likes += liked ? 1 : -1;
    var newEl = render(blog);
    yo.update(el,newEl);
    return false;
  }

  el = render(blog);

  return landing(el);
}
