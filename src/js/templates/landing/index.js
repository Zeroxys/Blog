const yo = require('yo-yo');

module.exports = function landing (block){
 return yo`<section>
      ${block}
    </section>`; 
}