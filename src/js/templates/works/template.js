const yo = require('yo-yo');
const tingle = require('tingle.js');
const landing = require('../landing');
  
  var contenido = yo`<section>
    <h2>Soy el contenido</h2>  
  </section>`


module.exports = function works(pictures){

  var el = yo`<section class="galleryCont">

    ${modal.setContent(contenido)}
    
    <div class="worksTitle">
      <h2>Trabajos</h2>
      <h3>Aqui podras ver algunos de los trabajos que he realizado y una breve descripcion de ellos, podras ver el codigo de los mismos en mi cuenta de github</h3>
    </div>

    <div class="gallery">
      ${pictures.map(function(pic){
          return yo`<section class="gallery-container">
            <img class="gallery-items" src="${pic.image}">
              ${modal.addFooterBtn('Ver mas...', 'tingle-btn tingle-btn--primary', function (){
                modal.open();
              })}
            </img>
          </section>`;
      })}
    </div>

  </section>`;

  return landing(el)    
}

var modal = new tingle.modal({
  footer:true,
  stickyFooter:false,
  closeLabel:"close",
  cssClass: ['custom-class-1', 'custom-class-2'],
  onOpen: function(){
    console.log("modal open");
  },
  onClose : function(){
    console.log("modal close");
  }
})