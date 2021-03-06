// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps, id) {

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.setPosition(top, left);
  this.step();
  // now that we have defined the dancer object, we can start setting up important
  // parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.timeBetweenSteps = timeBetweenSteps;
  this.nearNeighbor = false;
};

Dancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step

  var time = this.timeBetweenSteps;
  setTimeout(this.step.bind(this), time);
};

Dancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  this.styleSettings = {
    top: top,
    left: left,
    transform: null
  };
  this.$node.css(this.styleSettings);
};

Dancer.prototype.lineUp = function() {
  this.setPosition(this.styleSettings.top, 10);
};
