var menuSlider = document.querySelector('.menu-slider');
var menuPositions = menuSlider.querySelectorAll('.menu-subps__item');
var handlers = menuSlider.querySelectorAll('.menu-slider-buttons__item');

var hideActiveMenuPosition = function () {
	for (var i = 0; i < menuPositions.length; i++) {
		if (menuPositions[i].classList.contains('menu-subps__item--active')) {
			menuPositions[i].classList.remove('menu-subps__item--active');
		}
	}
};

var hideActiveHandler = function () {
	for (var i = 0; i < handlers.length; i++) {
		var index;
		if (handlers[i].classList.contains('menu-slider-buttons__item--active')) {
			handlers[i].classList.remove('menu-slider-buttons__item--active');
		}
	}
};

for (var i = 0; i < handlers.length; i++) {
	handlers[i].setAttribute('data-position', i);
};

for (var i = 0; i < handlers.length; i++) {
	handlers[i].addEventListener('click', function (evt) {
		hideActiveMenuPosition();
		hideActiveHandler();
        var target = event.target;
        target.classList.add('menu-slider-buttons__item--active');
        var i = target.getAttribute('data-position');
        menuPositions[i].classList.add('menu-subps__item--active');
	});
};
