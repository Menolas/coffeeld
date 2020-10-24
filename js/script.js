"use strict";
// блок слайдера
var gallery_slider = document.querySelector('.gallery-slider');
// массив елементов списка 
var slider_elements = gallery_slider.querySelectorAll('.gallery-slider__item');
// правый переключатель
var handler_fw = gallery_slider.querySelector('.handlers__item--right');
// левый переключатель
var handler_bk = gallery_slider.querySelector('.handlers__item--left');
// большая картинка
var bigPicture = gallery_slider.querySelector('.gallery-slider__big-picture-container img');

var lastIndex = slider_elements.length - 1;

// присвоение всем елементам атрибута 'data-position'
for (var i = 0; i < slider_elements.length; i++) {
	slider_elements[i].setAttribute('data-position', i)
};

// найти активный елемент (возвращает его индекс)
var searchActiveItem = function () {
	for (var i = 0; i < slider_elements.length; i++) {
		var index;
		if (slider_elements[i].classList.contains('gallery-slider__item--active')) {
			index = i;
		}
	}
	return index;
};

// спрятать елемент
var deactivItem = function (element) {
	element.classList.remove('gallery-slider__item--active');
};

// показать елемент
var exposeElement = function (element) {
	element.classList.add('gallery-slider__item--active');
};

// получить массив состоящий из значений атирбута 'data-position'
var getElementsData = function (array) {
	var elementData = [];
	for (var i = 0; i < array.length; i++) {
		var data = array[i].getAttribute('data-position');
		elementData.push(data);
	}

	return elementData;
};

// выяснить содержит ли массив число (максимальный индекс елемента) - возвращает индекс максимального елемента
var contains = function (arr, elem) {
	var index;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == elem) {
        	index = i;
            return index;
        }
    }
    return false;
};

var createGallery = function () {
	var array = [];
	for (var i = 0; i < slider_elements.length; i++) {
		var galleryItem = {};
		galleryItem.src = slider_elements[i].querySelector('img').src.replace('mobile', 'mini');
		galleryItem.data = slider_elements[i].getAttribute('data-position');
        array.push(galleryItem);
	}
	return array;
};

var galleryItems = createGallery();

var galleryContainer = gallery_slider.querySelector('.gallery-slider__list');
var galleryElementTemplate = document.querySelector('template').content.querySelector('.gallery-slider__item');

var renderGalleryElement = function (picture) {
	var galleryElement = galleryElementTemplate.cloneNode(true);
	galleryElement.querySelector('img').src = picture.src;
	galleryElement.setAttribute('data-position', picture.data);
	galleryElement.style = "display: block;";

	return galleryElement;
};

var renderGallery = function (pictures, min, max) {
    var fragment = document.createDocumentFragment();

    for (var i = min; i < max; i++) {
    	fragment.appendChild(renderGalleryElement(pictures[i]));
    }

    return fragment;
};

var renderGallery3 = function (pictures, min, max) {
    var fragment = document.createDocumentFragment();

    for (var i = min; i < max; i++) {
    	fragment.appendChild(renderGalleryElement(pictures[i]));
    }
    fragment.appendChild(renderGalleryElement(pictures[0]));

    return fragment;
};

var renderGallery2 = function (pictures, min, max) {
    var fragment = document.createDocumentFragment();

    for (var i = min; i < max; i++) {
    	fragment.appendChild(renderGalleryElement(pictures[i]));
    }
    fragment.appendChild(renderGalleryElement(pictures[0]));
    fragment.appendChild(renderGalleryElement(pictures[1]));

    return fragment;
};

var renderGallery1 = function (pictures, min, max) {
    var fragment = document.createDocumentFragment();
    fragment.appendChild(renderGalleryElement(pictures[lastIndex]));

    for (var i = min; i < max; i++) {
    	fragment.appendChild(renderGalleryElement(pictures[i]));
    }
    
    return fragment;
};

var renderReversGallery0 = function (pictures, min, max) {
	var fragment = document.createDocumentFragment();
	fragment.appendChild(renderGalleryElement(pictures[lastIndex]));
	for (var i = min; i < max; i++) {
    	fragment.appendChild(renderGalleryElement(pictures[i]));
    }

    return fragment;
};

var renderReversGallery1 = function (pictures, min, max) {
	var fragment = document.createDocumentFragment();
	fragment.appendChild(renderGalleryElement(pictures[lastIndex -1]));
	fragment.appendChild(renderGalleryElement(pictures[lastIndex]));
	for (var i = min; i < max; i++) {
    	fragment.appendChild(renderGalleryElement(pictures[i]));
    }
    return fragment;
};

