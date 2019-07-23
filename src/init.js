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

    var dancer = new dancerMakerFunction(
      ($('.dance-floor').height()+40) * Math.random(),
      $('.dance-floor').width() * Math.random(),
      Math.random() * 1000
    );
    $('.dance-floor').append(dancer.$node);
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

  $('.dance-floor').on('mouseenter', '.RotatingDancer', function(event) {
    $(console.log(this.$node));
  });

  $('.dance-floor').on('mouseenter', '.jumpyDancer', function(event) {
    // console.log($(this))
    console.log(window.dancers[0]);
    console.log($(this));
    $(this).css("border", '10px solid red');
    $(this).css("transform", 'scale(5)');
    $(window.dancers[0]).attr("timeBetweenSteps", '1000');
    // $(this[0]).attr("timeBetweenSteps", '1000');
    $.proxy(this.console, this)
    // console();
    // alert($(this).attr("timeBetweenSteps"));

    // if (this.styleSettings !== undefined) {
    //   this.styleSettings = {
    //     transform: 'scale(2)'
    //     // left: left
    //   };
    //   this.$node.css(this.styleSettings);
    // }
  });
});
