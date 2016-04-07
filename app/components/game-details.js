import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),
  
  actions: {
    saveReview(params) {
      this.sendAction('saveReview', params);
    },
    addToCart(item) {
      this.get('shoppingCart').add(item);
    }
  }
});
