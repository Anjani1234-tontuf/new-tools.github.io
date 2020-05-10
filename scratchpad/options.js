var alt = false, options;
$(function(){
	options = $('#options');
	$('#options-hint').on('mousedown', function(event){toggleOptions(); return false;});//Prevent selecting notification text
});
//Key handler for Alt and O (both necessary to open Options)
$(window).on('keydown', function(event){
	if(event.keyCode == 18){//Alt
		alt = true;
		return false;
	}else if(event.keyCode == 79){//O
		if(alt){
			toggleOptions();
			return false;
		}
	}
}).on('keyup', function(event){
	if(event.keyCode == 18){
		alt = false;
		return false;
	}
});
function toggleOptions(){
	if(options.hasClass('visible')){
		options.removeClass('visible');
	}else{
		options.addClass('visible');
	}
}
