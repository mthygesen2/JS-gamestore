import Ember from 'ember';

export default Ember.Component.extend({
  updateGameForm: false,
  actions: {
    updateGame(game, params) {
      this.sendAction('updateGame', game, params);
    },
    deleteGame(game) {
      if(confirm('Are you sure you want to delete this game in its entirety?')) {
        this.sendAction('destroyGame', game);
      }
    }
  }
});
