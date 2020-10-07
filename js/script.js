"use strict";

var gallery_slider = document.querySelector('.gallery-slider');
var slider_elements = gallery_slider.querySelectorAll('.gallery-slider__item');
var handler_fw = gallery_slider.querySelector('.handlers__item--right');
var handler_bk = gallery_slider.querySelector('.handlers__item--left');
var bigPicture = gallery_slider.querySelector('.gallery-slider__big-picture-container img');

var searchActiveItem = function () {
	for (var i = 0; i < slider_elements.length; i++) {
		var index;
		if (slider_elements[i].classList.contains('gallery-slider__item--active')) {
			index = i;
		}
	}
	return index;
};

var deactivItem = function () {
	var index = searchActiveItem();
	slider_elements[index].classList.remove('gallery-slider__item--active');
};

var exposeElements = function (minIndex, maxIndex) {
	for (var i = minIndex; i <= maxIndex; i++) {
		slider_elements[i].classList.add('gallery-slider__item--active');
	}
};

if (screen.width < 768) {

	handler_fw.addEventListener('click', function () {
	    var index = searchActiveItem();
	    var newIndex;
	    if (index < slider_elements.length -1) {
	    	newIndex = index + 1;
	    	slider_elements[index].classList.remove('gallery-slider__item--active');
	    	slider_elements[newIndex].classList.add('gallery-slider__item--active');
	    }

	    if (index === slider_elements.length - 1) {
	    	newIndex = 0;
	    	slider_elements[index].classList.remove('gallery-slider__item--active');
	    	slider_elements[newIndex].classList.add('gallery-slider__item--active');
	    }
	});

	handler_bk.addEventListener('click', function () {
		var index = searchActiveItem();
		var newIndex;
		if (index > 0) {
			newIndex = index - 1;
			slider_elements[index].classList.remove('gallery-slider__item--active');
			slider_elements[newIndex].classList.add('gallery-slider__item--active');
		}

		if (index === 0) {
			newIndex = slider_elements.length - 1;
			slider_elements[index].classList.remove('gallery-slider__item--active');
			slider_elements[newIndex].classList.add('gallery-slider__item--active'); 
		}
	});
};

if (screen.width > 767) {
    deactivItem();
    exposeElements(0, 3);
};

