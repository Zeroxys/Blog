const yo = require('yo-yo');
const landing = require('../landing');

module.exports = function works(pictures){

  console.log("things")
  var el = yo`<section>
    <h2>Aqui ira la galeria de trabajos realizados</h2>
      <section class="gallery">
        ${pictures.map(function(pic){
            console.log(pic.image)
            return yo`<section>
              <img src="${pic.image}">s</img>
            </section>`;
        })}
      </section>  
    <a href="/">Volver</a>
  </section>`;

  return landing(el)    
}