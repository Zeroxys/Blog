const yo = require('yo-yo');

module.exports = function landing (block){
 return yo`<section id="Contenido">
      ${block}
    </section>`; 
}