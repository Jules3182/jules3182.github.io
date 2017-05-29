$(window).on('scroll', function() {
	smoothBackgroundScroll("images/bg.jpg");
});

function smoothBackgroundScroll(imgsrc) {
	function loadImageHeight(url, width) {
		var img = new Image();
		img.src = url;
		if (width) {
			img.width = width;
		}
		return img.height;
	}

	var dh, wh, ih, st, posy, backh, backw;
	if (!this._smoothBackgroundScroll) {
		var bcksize = $(document.body).css('background-size');
		var bmatch = /(\w+)\s*(\w+)/.exec(bcksize);
		if (!bmatch || bmatch.length < 3) {
			backh = loadImageHeight(imgsrc)
		} else {
			backh = parseInt(bmatch[2]);
			if (isNaN(backh)) {
				backw = parseInt(bmatch[1]);
				backh = loadImageHeight(imgsrc, parseInt(backw));
			}
		}
		this._smoothBackgroundScroll = {
			dh: $(document).height()
			, wh: $(window).height()
			, ih: backh
		}
	}
	dh = this._smoothBackgroundScroll.dh;
	wh = this._smoothBackgroundScroll.wh
	ih = this._smoothBackgroundScroll.ih;
	st = $(document).scrollTop();
	posy = (dh - ih) * st / (dh - wh);
	document.body.style.backgroundPosition = 'center ' + posy + 'px';
}
