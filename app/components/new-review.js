import Ember from 'ember';

export default Ember.Component.extend({
  addNewReview: false,
  actions: {
    reviewFormShow() {
      this.set('addNewReview', true);
    },
    saveReview() {
      var params = {
        rating: this.get('rating'),
        message: this.get('message'),
        game: this.get('game')
      };
      this.set('addNewReview', false);
      this.sendAction('saveReview', params);
    }
  }
});
