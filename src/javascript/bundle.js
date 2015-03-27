var $ = require('npm-zepto');
var _ = require('underscore');
var app = {TodoFilter: ''};
var Backbone = require('backbone');
Backbone.$ = $;
var Todo = require('../models/Todo');
var TodoList = require('../collections/TodoList')(Todo);
var Todos = new TodoList();
var Workspace = require('../routers/router')(Todos,app);
var TodoRouter = new Workspace();
var TodoView = require('../views/TodoView')(app);
var AppView = require('../views/AppView')({
    Todos: Todos,
    app: app,
    TodoView: TodoView
  });

$(function() {
  // Kick things off by creating the **App**.
  new AppView();
  Backbone.history.start();
});