var renderReversGallery2 = function (pictures, min, max) {
	var fragment = document.createDocumentFragment();
	for (var i = min; i < max; i++) {
    	fragment.appendChild(renderGalleryElement(pictures[i]));
    }

    fragment.appendChild(renderGalleryElement(pictures[0]));
    return fragment;
};

// мобильная версия слайдера
if (screen.width < 768) {

	handler_fw.addEventListener('click', function () {
	    var index = searchActiveItem();
	    var newIndex;
	    if (index < slider_elements.length -1) {
	    	newIndex = index + 1;
	    	slider_elements[index].classList.remove('gallery-slider__item--active');
	    	exposeElement(slider_elements[newIndex]);
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

// таблетка/десктоп версия слайдера
if (screen.width > 767) {

    galleryContainer.innerHTML = "";
    galleryContainer.appendChild(renderGallery(galleryItems, 0, 4));
    
    // анимация ленточного движения маленькиъ елементов - правый хендлер
    handler_fw.addEventListener('click', function () {
    	
        var exposedData = getElementsData(galleryContainer.querySelectorAll('.gallery-slider__item'));
        galleryContainer.innerHTML = "";
        
        if (!contains(exposedData, lastIndex) && contains(exposedData, lastIndex) !== 0) {
        	var nextIndex = Math.max.apply(Math, exposedData) + 2;
        	var minIndex = Math.min.apply(Math, exposedData) + 1;
		    galleryContainer.appendChild(renderGallery(galleryItems, minIndex, nextIndex));
        }

        if (contains(exposedData, lastIndex) === 3) {
        	var nextIndex = lastIndex + 1;
        	var minIndex = lastIndex - 2;
	        galleryContainer.appendChild(renderGallery3(galleryItems, minIndex, nextIndex));
        }

        if (contains(exposedData, lastIndex) === 2) {
        	var nextIndex = lastIndex + 1;
        	var minIndex = lastIndex - 1;
	        galleryContainer.appendChild(renderGallery2(galleryItems, minIndex, nextIndex));
        }

        if (contains(exposedData, lastIndex) === 1) {
        	var nextIndex = 3;
        	var minIndex = 0;
	        galleryContainer.appendChild(renderGallery1(galleryItems, minIndex, nextIndex));
        }

        if (contains(exposedData, lastIndex) === 0) {
        	galleryContainer.appendChild(renderGallery(galleryItems, 0, 4));
        }
        var bigPictureUrl = galleryContainer.querySelector('.gallery-slider__item img').src.replace('-mini', '');
        bigPicture.src = bigPictureUrl;
    });

    // анимация ленточного движения маленьких елементов - левый хендлер

    handler_bk.addEventListener('click', function () {
     	
     	var exposedData = getElementsData(galleryContainer.querySelectorAll('.gallery-slider__item'));
     	galleryContainer.innerHTML = "";
        
        if (!contains(exposedData, 0) && contains(exposedData, 0) !== 0) {
        	var minIndex = Math.min.apply(Math, exposedData) - 1;
        	var maxIndex = Math.max.apply(Math, exposedData);
            galleryContainer.appendChild(renderGallery(galleryItems, minIndex, maxIndex));
        }

     	if (contains(exposedData, 0) === 0) {
	        galleryContainer.appendChild(renderReversGallery0(galleryItems, 0, 3));
        }

        if (contains(exposedData, 0) === 1) {
            galleryContainer.appendChild(renderReversGallery1(galleryItems, 0, 2));
        }

        if (contains(exposedData, 0) === 2) {
        	var minIndex = lastIndex - 2;
        	var maxIndex = lastIndex + 1;
            galleryContainer.appendChild(renderReversGallery2(galleryItems, minIndex, maxIndex));
        }

        if (contains(exposedData, 0) === 3) {
        	var minIndex = lastIndex - 3;
        	var maxIndex = lastIndex + 1;
            galleryContainer.appendChild(renderGallery(galleryItems, minIndex, maxIndex));
        }

     });

    // анимация выведения маленького елемента а большой контейнер по клику на маленький
    var smallPictures = galleryContainer.querySelectorAll('.gallery-slider__item');

    for (var i = 0; i < smallPictures.length; i++) {
    	smallPictures[i].addEventListener('click', function (evt) {
    		var target = event.currentTarget;
    		
    		bigPicture.src = target.querySelector('img').src.replace('-mini', '');
    	});
    };
};

