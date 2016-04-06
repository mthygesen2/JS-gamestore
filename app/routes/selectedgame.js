import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('game', params.game_id);
  }
});


// model(params) {
//   return Ember.RSVP.hash({
//     games: this.store.findRecord('game', params.game_id),
//     reviews: this.store.findAll('review')
//   });
// },
