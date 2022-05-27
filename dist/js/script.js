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
/* Это будут слайдеры */
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

/* Это будут табы */
$(document).ready(function () {
	$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
		$(this)/* при нажатии на 1 из табов */
			.addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')/* добавляется класс active и убирается у всех соседей */
			.closest('div.container')/* ближайший блок , содержащий контент табов */.find('div.catalog__content').removeClass/* 57 урок 23 минута */('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
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


	/* Это будут модальные окна */

	$('[data-modal=consultation]').on('click', function () {
		$('.overlay,#consultation').fadeIn('slow')
	})
	$('.modal__close').on('click', function () {
		$('.overlay,#consultation,#order,#thanks').fadeOut('slow');
	})

	$('.button_mini').each(function (i) {/* при нажатии на каждый баттон */
		$(this).on('click', function () {
			$('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());/* чтобы взять нужный текст(из нужного пульсометра) */
			$('.overlay, #order').fadeIn('slow');/* открытие .overlay и #order */
		})
	})
	/* тут будет валидация форм */

	function validateForms(form) {
		$(form).validate({
			rules: {
				name: {
					required: true,/* чтобы это работало, нужно убирать required в html коде */
					minlength: 2
				},
				phone: "required",
				email: {
					required: true,
					email: true
				}
			},
			messages: {
				name: {
					required: "Пожалуйста, введите своё имя",
					minlength: jQuery.validator.format("Введите {0} cимвола!")/* {0}- ссылка на цифру , указанную в minlength */
				},
				phone: "Пожалуйста, введите свой номер телефона",
				email: {
					required: "Пожалуйста, введите свою почту",
					email: "Неправильно введён адрес почты"
				}
			}

		});
	}
	validateForms('#consultation form');
	validateForms('#order form');
	validateForms('#consultation-form form');

	$('input[name=phone]').mask("+7(999) 999 - 99 - 99");

	$('form').submit(function (e) {
		e.preventDefault();
		$('form').submit(function (e) {
			e.preventDefault();
			$.ajax({
				type: "POST",
				url: "mailer/smart.php",
				data: $(this).serialize()
			}).done(function () {
				$(this).find("input").val("");
				$('#consultation, #order').fadeOut();
				$('.overlay, #thanks').fadeIn('slow');

				$('form').trigger('reset');
			});
			return false;
		});
	});

	/* Плавное прлистывание по странице */

	$(window).scroll(function () {

		if ($(this).scrollTop() > 1600) {
			$('.pageup').fadeIn();

		} else {
			$('.pageup').fadeOut
		}

	});



	$("a[href^='#']").click(function () {
		const _href = $(this).attr("href");
		$("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
		return false;
	});

	new WOW().init();/* Без wow анимация срабатывала сразу при открытии сайта. Wow позволяет видеть анимацию при непосредственном пролистывании */

});

