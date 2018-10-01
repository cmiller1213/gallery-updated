$(document).ready(function(){

	// select all the slides (array)
	var slides = $(".slide");
	// set a index slide (number); where we start
	var slideIndex = 0;
	// what's the current slide? (indexing into an array)
	var currentSlide = slides[slideIndex];

	// hide all slides with the hide() method
	slides.hide();
	// this is the equivalent to saying 
	// $(".slide").hide();
	// console.log("There are this many slides: " + slides.length);

	// show the first one
	slides.first().show();

	// when a user clicks "next"... (function)
	$(".next").click(function(){
		// hide current slide
		$(currentSlide).hide();

		// increment the slideIndex (increases the slide index)
		slideIndex++; // slideIndex = slideIndex + 1

		// if the slideIndex is greater than 4... (conditional)
		if (slideIndex > 4){
			// reset the slideIndex to 0
			slideIndex = 0;
		}

		// set the currentSlide as the new slideIndex (indexing into the array) among the set of slides
		currentSlide = slides[slideIndex];

		// show the currentSlide
		$(currentSlide).show();
	}); // close the next function
	// when a user clicks "previous" (function)
	$(".previous").click(function(){
		// hide the current slide
		$(currentSlide).hide();

		// decrement the slideIndex
		slideIndex--; // slideIndex = slideIndex - 1

		// if the slideIndex is less than 0... (condition)
		if (slideIndex < 0){
			// reset the slideIndex to 4
			slideIndex = 4;
		}

		// set the new slideIndex as the currentSlide
		currentSlide = slides[slideIndex];
		// show the currentSlide
		$(currentSlide).show();

	}); // close the previous function
}); // close document ready function

