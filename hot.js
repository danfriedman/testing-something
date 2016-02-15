$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	// Create a new when user clicks new game

	
  	function generateAnswer() {
    	return Math.random() * 100;
	}

  	//This means that you’ll need to write a named function that takes a user guess and determines which feedback to provide.
  	var 

  	// Feedback about the guess should appear in div#feedback. By default, when the page loads, the text in this field is set to “Make Your Guess!”

});