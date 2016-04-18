'use strict';

var Mn = require('backbone.marionette');

var ItemView = Mn.View.extend({
  tagName: 'li',
  className: 'list-group-item',
  template: require('./item.html')
});

var CollectionView = Mn.CollectionView.extend({
  childView: ItemView,
  tagName: 'ul',
  className: 'list-group list-group-flush'

});

module.exports = CollectionView;
