function main() {
	$('.img1').hide();
	$('.tm-header').hide();
	$('.tm-header').fadeIn(800);
	$('.img1').fadeIn(800);
	$('.dropdown-content').hide();
	$('.dropdown').hover(function(){
		$('.dropdown-content').slideDown(500);
	}, function(){
		$('.dropdown-content').slideUp(500);
	});

	$('.open-slide').on('click', function()
	{
		$('#side-menu').css({'width':'25%'});
		$('#main').css({'margin-right':'25%'});

	});

	$('.btn-close').on('click', function()
	{
		$('#side-menu').width(0);
		$('#main').css({'margin-right':'0px'});
	});
}

$(document).ready(main);