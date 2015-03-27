/**
 * Created by cristian on 26/03/15.
 */
var _ = require('underscore');
var $ = require('npm-zepto');
var Backbone = require('backbone');
Backbone.$ = $;

module.exports = function(_Todos,app) {
  var Todos = _Todos;
  var Workspace = Backbone.Router.extend({
    routes:{
      '*filter': 'setFilter'
    },

    setFilter: function( param ) {
      // Set the current filter to be used
      if (param) {
        param = param.trim();
      }
      app.TodoFilter = param || '';

      // Trigger a collection filter event, causing hiding/unhiding
      // of Todo view items
      Todos.trigger('filter');
    }
  });
  return Workspace;
};
