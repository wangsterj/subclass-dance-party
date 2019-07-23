var SnowyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, 100);
  // this.$node = $('<div class="SnowyDancer"></div>');
  this.$node = $('<div class="snowyDancer"><img src="images/galLogo.jpg" class="gal-logo"></div>');
  this.setPosition(top, left);
  this.flag = true;
};

SnowyDancer.prototype = Object.create(Dancer.prototype);
SnowyDancer.prototype.constructor = SnowyDancer;

// we plan to overwrite the step function below, but we still want the superclass step behavior to work,
// so we must keep a copy of the old version of this function
SnowyDancer.prototype.oldStep = Dancer.prototype.step;


SnowyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  
  
  // SNOW DANCER:
  if (this.styleSettings !==undefined) {
      this.setPosition(this.styleSettings.top + 10*Math.random(-1,1), this.styleSettings.left+10*Math.random(-1,1));
  }
};
