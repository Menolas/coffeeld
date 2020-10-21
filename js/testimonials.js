"use strict";

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

var deactivItem = function () {
	var index = searchActiveItem();
	testimonialsElements[index].classList.remove('testimonials__item--active');
};

handler_fw.addEventListener('click', function () {
	    var index = searchActiveItem();
	    var newIndex;
	    if (index < testimonialsElements.length -1) {
	    	newIndex = index + 1;
	    	testimonialsElements[index].classList.remove('testimonials__item--active');
	    	testimonialsElements[newIndex].classList.add('testimonials__item--active');
	    }

	    if (index === testimonialsElements.length - 1) {
	    	newIndex = 0;
	    	testimonialsElements[index].classList.remove('testimonials__item--active');
	    	testimonialsElements[newIndex].classList.add('testimonials__item--active');
	    }
	});

	handler_bk.addEventListener('click', function () {
		var index = searchActiveItem();
		var newIndex;
		if (index > 0) {
			newIndex = index - 1;
			testimonialsElements[index].classList.remove('testimonials__item--active');
			testimonialsElements[newIndex].classList.add('testimonials__item--active');
		}

		if (index === 0) {
			newIndex = testimonialsElements.length - 1;
			testimonialsElements[index].classList.remove('testimonials__item--active');
			testimonialsElements[newIndex].classList.add('testimonials__item--active'); 
		}
	});