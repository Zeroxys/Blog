//Contenido de blocke
const yo = require('yo-yo');


module.exports = function template(blog){
return yo`<section class="HospesContents-Blog-Articulos">
        <img class="HospesContents-Blog-Articulos-img" src=${blog.url}/>

        <section class="HospesContents-Blog-Articulos-content">

          <h1 class="HospesContents-Blog-Articulos-content-title">${blog.name}</h1>
          
          <p class="HospesContents-Blog-Articulos-content-text" id="text-box">
            ${blog.blog}
          </p>

        </section>
        <a class="HospesContents-Blog-Articulos-btn" href="/">Ver mas...</a>
        
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
