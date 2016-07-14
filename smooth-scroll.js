(function($) {

	var $homeLinks = $("a[href^='#']");
	var navOffset = 55;
	$homeLinks.on("click", clickOnHomeLinks);


	function clickOnHomeLinks(e) {
		var $this = $(this);
		var targetToMove = $this.attr("href");
		var moveTo = $(targetToMove).offset().top;

		e.preventDefault();
		var $body = $("html, body");
		$body.stop().animate({scrollTop : moveTo - navOffset}, 1000)
	}

})(jQuery);