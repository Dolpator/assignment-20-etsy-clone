const Backbone = require('backbone')
const $ = require('jquery')

const {UserModel, DataCollection} = require('./user-model.js')
const DetailItems = require('./data-items.js')
const HomePage = require('./home-page.js')

var AppRouter = Backbone.Router.extend({
   // console.log('app is routing')
   routes: {
      "details/id:" : "showDetailsPage",
      "" : "showHomePage"
   },


showDetailsPage: function(id){
   var dataModelInstance = new UserModel(id)
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
         console.log(newHomeInstance)
   })

},

   initialize: function(){
      Backbone.history.start()
   }
})
var app = new AppRouter()

// document.querySelector('#app-container').innerHTML = `<h1>YOLO</h1>`
