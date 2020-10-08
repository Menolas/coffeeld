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

for (var i = 0; i < handlers.length; i++) {
	handlers[i].setAttribute('data-position', i);
};

for (var i = 0; i < handlers.length; i++) {
	handlers[i].addEventListener('click', function (evt) {
		hideActivePicture();
		hideActiveHandler();
        var target = event.target;
        target.classList.add('about-slider__handlers-element--active');
        var i = target.getAttribute('data-position');
        pictures[i].classList.add('about-slider__picture-element--active');
	});
};
