$(function(){  // Запись позволяет дождаться загрузки всего документа и только тогда выполняет действия с дом документами//

	/*Fixed Header*/

	let header = $("#header"); // Обращаемся к id//
	let intro = $("#intro");
	let introH = intro.innerHeight();
	let scrollPos = $(window).scrollTop(); //Позиция скрола//
	let nav = $("#nav");
	let navToggle = $("#navToggle")

		checkScroll(scrollPos, introH);

	$(window).on("scroll load resize", function(){
		introH = intro.innerHeight(); // Обращаемся к селектору intro и значению чтоб высчитало высоту//
		scrollPos = $(this).scrollTop();

		checkScroll(scrollPos, introH);

	});
		function checkScroll(scrollPos, introH){
			if (scrollPos > introH) {
			header.addClass("fixed"); // Придаем header класс fixed//
		} else {
			header.removeClass("fixed");// отменяем header класс fixed//// 3-16стр хедер закреплен на всех этапах страницы//
		}
		}
	

	/*Smooth Scroll*/

	$("[data-scroll]").on("click",function(event){

		event.preventDefault();

		let elementId = $(this).data('scroll');
		let elementOffset = $(elementId).offset().top;

		nav.removeClass("show");

	$("html, body").animate({
		scrollTop: elementOffset - 70
	}, 700);
	});



	/*nav Toggle*/


		navToggle.on("click", function(event) {
		event.preventDefault();

		nav.toggleClass("show");

	})

		/*Reviews  https://kenwheeler.github.io/slick/*/

		let slider = $("#reviewsSlider");
		
		slider.slick({
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			fade: true,
			arrows: false,
			dots: true
});
});

