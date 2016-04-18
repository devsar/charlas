'use strict';

var Backbone = require('backbone');

/**
 * Used to save any required global state for the app.
 */
var Model = Backbone.Model.extend({});

var Collection = Backbone.Collection.extend({
  model: Model
});


module.exports = Collection;
