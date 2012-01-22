/* Author: VS
*/
/*
  $("#content-left").attr('src',"img/home-diamonds.jpg");
  $("#content-right").empty();
	$("#content-right").append("<h1>Diamonds are Forever</h1>");
	$("#content-right").append("<p>Diamonds...</p>");
	$("#content-right").append("<ul></ul>");
	$("#content-right ul").empty();
	$("#content-right ul").append("<li><a href='diamonds/shapes/'>Explore Shapes</a></li>");
	$("#content-right ul").append("<li><a href='diamonds/4-c/'>Learn About Diamonds</a></li>");
*/


var pauseTime = 4000;
var fadeTime = 800;
var t1;
var t2;
var t3;
var t4;
var interval_id;

function swapContent(old_id, new_id) {
  $(old_id).fadeOut(fadeTime);
	$(new_id).delay(fadeTime).fadeIn(fadeTime);
}
	
function delayContent() {
	$('.content-main').hide();
	$('.content-main').removeClass('hidden');
	//$('#arrow-scroll-1').hide();
	//$('#arrow-scroll-2').hide();
	//$('#arrow-scroll-3').hide();
	//$('#arrow-scroll-4').hide();
	
  $('#home-storefront').fadeIn(fadeTime);
  swapOnTimeout();
	interval_id = setInterval(function() {
	  swapOnTimeout();
  }, 4*pauseTime);	
	
	//var t1 = setTimeout("$('#home-storefront').fadeOut(fadeTime)", pauseTime);
  //$('#home-wedding').fadeIn(fadeTime); 
	//var t3 = setTimeout("$('#home-wedding').fadeOut(fadeTime)", pauseTime);
}

function swapOnTimeout() {
	t1 = setTimeout("swapContent('#home-storefront', '#home-wedding')", pauseTime);
	t2 = setTimeout("swapContent('#home-wedding', '#home-diamonds')", pauseTime*2);
	t3 = setTimeout("swapContent('#home-diamonds', '#home-custom')", pauseTime*3);
	t4 = setTimeout("swapContent('#home-custom', '#home-storefront')", pauseTime*4);
}

function clickContent(id) {
	  clearInterval(interval_id);
		clearTimeout(t1);
		clearTimeout(t2);
		clearTimeout(t3);
		clearTimeout(t4);		
		$('.content-main').hide();
		$(id).fadeIn('slow');
}

	
$("#scroll-store").live('click', function() {
  clickContent("#home-storefront");
});

$("#scroll-wedding").live('click', function() {
  clickContent("#home-wedding");
});

$("#scroll-diamonds").live('click', function() {
  clickContent("#home-diamonds");
});

$("#scroll-custom").live('click', function() {
  clickContent("#home-custom");
});


	/*$("#home-diamonds").delay(2*pauseTime + 4*fadeTime).fadeIn(fadeTime).delay(pauseTime).fadeOut(fadeTime);
	$("#home-custom").delay(3*pauseTime + 6*fadeTime).fadeIn(fadeTime).delay(pauseTime).fadeOut(fadeTime);
	var intervalID = setInterval(function() {
		$("#home-storefront").fadeIn(fadeTime).delay(pauseTime).fadeOut(fadeTime);
		$("#home-wedding").delay(pauseTime + 2*fadeTime).fadeIn(fadeTime).delay(pauseTime).fadeOut(fadeTime);
		$("#home-diamonds").delay(2*pauseTime + 4*fadeTime).fadeIn(fadeTime).delay(pauseTime).fadeOut(fadeTime);
		$("#home-custom").delay(3*pauseTime + 6*fadeTime).fadeIn(fadeTime).delay(pauseTime).fadeOut(fadeTime);
	}, 4*pauseTime + 8*fadeTime);	
	//setTimeout(fadeContent('.x','.y'), 2000);
	*/

	/*
	$("#scroll-diamonds").live('click', function() {
		window.clearInterval(intervalID);
		$('.content-main').addClass('hidden');
		$("#home-diamonds").removeClass('hidden').hide().fadeIn('slow');
	});
	*/
