const yo = require('yo-yo');

module.exports = 
yo`<section class="blogsContents">
    <img src="http://bit.ly/2j3Ho0X" class="blogsContents-img"/>

    <section class="blogsContents-textContent u-wrapper">
      <h2 class="blogsContents-textContent-title">Title</h2>
      <p class="blogsContents-textContent-text">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque est aliquid laboriosam tempore quidem, nesciunt at architecto vitae quisquam voluptate quia voluptas harum et ratione! Accusamus, ipsa sapiente veritatis! Numquam.
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam aliquam deserunt corporis maxime quae neque, similique, culpa reiciendis odio et amet? Minus aperiam deleniti consectetur sit, a accusantium maiores itaque.</p>        
    </section>

    <section class="blogsContents-icons u-wrapper">
      <a  href="#" class="blogsContents-icons-heart"></a>
      <a href="#" class="blogsContents-icons-share"></a>
    </section>

    <section class="blogsContents-boxComments">
      <section class="blogsContents-boxComments-fbComments u-wrapper">
        <div class="fb-comments" data-href="http://localhost:8080/content" data-width="100%" data-numposts="3"></div>
      </section>
    </section>  
  </section>`