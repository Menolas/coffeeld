"use strict";

var slider = document.querySelector('.about-slider');
var pictures = slider.querySelectorAll('.about-slider__picture-element');
var handlers = slider.querySelectorAll('.about-slider__handlers-element');

var hideActivePicture = function () {
	for (var i = 0; i < pictures.length; i++) {
		if (pictures[i].classList.contains('about-slider__picture-element--active')) {
			pictures[i].classList.remove('about-slider__picture-element--active');
		}
	}
};

var hideActiveHandler = function () {
	for (var i = 0; i < handlers.length; i++) {
		var index;
		if (handlers[i].classList.contains('about-slider__handlers-element--active')) {
			handlers[i].classList.remove('about-slider__handlers-element--active');
		}
	}
};

var exposePicture = function (picture) {
    picture.classList.add('about-slider__picture-element--active');
};

for (var i = 0; i < handlers.length; i++) {
	handlers[i].addEventListener('click', function () {
		pictureIndex = i;
		hideActivePicture();
		exposePicture(pictures[pictureIndex]);
	})
};
