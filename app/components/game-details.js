import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveReview(params) {
      this.sendAction('saveReview', params);
    }
  }
});
