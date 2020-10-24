"use strict";

(function () {

var testimonialsBlock = document.querySelector('.testimonials');
var testimonialsElements = testimonialsBlock.querySelectorAll('.testimonials__item');
var handler_fw = testimonialsBlock.querySelector('.handlers__item--right');
var handler_bk = testimonialsBlock.querySelector('.handlers__item--left');

var searchActiveItem = function () {
	for (var i = 0; i < testimonialsElements.length; i++) {
		var index;
		if (testimonialsElements[i].classList.contains('testimonials__item--active')) {
			index = i;
		}
	}
	return index;
};

var deactivItem = function (element) {
	element.classList.remove('testimonials__item--active');
};

var exposeItem = function (element) {
    element.classList.add('testimonials__item--active');
};

handler_fw.addEventListener('click', function () {
    var index = searchActiveItem();
    deactivItem(testimonialsElements[index]);
    var newIndex;
    if (index < testimonialsElements.length -1) {
    	newIndex = index + 1;
    	exposeItem(testimonialsElements[newIndex]);
    }

    if (index === testimonialsElements.length - 1) {
    	newIndex = 0;
    	exposeItem(testimonialsElements[newIndex]);
    }
});

handler_bk.addEventListener('click', function () {
	var index = searchActiveItem();
	deactivItem(testimonialsElements[index]);
	var newIndex;
	if (index > 0) {
		newIndex = index - 1;
		exposeItem(testimonialsElements[newIndex]);
	}

	if (index === 0) {
		newIndex = testimonialsElements.length - 1;
		exposeItem(testimonialsElements[newIndex]);
	}
});

})();
