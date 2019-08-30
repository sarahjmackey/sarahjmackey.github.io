$(document).ready(function(){
	console.log("The page is ready!");

	$('.research-item').click(function(){
		$(this).toggleClass('large');

	});

	$('.nav-item').click(function(){
		$('.nav-item').removeClass('active');
		$(this).addClass('active');
	});


	var hideAll = function(){
		$('.research-item').addClass('hide');
	}

	$('.btn-car').click(function(){
		hideAll();
		$('.car').removeClass('hide');
	});

	$('.btn-kinect').click(function(){
		hideAll();
		$('.kinect').removeClass('hide');
	});

	$('.btn-all').click(function(){
		hideAll();
		$('.all').removeClass('hide');
	});

	$('.btn-tracking').click(function(){
		hideAll();
		$('.tracking').removeClass('hide');
	});





});