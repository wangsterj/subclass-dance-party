var JumpyDancer = function(top, left, timeBetweenSteps, id) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $(`<div id="${id}"class="jumpyDancer"></div>`);
  this.setPosition(top, left);
};

JumpyDancer.prototype = Object.create(Dancer.prototype);
JumpyDancer.prototype.constructor = JumpyDancer;

// we plan to overwrite the step function below, but we still want the superclass step behavior to work,
// so we must keep a copy of the old version of this function
JumpyDancer.prototype.oldStep = Dancer.prototype.step;

JumpyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.

  if (this.styleSettings !==undefined) {
    if (this.flag) {
      this.setPosition(this.styleSettings.top + 10, this.styleSettings.left);
      this.flag = false;
    } else {
      this.setPosition(this.styleSettings.top - 10, this.styleSettings.left);
      this.flag = true;
    }
  }
};
