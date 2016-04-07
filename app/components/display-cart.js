import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),
  grandTotal: Ember.computed('shoppingCart.items', function() {
    var items = this.get('shoppingCart').items;
    var total = 0;
    items.forEach(function(item) {
      total += item.get('price');
    });
    return total;
  }),
   itemsInCart: Ember.computed('shoppingCart.items', function() {
     var items = this.get('shoppingCart').items;
     var numberItems = items.length;
     return numberItems;
   })
});
