import Ember from 'ember';

export default Ember.Component.extend({
  addNewGame: false,
  actions: {
    gameFormShow() {
      this.set('addNewGame', true);
    },
    saveGame() {
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
      this.set('addNewGame', false);
      this.sendAction('saveGame', params);
    }
  }
});
