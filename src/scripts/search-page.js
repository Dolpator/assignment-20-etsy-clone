const Backbone = require('backbone')
const $ = require('jquery')

const SearchPage = Backbone.View.extend({
   el:  `#app-container`,

   _buildHomeHTMLTemplate: function(homeObj, keywords){

        let homeStr ='<nav class="navbar nav-tabs navbar-prop">'
            homeStr +=  '<div class="row">'
            homeStr +=   '<div class="col-xs-12 col md-4">'
            homeStr +=   '<div class="navbar-header ">'
            homeStr +=     '<div>'
            homeStr +=      '<a class="navbar-brand logo-div" href="#"><img class="etsy-logo" src="./images/etsylogo.png"/></a>'
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
            homeStr +=   '</div>'
            homeStr += '</div>'
            homeStr +='</nav>'
            homeStr +=        '<BR>'
            homeStr +=        '<BR>'
            homeStr +=        '<h2>Search Results</h2>'
            homeStr +=     '</div>'
            homeStr += '</div>'
            homeStr += '<hr>'
            homeStr +='<div class="row">'
            homeStr += homeObj.models.map(function(detailObj){
               //console.log(detailObj)
               var imgInfo = detailObj.attributes.Images[0]
               return `
                  <div class="col-xs-12 col-md-3 thumbnail detail-info" id='${detailObj.get('listing_id')}'>
                      <p><a href="#listings/${detailObj.get('listing_id')+".js?"}">${detailObj.get('listing_id')}</a> </p>
                      <h5> ${detailObj.get('title').slice(0,40)}
                      <img src=${imgInfo.url_170x135} />
                      <p price-info>  ${"$"+detailObj.get('price')}
                  </div>
                     `
            homeStr += '</div>'
         })
         .join('')

       return homeStr
      },

   render: function (collectionHome, keywords){
          this.el.innerHTML = this._buildHomeHTMLTemplate(collectionHome,keywords)
        }

})
module.exports = SearchPage
