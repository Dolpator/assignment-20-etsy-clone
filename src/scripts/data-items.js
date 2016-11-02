const Backbone = require('backbone')
const $ = require('jquery')

// const api_key = `b9ab0ja0tl144pddlcr40ax9`

const DetailItems = Backbone.View.extend({
   el: `#app-container`,

   _buildDetailsHTMLTemplate: function(detailData){
      console.log(detailData)
      //var imgDetail = detailData.get('Images')
      return`
<nav class="navbar nav-tabs navbar-prop">
 <div class="navbar-header">
         <a class="navbar-brand logo-div" href="#"><img class="etsy-logo" src="./images/etsylogo.png"/></a>
      <form class="navbar-form navbar-left search-form">
         <div class="form-group">
               <input type="text" class="form-control" id="search-bar" placeholder="Search">
         </div>
      </form>
         <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li><a href="#">Clothing and Accesories</a></li>
            <li><a href="#">Jewelry</a></li>
            <li><a href="#">Craft Supplies & Tools</a></li>
            <li><a href="#">Weddings</a></li>
            <li><a href="#">Entertainment</a></li>
            <li><a href="#">Home and Living</a></li>
            <li><a href="#">Kids and Baby</a></li>
            <li><a href="#">Vintage</a></li>
            <li><a href="#">Sell on Etsy</a></li>
            <li><a href="#"><span class="glyphicon glyphicon-home" aria-hidden="true"></span></a></li>
            <li><a href="#"><span class="glyphicon glyphicon-heart" aria-hidden="true"></span></a></li>
            <li><a href="#"><span class="glyphicon glyphicon-user" aria-hidden="true"></span></a></li>
            <li><a href="#"><span class="glyphicon glyphicon-shoping-cart" aria-hidden="true"></span></a></li>
          </ul>
         </div>
   </div>
</nav>
   </div>
     <div class="row">
      <div class="col-md-6 col-md-offset-3  img-card ">
       <h4>${detailData.get('title')}</h4><p>${"$" + detailData.get('price')}</p>
        <img src=${detailData.get('Images')[0].url_75x75} />
        <p>${detailData.get('description').slice(0,250)}
      </div>
     </div>
    </div>
   </div>
      `


   },

   render: function (collectionData){
      this.el.innerHTML = this._buildDetailsHTMLTemplate(collectionData)
   }
})

module.exports = DetailItems
