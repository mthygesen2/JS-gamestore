import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      boardgames: this.store.query('game', {
        orderBy: 'type',
        equalTo: 'boardgame',
      }),
      cardgames: this.store.query('game', {
        orderBy: 'type',
        equalTo: 'cardgame',
      }),
      reviews: this.store.findAll('review')
    });
  },
  actions: {
    saveReview(params) {
      var newReview= this.store.createRecord('review', params);
      newReview.save();
      this.transitionTo('selectedgame');
    },
  }
});
