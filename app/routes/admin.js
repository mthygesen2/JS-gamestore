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
      tablegames: this.store.query('game', {
        orderBy: 'type',
        equalTo: 'tablegame',
      }),
      reviews: this.store.findAll('review')
    });
  },
  actions: {
    saveGame(params) {
      var newGame = this.store.createRecord('game', params);
      newGame.save();
      this.transitionTo('admin');
    },
    destroyGame(game) {
      var review_deletions = game.get('reviews').map(function(review) {
        return review.destroyRecord();
      });
      Ember.RSVP.all(review_deletions).then(function() {
        return game.destroyRecord();
      });
      this.transitionTo('admin');
    },
    updateGame(game, params) {
     Object.keys(params).forEach(function(key) {
       if(params[key]!==undefined) {
         game.set(key,params[key]);

       }
     });
     game.save();
     this.transitionTo('admin');
   }
  }
});
