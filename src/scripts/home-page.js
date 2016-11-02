const Backbone = require('backbone')
const $ = require('jquery')

const HomePage = Backbone.View.extend({
   el:  `#app-container`,

   events: {
      'click .detail-info' : 'listingInfo',
      'keydown #search-bar': 'searchEtsy'
   },

searchEtsy: function(evt){
   console.log (evt.target.value)

   if(evt.keyCode === 13){
      // let keyword = evt.target.value
      window.location.hash = 'search/' + evt.target.value
      }
},

    listingInfo: function(evt){
      //console.log(evt.currentTarget.id)
       window.location.hash =`listing/${evt.currentTarget.id}`
   },

   _buildHomeHTMLTemplate: function(homeObj){

        let homeStr ='<nav class="navbar nav-tabs navbar-prop">'
            homeStr +=   '<div class="navbar-header">'
            homeStr +=     '<div>'
            homeStr +=      '<a class="navbar-brand logo-div" href="#home"><img class="etsy-logo" img src="./images/etsylogo2.png" /></a>'
            homeStr +=      '<form class="navbar-form navbar-left search-form">'
            homeStr +=         '<div class="form-group">'
            homeStr +=            '<input type="text" class="form-control" id="search-bar" placeholder="Search Etsy...">'
            homeStr +=         '</div>'
            homeStr +=      '</form>'
            homeStr +=     '</div>'
            homeStr +=    '<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">'
            homeStr +=      '<ul class="nav navbar-nav">'
            homeStr +=        '<li><a href="#">Clothing and Accesories</a></li>'
            homeStr +=         '<li><a href="#">Jewelry</a></li>'
            homeStr +=         '<li><a href="#">Craft Supplies & Tools</a></li>'
            homeStr +=         '<li><a href="#">Weddings</a></li>'
            homeStr +=         '<li><a href="#">Entertainment</a></li>'
            homeStr +=         '<li><a href="#">Home and Living</a></li>'
            homeStr +=         '<li><a href="#">Kids and Baby</a></li>'
            homeStr +=         '<li><a href="#">Vintage</a></li>'
            homeStr +=         '<li><a href="#">Sell on Etsy</a></li>'
            homeStr +=         '<li><a href="#"><span class="glyphicon glyphicon-home" aria-hidden="true"></span></a></li>'
            homeStr +=         '<li><a href="#"><span class="glyphicon glyphicon-heart" aria-hidden="true"></span></a></li>'
            homeStr +=         '<li><a href="#"><span class="glyphicon glyphicon-user" aria-hidden="true"></span></a></li>'
            homeStr +=         '<li><a href="#"><span class="glyphicon glyphicon-shoping-cart" aria-hidden="true"></span></a></li>'
            homeStr +=      '</ul>'
            homeStr +=     '</div>'
            homeStr +=    '</div>'
            homeStr +='</nav>'
            homeStr += '<div class="search-area">'
            homeStr +=         '<h1>Whoever you are,</h1>'
            homeStr +=         '<h1>find Whatever youre into</h1>'
            homeStr +=     '<div>'
            homeStr +=        '<BR>'
            homeStr +=        '<BR>'
            homeStr +=        '<h2>Active Listings</h2>'
            homeStr +=     '</div>'
            homeStr += '</div>'
            homeStr +='<div class="row">'
            homeStr += homeObj.models.map(function(detailObj){
               //console.log(detailObj)
               var imgInfo = detailObj.attributes.Images[0]
               return `
                  <div class="col-xs-12 col-md-4 thumbnail detail-info" id='${detailObj.get('listing_id')}'>
                      <p><a href="#listings/${detailObj.get('listing_id')+".js?"}">${detailObj.get('listing_id')}</a> </p>
                      <h5> ${detailObj.get('title').slice(0,25)}${ detailObj.get('title').length <= 25 ? "" : '...' }
                      <img src=${imgInfo.url_170x135} />
                      <p price-info>  ${"$"+detailObj.get('price')}
                  </div>
                  `
               })
               .join(''),

            homeStr += '</div>'
            homeStr +=   '<nav aria-label="Page navigation">'
            homeStr +=     ' <ul class="pagination">'
            homeStr +=        ' <li>'
            homeStr +=        ' <a href="#" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a>'
            homeStr +=         '</li>'
            homeStr +=         '<li><a href="">1</a></li>'
            homeStr +=         '<li><a href="">2</a></li>'
            homeStr +=         '<li><a href="">3</a></li>'
            homeStr +=         '<li><a href="">4</a></li>'
            homeStr +=         '<li><a href="">5</a></li>'
            homeStr +=         '<li>'
            homeStr +=         '<a href="#" aria-label="Next"><span aria-hidden="true">&raquo;</span></a>'
            homeStr +=         '</li>'
            homeStr +=      '</ul>'
            homeStr +=   '</nav> '


           return homeStr
      },

   render: function (collectionHome){
          this.el.innerHTML = this._buildHomeHTMLTemplate(collectionHome)
        }

})
module.exports = HomePage
