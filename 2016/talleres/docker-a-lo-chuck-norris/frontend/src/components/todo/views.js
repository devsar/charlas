'use strict';

var Mn = require('backbone.marionette'),
  _ = require('lodash'),
  TodoCollection = require('./models'),
  TaskCollection = require('../task/models'),
  TaskCollectionView = require('../task/views');

var ItemView = Mn.View.extend({

  initialize: function () {
    this._tasks = new TaskCollection();
    // this.listenTo(this.model, 'change', this._onChangeCollapse);
    console.log(this, this.model.get('collapse'));
  },

  // _onChangeCollapse: function () {
  //   var collapse = this.model.get('collapse');
  // },

  regions: {
    tasks: '#list-elements'
  },

  ui: {
    taskInput: '#new-task',
    addTask: '#add-task'
  },

  template: require('./item.html'),

  events: {
    'click @ui.addTask': '_onNewTask'
  },

  _onNewTask: function (evt) {
    var newTask = this.ui.taskInput.val();

    evt.preventDefault();
    if (_.isEmpty(newTask)) {
      return;
    }
    this._tasks.add({
      task: newTask
    });

    this.ui.taskInput.val('');
  },

  onRender: function () {
    this.showChildView('tasks', new TaskCollectionView({
      collection: this._tasks
    }));
  }

});

var CollectionView = Mn.CollectionView.extend({
  childView: ItemView

});

var LayoutView = Mn.View.extend({
  regions: {
    todos: '#todos'
  },

  template: require('./layout.html'),

  _todos: null,

  initialize: function () {
    this._todos = new TodoCollection([{id: 1}, {id: 2}]);
    console.log(this);

    if (!_.isUndefined(this.options.id)) {
      var _todo = this._todos.get(this.options.id);
      _todo.set('collapse', 'in');
    }
  },

  onRender: function () {
    this.showChildView('todos', new CollectionView({
      collection: this._todos
    }));
  }

});

module.exports = LayoutView;
