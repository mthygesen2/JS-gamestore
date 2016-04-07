import Ember from 'ember';

export default Ember.Component.extend({
  updateGameForm: false,
  actions: {
    updateGameFormShow() {
      this.set('updateGameForm', true);
    },
    updateGame(game) {
      var params = {
        name: this.get('name'),
        price: this.get('price'),
        image: this.get('image'),
        description: this.get('description'),
        player: this.get('player'),
        age: this.get('age'),
        difficulty: this.get('difficulty'),
        type: this.get('type')
      };
      this.set('updateGameForm', false);
      this.sendAction('updateGame', game, params);
    }
  }
  });
