$(document).ready(function(){
	$("article a[href*=#]").on("click", function(e){
		if ($("#header").height()>50) {
			var anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top - 65
			}, 1000);
			e.preventDefault();
			return false;
		}
	});
});