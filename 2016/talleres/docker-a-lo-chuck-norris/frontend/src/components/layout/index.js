'use strict';

/**
 * This exports a view, used to create the layout.
 *
 * @returns {obj} [instance of the layout]
 */

var Model = require('./models'),
  LayoutView = require('./views');

module.exports = function () {
  var m = new Model({});

  var layoutView = new LayoutView.Layout({model: m});

  return {
    model: m,
    view: layoutView
  };

};
