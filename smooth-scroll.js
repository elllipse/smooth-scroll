(function($) {

	var $homeLinks = $("a[href^='#']");
	var $body = $("html, body");
	var navOffset = 55;
	$homeLinks.on("click", clickOnHomeLinks);


	function moveToTarget(pos) {
		$body.stop().animate({scrollTop : pos - navOffset}, 1000);
	}

	function clickOnHomeLinks(e) {
		var $this = $(this),
			target = $this.attr("href"),
			targetPosition = $(target).offset().top;

		e.preventDefault();
		moveToTarget(targetPosition);
	}

})(jQuery);