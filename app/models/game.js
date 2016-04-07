import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  price: DS.attr(),
  image: DS.attr(),
  description: DS.attr(),
  player: DS.attr(),
  age: DS.attr(),
  difficulty: DS.attr(),
  type: DS.attr(),
  reviews: DS.hasMany('review', {async:true})
});
