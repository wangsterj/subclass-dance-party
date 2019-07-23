var RotatingDancer = function(top, left, timeBetweenSteps, id) {
  Dancer.call(this, top, left, Math.random(50,100)*100);
  this.$node = $('<div class="rotatingDancer"><img src="images/spiral.jpg" class="spiral"></div>');
  this.rotation = 0;
  this.setPosition(top, left);
};

RotatingDancer.prototype = Object.create(Dancer.prototype);
RotatingDancer.prototype.constructor = RotatingDancer;

// we plan to overwrite the step function below, but we still want the superclass step behavior to work,
// so we must keep a copy of the old version of this function
RotatingDancer.prototype.oldStep = Dancer.prototype.step;


RotatingDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep();

  this.rotate(this.rotation);
  if (!this.nearNeighbor) {
    this.rotation = this.rotation + 10;
  } else {
    this.rotation = this.rotation - 10;
  }
};

RotatingDancer.prototype.rotate = function(rotation) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  this.styleSettings.transform = `rotate(${rotation}deg)`;
  this.$node.css(this.styleSettings);
};
