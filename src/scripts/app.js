const Backbone = require('backbone')
const $ = require('jquery')

const {MainModel, UserModel, DataCollection, SearchCollection} = require('./user-model.js')
const DetailItems = require('./data-items.js')
const HomePage = require('./home-page.js')
const SearchPage = require('./search-page.js')

var AppRouter = Backbone.Router.extend({
   // console.log('app is routing')
   routes: {
      "search/:keywords": "searchKeywords",
      "listings/:id" : "showDetailsPage",
      "" : "showHomePage"
   },

searchKeywords: function(keywords){
   var newSearchInstance = new SearchCollection(keywords)
       newSearchInstance.fetch().then(function(){
      let searchViewInstance = new SearchPage(keywords)
         searchViewInstance.render(newSearchInstance)
   })

},

showDetailsPage: function(id){
   //console.log(id)
   var dataModelInstance = new UserModel(id)
   console.log(dataModelInstance)
       dataModelInstance.fetch().then(function(){
   let dataViewInstance = new DetailItems()
       dataViewInstance.render(dataModelInstance)
       console.log(dataModelInstance)

   })
},

showHomePage: function(){
   var newHomeInstance = new DataCollection()
       newHomeInstance.fetch().then(function(){
      let homeViewInstance = new HomePage()
         homeViewInstance.render(newHomeInstance)
   })

},

   initialize: function(){
      Backbone.history.start()
   }
})
var app = new AppRouter()

// document.querySelector('#app-container').innerHTML = `<h1>YOLO</h1>`
