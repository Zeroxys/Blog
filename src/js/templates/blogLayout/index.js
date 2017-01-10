const yo = require('yo-yo');

module.exports = function (blogs){
  return yo`<section>
  <section class="HospesContents-Blog-Principal">
          <section class="HospesContents-Blog-Principal-titleContent">
            <h2 class="HospesContents-Blog-Principal-titleContent-title">Blogs</h2>
            <p class="HospesContents-Blog-Principal-titleContent-text">Una serie de catastroficas desdichas</p>
          </section> 

          <section class="HospesContents-Blog-Principal-Contenido">
            ${blogs}
          </section>                     
  </section>
  </section>`;
}