/* $(document).ready(function () {
	$('.carousel__inner').slick({
		speed: 500,
		fade: true,
		cssEase: 'linear',
		prevArrow: '<button button type="button" class="slick-prev" > <img src="icons/left.svg"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
		responsive: [
			{
				breakpoint: 992,
				settings: {
					arrows: false,
					dots: true
				}
			},
		]
	});
}); */  /* для slick-slider */

const slider = tns({
	container: '.carousel__inner',
	items: 1,
	slideBy: 'page',
	autoplay: false,
	controls: false,
	nav: false,
	autoplay: true
	// controlsText: [
	// 	'<img src="icons/left.svg"></img>',
	// 	'<img src="icons/right.svg"></img>'
	// ]/* tiny-s(неудобный способ задания стрелок) */


});

document.querySelector('.prev').onclick = function () {
	slider.goTo("prev");
};
document.querySelector('.next').onclick = function () {
	slider.goTo("next");
};


$(document).ready(function () {
	$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
		$(this)
			.addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
			.closest('div.container').find('div.catalog__content').removeClass/* 57 урок 23 минута */('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
	});
	function toggleSlide(item) {
		$(item).each(function (i) {
			$(this).on('click', function (e) {
				e.preventDefault();
				$('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active')
				$('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active')
			});
		});
	};
	toggleSlide('.catalog-item__link');
	toggleSlide('.catalog-item__back');
});
