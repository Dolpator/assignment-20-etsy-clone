const Backbone = require('backbone')
const $ = require('jquery')

// const api_key = `b9ab0ja0tl144pddlcr40ax9`

const DetailItems = Backbone.View.extend({
      el: `#app-container`,

      _buildDetailsHTMLTemplate: function(collData){
         let dataStr = '';
             dataStr += collData.models.map(function(detailObj){
                console.log(detailObj.get('description'))
               return `
               <div class="col-xs-12">
                  <div class="detail-card">
                     <img src="${detailInfo.get('Images')}">
                     <h4>${detailInfo.get('title')} </h4>
                     <h3>${detailInfo.get('category_id')} <h3>
                     <p class="text-muted">${detailObj.get('description')}  </p>
                  </div>
               </div>
             }   `
            })
            .join('')

            return dataStr
      },

       render: function (collectionData){
               this.el.innerHTML = this._buildDetailsHTMLTemplate(collectionData)
            }
})

module.exports = DetailItems
