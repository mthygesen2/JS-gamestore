import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('boardgames');
  this.route('selectedgame', {path: '/selectedgame/:game_id'});
  this.route('admin');
});

export default Router;
