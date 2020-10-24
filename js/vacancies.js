"use strict";

(function () {

var vacanciesBlock = document.querySelector('.vacancies__list');
var handlers = vacanciesBlock.querySelectorAll('.vacancies__item-handler');
var vacanciesElements = vacanciesBlock.querySelectorAll('.vacancies__item');

for (var i = 0; i < vacanciesElements.length; i++) {
	vacanciesElements[i].addEventListener('click', function(evt) {
    var target = event.currentTarget;
    var description = target.querySelector('.vacancies__full-description');
    var handler = target.querySelector('.vacancies__item-handler');
    description.classList.toggle('vacancies__full-description--shown');
    handler.classList.toggle('vacancies__item-handler--fliped');
	});
};
})();
