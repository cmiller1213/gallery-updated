//wait until the HTML document is ready
$(document).ready(function(){
	//select all the slides (array)
	var slides = $('.slide');
	//set the index slide (number)
	var slideIndex = 0;
	//what's the current slide?(indexing into an array)
	var currentSlide = slides[slideIndex];

	//hide all slides
	slides.hide();
	//show the first one
	slides.first().show();
	//when a user clicks next (function)
	$('.next').click(function(){
		$(currentSlide).hide();
		slideIndex++;
		if (slideIndex > 4){
			slideIndex = 0;
		}
		currentSlide = slides[slideIndex];
		$(currentSlide).show();
	});
	//when a user clicks previous (function)
	$('.previous').click(function(){
		$(currentSlide).hide();
		slideIndex--;
		if(slideIndex < 0){
			slideIndex = 4;
		}
		currentSlide = slides[slideIndex];
		$(currentSlide).show();
	});
});