//check for svg
var SVGsupport = !!document.createElementNS && !!document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect;

if(!SVGsupport){
	document.getElementsByTagName('html')[0].className += ' no-svg';
}

$(document).ready(function() {
	//svg replacement
	if(!SVGsupport){
		$('img[src$="svg"]').each(function(){
			if($(this).data('image') != 'undefined'){
				$(this).attr('src', $(this).data('image'));
			}
		});
	}

	// Main navigation
	if($('.js-main-nav').length > 0){
		$('.js-open-nav').on('click', function(){
			$(this).toggleClass('active');
			$('.js-main-nav').toggleClass('active');
		});
	}

	// Init fullpage plugin
	if($('#fullpage').length > 0){
		$('#fullpage').fullpage({
			sectionSelector: '.js-fullpage-section',
			scrollOverflow: true,
			responsiveWidth: 940
		});
	}

	// Init slider
	if($('.js-slider').length > 0){
		$('.js-slider').slick({
			arrows: true,
			dots: true,
			infinite: true,
			speed: 700,
			fade: true,
			adaptiveHeight: true
		});
	}

	// Init masonry grid
	if($('.js-masonry').length > 0){
		$('.js-masonry').masonry({
			itemSelector: '.js-masonry-col',
			percentPosition: true
		});
	}

	if($('.js-scroll-btn').length > 0){
		$('.js-scroll-btn').on('click', function(){
			$.fn.fullpage.moveTo(2);
		});
	}
});