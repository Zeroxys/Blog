const yo = require('yo-yo');

module.exports =
yo`<section class="landing">

      <section class="HospesPort" id="Portada">  
        <div class="HospesPort-img">
          
        </div>
      </section>


      <section class="HospesBlogs u-wrapper" id="Bienvenida">
        <section class="HospesBlogs-contents">
          <h2 class="HospesBlogs-contents-title">Bienvenido</h2>
          <p class="HospesBlogs-contents-content">He decidido abrir este sitio con la unica intencion de compartir todo aquello que para mi es interesante, ya sea sobre desarrollo web,historias de vida, javascript ❤.
          <br>
          <br> 
          En cualquier caso si estas aqui es porque probablemente algun articulo te llamo la atencion, te invito a que sigas mis blogs y juntos podamos seguir aprendiendo un poco mas sobre la web.</p>
        </section>
      </section>

      <section class="HospesContents"  id="HospesCont">

        <section class="HospesContents-About">
          <div class="HospesContents-div">
            <h2 class="HospesContents-div-title">About</h2>
            <img src="/img/AboutSvg.svg">
            <div class="HospesContents-div-content">
              <p>Quieres saber un poco mas de mi vida ? cosas a las que dedico mis tiempos libres? Te invito a cotillear un poco mas Sobre Mi</p>
            </div>
            <a class="HospesContents-button" href="/about">Ver Mas..</a>        
          </div>
        </section>

        <section class="HospesContents-Blog">
          <div class="HospesContents-div">
            <h2 class="HospesContents-div-title">Blogs</h2>
            <img src="/img/blogSvg.svg">
            <div class="HospesContents-div-content">
              <p>Una serie de catastroficas desdichas convertidas en Blogs, Aqui podras encontrar uno que otro tutorial que espero te sea de utilidad. No olvides compartirlas ;)</p>
            </div>
            <a class="HospesContents-button-b" href="/blog">Ver Mas..</a>
          </div>        
        </section>

        <section class="HospesContents-Works ">
          <div class="HospesContents-div">
            <h2 class="HospesContents-div-title">Works</h2>
            <img src="/img/WorkSvg.svg">
            <div class="HospesContents-div-content">          
              <p>Empresas en las que he trabajado ?  Pff, Mejor te muestro un poco sobre los proyectos que he desarrollado. Lo se, no son muchos pero por algo se empieza ;)</p>
            </div>
            <a class="HospesContents-button" href="/works">Ver Mas..</a>
          </div>        
        </section>
      </section>

</section>`;