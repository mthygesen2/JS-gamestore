import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      games: this.store.query('game', {
        orderBy: 'type',
        equalTo: 'tablegame',
      }),
      reviews: this.store.findAll('review')
    });
  },
});
