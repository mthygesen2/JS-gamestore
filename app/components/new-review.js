import Ember from 'ember';

export default Ember.Component.extend({
  addNewReview: false,
  actions: {
    reviewFormShow() {
      this.set('addNewReview', true);
    },
    save() {
      var params = {
        rating: this.get('rating'),
        messageContent: this.get('messageContent'),
        game: this.get('game')
      };
      this.set('addNewReview', false);
      this.sendAction('save', params);
    }
  }
});
