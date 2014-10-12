(function ($) {
	$.fn.autoIMG = function () {
		maxHeight = this.height();
		maxWidth = this.width();
		this.find('img')[0].style.maxHeight = maxHeight + 'px';
		this.find('img')[0].style.maxWidth = maxWidth + 'px';
		return this;
	};
})(jQuery); 