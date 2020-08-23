$(function(){  // Запись позволяет дождаться загрузки всего документа и только тогда выполняет действия с дом документами//

	let header = $("#header"); // Обращаемся к id//
	let intro = $("#intro");
	let introH;
	let scrollPos = $(window).scrollTop(); //Позиция скрола//


	$(window).on("scroll load resize", function(){
		introH = intro.innerHeight(); // Обращаемся к селектору intro и значению чтоб высчитало высоту//
		scrollPos = $(this).scrollTop();

		if (scrollPos > introH) {
			header.addClass("fixed"); // Придаем header класс fixed//
		} else {
			header.removeClass("fixed");// отменяем header класс fixed//
		}

		
	});




	
});

