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

var pauseTime = 6000;
var t1;
var t2;
var t3;
var t4;
var interval_id;

$("#nav-diamonds").live('mouseenter', function() {
	$("#nav-bar-line-1").show();
});
$("#nav-diamonds").live('mouseleave', function() {
	$("#nav-bar-line-1").hide();
});

$("#nav-engagement").live('mouseenter', function() {
	$("#nav-bar-line-2").show();
});
$("#nav-engagement").live('mouseleave', function() {
	$("#nav-bar-line-2").hide();
});

$("#nav-custom").live('mouseenter', function() {
	$("#nav-bar-line-3").show();
});
$("#nav-custom").live('mouseleave', function() {
	$("#nav-bar-line-3").hide();
});

$("#nav-collections").live('mouseenter', function() {
	$("#nav-bar-line-4").show();
});
$("#nav-collections").live('mouseleave', function() {
	$("#nav-bar-line-4").hide();
});

$("#nav-designers").live('mouseenter', function() {
	$("#nav-bar-line-5").show();
});
$("#nav-designers").live('mouseleave', function() {
	$("#nav-bar-line-5").hide();
});

$("#nav-our-story").live('mouseenter', function() {
	$("#nav-bar-line-6").show();
});
$("#nav-our-story").live('mouseleave', function() {
	$("#nav-bar-line-6").hide();
});


function homeOnLoad() {
	$('.content-main').hide();
	$('.content-main').removeClass('hidden');
	
	$('.nav-bar-line').hide();
	//$('#arrow-scroll-1').hide();
	//$('#arrow-scroll-2').hide();
	//$('#arrow-scroll-3').hide();
	//$('#arrow-scroll-4').hide();
	
  $('#home-storefront').fadeIn('slow');
  swapOnTimeout();
	interval_id = setInterval(function() {
	  swapOnTimeout();
  }, 4*pauseTime);	
	
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
}

function diamondsOnLoad() {
//  $('.content-main').hide();
//	$('.content-main').removeClass('hidden');
	
	$('.nav-bar-line').hide();
	$('#nav-bar-line-1').show();
	
	$("#nav-diamonds").live('mouseleave', function() {
		$("#nav-bar-line-1").show();
	});
}

function shapesOnLoad() {
  $('.shapes-large').hide();
	$('#shapes-round').show();
	$('.shapes-large').removeClass('hidden');
	
	$('.nav-bar-line').hide();
	$('#nav-bar-line-1').show();
	
	$("#nav-diamonds").live('mouseleave', function() {
		$("#nav-bar-line-1").show();
	});
	
	$(".shapes-small").live('mouseenter', function() {
		split_str = $(this).attr('href').split('\'');
		swapShapes(split_str[1]);
	});	
}

function customOnLoad() {
	$('.nav-bar-line').hide();
	$('#nav-bar-line-3').show();
	
	$("#nav-custom").live('mouseleave', function() {
		$("#nav-bar-line-3").show();
	});
}

function ourStoryOnLoad() {
	$('.nav-bar-line').hide();
	$('#nav-bar-line-6').show();
	
	$("#nav-our-story").live('mouseleave', function() {
		$("#nav-bar-line-6").show();
	});	
}

function weddingOnLoad() {
	$('.nav-bar-line').hide();
	$('#nav-bar-line-2').show();
	
	$("#nav-engagement").live('mouseleave', function() {
		$("#nav-bar-line-2").show();
	});
}

$(document).ready(function(){
	$(".rounded-border").load(function() {
		$(this).wrap(function() {
			return '<span class="' + $(this).attr('class') + '" style="background:url(' + $(this).attr('src') + ') no-repeat center center; width: ' + $(this).width() + 'px; height: ' + $(this).height() + 'px; ' + $(this).attr('style') + '" />';
		});
		$(this).hide();
	});
});

function jewelryOnLoad() {
	$('.nav-bar-line').hide();
	$('#nav-bar-line-4').show();
	
	$("#nav-collections").live('mouseleave', function() {
		$("#nav-bar-line-4").show();
	});
}

function designersOnLoad() {
	$('.nav-bar-line').hide();
	$('#nav-bar-line-5').show();
	
	$("#nav-designers").live('mouseleave', function() {
		$("#nav-bar-line-5").show();
	});
}

function swapOnTimeout() {
	t1 = setTimeout("swapContent('#home-storefront', '#home-wedding')", pauseTime);
	t2 = setTimeout("swapContent('#home-wedding', '#home-diamonds')", pauseTime*2);
	t3 = setTimeout("swapContent('#home-diamonds', '#home-custom')", pauseTime*3);
	t4 = setTimeout("swapContent('#home-custom', '#home-storefront')", pauseTime*4);
}

function swapContent(old_id, new_id) {
  $(old_id).fadeOut('slow');
	$(new_id).delay('slow').fadeIn('slow');
}

function swapShapes(id) {
  $('.shapes-large').addClass('hidden');
	$(id).removeClass('hidden');
	$('.shapes-large').hide();
	$(id).fadeIn('slow');
}

function clickContent(id) {
		clearInterval(interval_id);
		clearTimeout(t1);
		clearTimeout(t2);
		clearTimeout(t3);
		clearTimeout(t4);		
		$('.content-main').addClass('hidden');
		$(id).removeClass('hidden');
		$('.content-main').hide();
		$(id).fadeIn('slow');
}

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
