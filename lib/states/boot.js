'use strict';

var Boot = function(game) {
  this.game = game;
};

Boot.prototype.preload = function() {
};

Boot.prototype.create = function() {
  this.state.start('preload');
};

module.exports = Boot;