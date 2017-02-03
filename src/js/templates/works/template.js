const yo = require('yo-yo');
const tingle = require('tingle.js');
const landing = require('../landing');
  
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

module.exports = function works(pictures){

  var el = yo`<section>

    ${modal.setContent('<h1>here\'s some content</h1>')}

    ${modal.addFooterBtn('Button', 'tingle-btn tingle-btn--primary', function() {
        modal.open();
    })}

    <h2>Aqui ira la galeria de trabajos realizados</h2>
    <h3>PROXIMAMENTE</h3>
      <section>
        ${pictures.map(function(pic){
            return yo`<section id="modal">
              <img class="gallery" src="${pic.image}"></img>
            </section>`;
        })}
      </section>
  </section>`;

  return landing(el)    
}
