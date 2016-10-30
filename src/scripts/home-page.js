const Backbone = require('backbone')
const $ = require('jquery')

const HomePage = Backbone.View.extend({
   el:  `#app-container`,

   events: {
      'click .get-search-bar' : 'searchEtsy'
   },

    searchEtsy : function(evt){
    var inputEl = document.querySelector('#search-bar')
          window.location.hash = 'listings/' + inputEl.value +'.js?'
          inputEL.value ='';
   },


   _buildHomeHTMLTemplate: function(homeObj){

        let homeStr ='<nav class="navbar nav-tabs">'
            homeStr +=   '<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">'
            homeStr +=      '<a class="navbar-brand" href="#"><img class="etsy-logo" src=""/></a>'
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
            homeStr +=   '</div>'
            homeStr +='</nav>'
            homeStr += '<div class="search-area">'
            homeStr +=   '<div class="">'
            homeStr +=     '<h1>Whoever you are, find Whatever youre into</h1>'
            homeStr +=      '<form class="navbar-form navbar-left">'
            homeStr +=         '<div class="form-group">'
            homeStr +=            '<input type="text" class="form-control" id="search-bar" placeholder="Search">'
            homeStr +=            '<button type="submit" class="btn btn-default">Submit</button>'
            homeStr +=         '</div>'
            homeStr +=      '</form>'
            homeStr +=    '</div>'
            homeStr +=  '<div class ="little-toys">'
            homeStr +=     '<img src ="./images/different-nationalities-1743392__480.jpg"/>'
            homeStr += '</div>'
            homeStr += '</div>'
            homeStr += '<h2>Active Listings</h2>'
            homeStr += '<hr>'
            homeStr +='<div class="row">'
            homeStr += homeObj.models.map(function(detailObj){
               return `
                  <div class="col-xs-12 col-md-3 detail-info">
                     <h5> ${detailObj.get('title')}</h5>
                      <p> ${detailObj.get('listing_id')} </p>
                      <p> ${detailObj.get('Images')[1]}</p>
                  </div>
                     `
            homeStr += '</div>'
         })
         .join('')

       return homeStr
      },

   render: function (collectionHome){
          this.el.innerHTML = this._buildHomeHTMLTemplate(collectionHome)
        }

})
module.exports = HomePage
