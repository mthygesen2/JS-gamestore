import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('game');
  },
  actions: {
    saveGame(params) {
      var newGame = this.store.createRecord('game', params);
      newGame.save();
      this.transitionTo('admin');
    }
  }
});
