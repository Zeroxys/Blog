//Contenido de blocke
const yo = require('yo-yo');

module.exports = function template(blog){
return yo`<section class="HospesContents-Blog-Articulos">
        <img class="HospesContents-Blog-Articulos-img" src=${blog.blog.imageUrl}/>

        <section class="HospesContents-Blog-Articulos-content">

          <h2 class="HospesContents-Blog-Articulos-content-title">${blog.blog.title}</h2>

          <p class="HospesContents-Blog-Articulos-content-text" id="text-box">
            ${blog.blog.previewBlog}
          </p>

        </section>
        <a class="HospesContents-Blog-Articulos-btn" href="${blog.urlBlog}">Ver mas...</a>

        <section class="HospesContents-Blog-Articulos-content-commentBox">

          <div>
            <p>${blog.likes} Me gusta</p>
          </div>

          <div>
            <p>${blog.comments} Comentarios</p>
          </div>

        </section>

      </section>`;
}
