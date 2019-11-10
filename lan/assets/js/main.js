$( document ).ready(function() {
    console.log( "ready!" );

   $('.find').click(function(){
   	console.log( "find is clicked!" );
   	$('.nav-buttons').toggleClass('hide');
   	$('.find').toggleClass('active');
   });

});