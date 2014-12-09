'use strict';

var Preload = function(game) {
  this.game = game;
};

Preload.prototype.preload = function() {
};

Preload.prototype.create = function() {
};

Preload.prototype.update = function() {
  if(this.load.hasLoaded) {
    this.state.start('play');
  }
};

module.exports = Preload;