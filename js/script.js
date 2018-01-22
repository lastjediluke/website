
/*makes sure document is ready before loading script*/
//so in js, apparently the '' is for the name of classes


$(document).ready(function(){


	//haburger menu toggle
	$('.nav-toggle').click(function(){

		$('.main-nav').toggleClass('is-open');	//is-open is a class that I created and named, it could be whatever i want it to be 
		$('.hamburger').toggleClass('is-open');

	})


})