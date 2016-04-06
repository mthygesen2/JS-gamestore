import DS from 'ember-data';

export default DS.Model.extend({
  rating: DS.attr(),
  message: DS.attr(),
  game: DS.belongsTo('game', {async:true})
});
