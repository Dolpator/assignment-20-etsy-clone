const Backbone = require('backbone')
const $ = require('jquery')

const MainModel = Backbone.Model.extend({})

const UserModel = Backbone.Model.extend({
   url: '',

   parse: function(rawJSONRes){
      console.log(rawJSONRes)
      return rawJSONRes.results[0]
   },

   initialize: function(listingId){
      this.url = "https://openapi.etsy.com/v2/listings/" + listingId + "?&api_key=b9ab0ja0tl144pddlcr40ax9&includes=Images&callback=?"
      console.log(this.url)
   }

})
const DataCollection = Backbone.Collection.extend({
   model: MainModel,
   url: '',
   parse: function(rawJSONRes){
    	return rawJSONRes.results
    },

    initialize: function(){
      this.url = "https://openapi.etsy.com/v2/listings/active.js?&api_key=b9ab0ja0tl144pddlcr40ax9&includes=Images&callback=?"
   }
})

const SearchCollection = Backbone.Collection.extend({
   model: MainModel,
   url: '',
    parse: function(rawJSONRes){
      return rawJSONRes.results
   },
   initialize: function(qryStr){
     this.url = "https://openapi.etsy.com/v2/listings/active.js?&api_key=b9ab0ja0tl144pddlcr40ax9&keywords=" + qryStr + "&includes=Images&callback=?"
  }
})
module.exports = {
   MainModel: MainModel,
   UserModel: UserModel,
   DataCollection: DataCollection,
   SearchCollection: SearchCollection
}
