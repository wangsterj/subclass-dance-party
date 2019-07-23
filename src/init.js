var danceCountMaker = function() {
  var count = 0;
  return function() {
    var result = count;
    count++;
    return result;
  }
};

var incrementDancer = danceCountMaker();

$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var id = incrementDancer();
    var height = ($('.dance-floor').height() + 40) * Math.random();
    var width = $('.dance-floor').width() * Math.random();
    var time = Math.random() * 1000;
    var dancer = new dancerMakerFunction(height, width, time, id);
    $('.dance-floor').append(dancer.$node);

    for (let i = 0; i < window.dancers.length; i++) {
      let danceTempStyles = window.dancers[i].styleSettings;
      let dist = Math.sqrt((danceTempStyles.top-height)**2+(danceTempStyles.left-width)**2);
      if (dist < 100) {
        window.dancers[i].nearNeighbor = true;
        dancer.nearNeighbor = true;
      }
    }
    window.dancers.push(dancer);
  });

  $('.line-up-button').on('click', function(event) {
    for (let i = 0; i < window.dancers.length; i++) {
      window.dancers[i].lineUp();
    }
  });

  $('.slow-down-button').on('click', function() {
    for (let i = 0; i < window.dancers.length; i++) {
      window.dancers[i].timeBetweenSteps = window.dancers[i].timeBetweenSteps*2;
    }
  })

  $('.speed-up-button').on('click', function() {
    for (let i = 0; i < window.dancers.length; i++) {
      window.dancers[i].timeBetweenSteps = window.dancers[i].timeBetweenSteps/2;
    }
  });

  $('.dance-floor').on('mouseenter', '.jumpyDancer', function(event) {
    var thisDancer = window.dancers[$(this)[0].id];
    $(this).css("border", '10px solid red');
    $(this).css("transform", 'scale(5)');
    $(thisDancer).attr("timeBetweenSteps", '50');
  });
});
