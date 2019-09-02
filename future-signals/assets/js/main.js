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

	$('.btn-aussie').click(function(){
		hideAll();
		$('.aussie').removeClass('hide');
	});

	$('.btn-overseas').click(function(){
		hideAll();
		$('.overseas').removeClass('hide');
	});

	$('.btn-all').click(function(){
		hideAll();
		$('.all').removeClass('hide');
	});

	$('.btn-cafe').click(function(){
		hideAll();
		$('.cafe').removeClass('hide');
	});

	$('.btn-rest').click(function(){
		hideAll();
		$('.rest').removeClass('hide');
	});





});