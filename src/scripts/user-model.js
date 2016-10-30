const Backbone = require('backbone')
const $ = require('jquery')

const UserModel = Backbone.Model.extend({
   url: '',

   initialize: function(qryStr){
      this.url = "https://openapi.etsy.com/v2/listings/" + qryStr + "&api_key=b9ab0ja0tl144pddlcr40ax9&includes=Images&callback=?"

   }

})

const DataCollection = Backbone.Collection.extend({
   model: UserModel,
   parse: function(rawJSONRes){
    	return rawJSONRes.results
    },
      url: "https://openapi.etsy.com/v2/listings/active.js?&api_key=b9ab0ja0tl144pddlcr40ax9&includes=Images&callback=?"


})
module.exports = {
   UserModel : UserModel,
   DataCollection : DataCollection
}
