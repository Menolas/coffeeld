"use strict";

var menuBlock = document.querySelector('.main-nav');
var menuButton = menuBlock.querySelector('.toggler');
var menu = menuBlock.querySelector('.main-nav__list');

menuButton.addEventListener('click', function () {
	menu.classList.toggle('main-nav__list--shown');
	menuBlock.classList.toggle('main-nav--mobile');
	menuButton.classList.toggle('toggler--cross');
});
