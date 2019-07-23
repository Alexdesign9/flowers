/*var	number	=	document.querySelector.Value(".constructor-block-count_number1");
alert(number);*/

	$(document).ready(function(){
$('.form-wrap__button').on("click", function(){
	var input = document.querySelector(".form-wrap__input").value;
if (input == "") {
	alert("Оставьте свой номер, чтобы мы смогли связаться с вами.");
}

});
//выделение нужного цвета
//белый цвет
$('.constructor-block-color_white1').on("click", function(){
$('.constructor-block-color_white1').addClass('constructor-block-color_framew');
$('.constructor-block-color_yellow1').removeClass('constructor-block-color_framew');
$('.constructor-block-color_pink1').removeClass('constructor-block-color_frame');
$('.constructor-block-color_red1').removeClass('constructor-block-color_frame');
$('.constructor-block-color_blue1').removeClass('constructor-block-color_frame');
document.querySelector(".rose").src = "img/constructor/rose_white.png";
});
//бежевый цвет
$('.constructor-block-color_yellow1').on("click", function(){
$('.constructor-block-color_white1').removeClass('constructor-block-color_framew');
$('.constructor-block-color_yellow1').addClass('constructor-block-color_framew');
$('.constructor-block-color_pink1').removeClass('constructor-block-color_frame');
$('.constructor-block-color_red1').removeClass('constructor-block-color_frame');
$('.constructor-block-color_blue1').removeClass('constructor-block-color_frame');
document.querySelector(".rose").src = "img/constructor/rose_yellow.png";
});
//розовый цвет
$('.constructor-block-color_pink1').on("click", function(){
$('.constructor-block-color_white1').removeClass('constructor-block-color_framew');
$('.constructor-block-color_yellow1').removeClass('constructor-block-color_framew');
$('.constructor-block-color_pink1').addClass('constructor-block-color_frame');
$('.constructor-block-color_red1').removeClass('constructor-block-color_frame');
$('.constructor-block-color_blue1').removeClass('constructor-block-color_frame');
document.querySelector(".rose").src = "img/constructor/rose_pink.png";
});
//красный цвет
$('.constructor-block-color_red1').on("click", function(){
$('.constructor-block-color_white1').removeClass('constructor-block-color_framew');
$('.constructor-block-color_yellow1').removeClass('constructor-block-color_framew');
$('.constructor-block-color_pink1').removeClass('constructor-block-color_frame');
$('.constructor-block-color_red1').addClass('constructor-block-color_frame');
$('.constructor-block-color_blue1').removeClass('constructor-block-color_frame');
document.querySelector(".rose").src = "img/constructor/rose_red.png";
});

//плюс минус для 1го элемента
$('.constructor-block-count_plus1').on("click", function(){
var	number	=	$(".constructor-block-count_number1").text();
number++;
	$(".constructor-block-count_number1").text(number);

});

$('.constructor-block-count_minus1').on("click", function(){
var	number	=	$(".constructor-block-count_number1").text();
number--;
if(number > 0){
	$(".constructor-block-count_number1").text(number);
}
else{
	$(".constructor-block-count_number1").text('0');
}
});
//2элемент
//плюс минус для 2го элемента
$('.constructor-block-count_plus2').on("click", function(){
var	number	=	$(".constructor-block-count_number2").text();
number++;
	$(".constructor-block-count_number2").text(number);

});

$('.constructor-block-count_minus2').on("click", function(){
var	number	=	$(".constructor-block-count_number2").text();
number--;
if(number > 0){
	$(".constructor-block-count_number2").text(number);
}
else{
	$(".constructor-block-count_number2").text('0');
}
});

//выделение нужного цвета
//белый цвет
$('.constructor-block-color_white2').on("click", function(){
$('.constructor-block-color_white2').addClass('constructor-block-color_framew');
$('.constructor-block-color_yellow2').removeClass('constructor-block-color_framew');
$('.constructor-block-color_pink2').removeClass('constructor-block-color_frame');
$('.constructor-block-color_red2').removeClass('constructor-block-color_frame');
$('.constructor-block-color_blue2').removeClass('constructor-block-color_frame');
document.querySelector(".tulips").src = "img/constructor/tulips_white.png";
});
//бежевый цвет
$('.constructor-block-color_yellow2').on("click", function(){
$('.constructor-block-color_white2').removeClass('constructor-block-color_framew');
$('.constructor-block-color_yellow2').addClass('constructor-block-color_framew');
$('.constructor-block-color_pink2').removeClass('constructor-block-color_frame');
$('.constructor-block-color_red2').removeClass('constructor-block-color_frame');
$('.constructor-block-color_blue2').removeClass('constructor-block-color_frame');
document.querySelector(".tulips").src = "img/constructor/tulips_yellow.png";
});
//розовый цвет
$('.constructor-block-color_pink2').on("click", function(){
$('.constructor-block-color_white2').removeClass('constructor-block-color_framew');
$('.constructor-block-color_yellow2').removeClass('constructor-block-color_framew');
$('.constructor-block-color_pink2').addClass('constructor-block-color_frame');
$('.constructor-block-color_red2').removeClass('constructor-block-color_frame');
$('.constructor-block-color_blue2').removeClass('constructor-block-color_frame');
document.querySelector(".tulips").src = "img/constructor/tulips_pink.png";
});
//красный цвет
$('.constructor-block-color_red2').on("click", function(){
$('.constructor-block-color_white2').removeClass('constructor-block-color_framew');
$('.constructor-block-color_yellow2').removeClass('constructor-block-color_framew');
$('.constructor-block-color_pink2').removeClass('constructor-block-color_frame');
$('.constructor-block-color_red2').addClass('constructor-block-color_frame');
$('.constructor-block-color_blue2').removeClass('constructor-block-color_frame');
document.querySelector(".tulips").src = "img/constructor/tulips_red.png";
});

//3 элемент
//плюс минус для 3го элемента
$('.constructor-block-count_plus3').on("click", function(){
var	number	=	$(".constructor-block-count_number3").text();
number++;
	$(".constructor-block-count_number3").text(number);

});

$('.constructor-block-count_minus3').on("click", function(){
var	number	=	$(".constructor-block-count_number3").text();
number--;
if(number > 0){
	$(".constructor-block-count_number3").text(number);
}
else{
	$(".constructor-block-count_number3").text('0');
}
});

//выделение нужного цвета
//белый цвет
$('.constructor-block-color_white3').on("click", function(){
$('.constructor-block-color_white3').addClass('constructor-block-color_framew');
$('.constructor-block-color_yellow3').removeClass('constructor-block-color_framew');
$('.constructor-block-color_pink3').removeClass('constructor-block-color_frame');
$('.constructor-block-color_red3').removeClass('constructor-block-color_frame');
$('.constructor-block-color_blue3').removeClass('constructor-block-color_frame');
document.querySelector(".peonies").src = "img/constructor/peonies_white.png";
});
//бежевый цвет
$('.constructor-block-color_yellow3').on("click", function(){
$('.constructor-block-color_white3').removeClass('constructor-block-color_framew');
$('.constructor-block-color_yellow3').addClass('constructor-block-color_framew');
$('.constructor-block-color_pink3').removeClass('constructor-block-color_frame');
$('.constructor-block-color_red3').removeClass('constructor-block-color_frame');
$('.constructor-block-color_blue3').removeClass('constructor-block-color_frame');
document.querySelector(".peonies").src = "img/constructor/peonies_yellow.png";
});
//розовый цвет
$('.constructor-block-color_pink3').on("click", function(){
$('.constructor-block-color_white3').removeClass('constructor-block-color_framew');
$('.constructor-block-color_yellow3').removeClass('constructor-block-color_framew');
$('.constructor-block-color_pink3').addClass('constructor-block-color_frame');
$('.constructor-block-color_red3').removeClass('constructor-block-color_frame');
$('.constructor-block-color_blue3').removeClass('constructor-block-color_frame');
document.querySelector(".peonies").src = "img/constructor/peonies_pink.png";
});
//красный цвет
$('.constructor-block-color_red3').on("click", function(){
$('.constructor-block-color_white3').removeClass('constructor-block-color_framew');
$('.constructor-block-color_yellow3').removeClass('constructor-block-color_framew');
$('.constructor-block-color_pink3').removeClass('constructor-block-color_frame');
$('.constructor-block-color_red3').addClass('constructor-block-color_frame');
$('.constructor-block-color_blue3').removeClass('constructor-block-color_frame');
document.querySelector(".peonies").src = "img/constructor/peonies_red.png";
});


//4 элемент
//плюс минус для 3го элемента
$('.constructor-block-count_plus4').on("click", function(){
var	number	=	$(".constructor-block-count_number4").text();
number++;
	$(".constructor-block-count_number4").text(number);

});

$('.constructor-block-count_minus4').on("click", function(){
var	number	=	$(".constructor-block-count_number4").text();
number--;
if(number > 0){
	$(".constructor-block-count_number4").text(number);
}
else{
	$(".constructor-block-count_number4").text('0');
}
});

//выделение нужного цвета
//белый цвет
$('.constructor-block-color_white4').on("click", function(){
$('.constructor-block-color_white4').addClass('constructor-block-color_framew');
$('.constructor-block-color_yellow4').removeClass('constructor-block-color_framew');
$('.constructor-block-color_pink4').removeClass('constructor-block-color_frame');
$('.constructor-block-color_red4').removeClass('constructor-block-color_frame');
$('.constructor-block-color_blue4').removeClass('constructor-block-color_frame');
document.querySelector(".gerberas").src = "img/constructor/gerberas_white.png";
});
//бежевый цвет
$('.constructor-block-color_yellow4').on("click", function(){
$('.constructor-block-color_white4').removeClass('constructor-block-color_framew');
$('.constructor-block-color_yellow4').addClass('constructor-block-color_framew');
$('.constructor-block-color_pink4').removeClass('constructor-block-color_frame');
$('.constructor-block-color_red4').removeClass('constructor-block-color_frame');
$('.constructor-block-color_blue4').removeClass('constructor-block-color_frame');
document.querySelector(".gerberas").src = "img/constructor/gerberas_yellow.png";
});
//розовый цвет
$('.constructor-block-color_pink4').on("click", function(){
$('.constructor-block-color_white4').removeClass('constructor-block-color_framew');
$('.constructor-block-color_yellow4').removeClass('constructor-block-color_framew');
$('.constructor-block-color_pink4').addClass('constructor-block-color_frame');
$('.constructor-block-color_red4').removeClass('constructor-block-color_frame');
$('.constructor-block-color_blue4').removeClass('constructor-block-color_frame');
document.querySelector(".gerberas").src = "img/constructor/gerberas_pink.png";
});
//красный цвет
$('.constructor-block-color_red4').on("click", function(){
$('.constructor-block-color_white4').removeClass('constructor-block-color_framew');
$('.constructor-block-color_yellow4').removeClass('constructor-block-color_framew');
$('.constructor-block-color_pink4').removeClass('constructor-block-color_frame');
$('.constructor-block-color_red4').addClass('constructor-block-color_frame');
$('.constructor-block-color_blue4').removeClass('constructor-block-color_frame');
document.querySelector(".gerberas").src = "img/constructor/gerberas_red.png";
});

//5 элемент
//плюс минус для 3го элемента
$('.constructor-block-count_plus5').on("click", function(){
var	number	=	$(".constructor-block-count_number5").text();
number++;
	$(".constructor-block-count_number5").text(number);

});

$('.constructor-block-count_minus5').on("click", function(){
var	number	=	$(".constructor-block-count_number5").text();
number--;
if(number > 0){
	$(".constructor-block-count_number5").text(number);
}
else{
	$(".constructor-block-count_number5").text('0');
}
});

//выделение нужного цвета
//белый цвет
$('.constructor-block-color_white5').on("click", function(){
$('.constructor-block-color_white5').addClass('constructor-block-color_framew');
$('.constructor-block-color_yellow5').removeClass('constructor-block-color_framew');
$('.constructor-block-color_pink5').removeClass('constructor-block-color_frame');
$('.constructor-block-color_red5').removeClass('constructor-block-color_frame');
$('.constructor-block-color_blue5').removeClass('constructor-block-color_frame');
document.querySelector(".chrysanthemums").src = "img/constructor/chrysanthemums_white.png";
});
//бежевый цвет
$('.constructor-block-color_yellow5').on("click", function(){
$('.constructor-block-color_white5').removeClass('constructor-block-color_framew');
$('.constructor-block-color_yellow5').addClass('constructor-block-color_framew');
$('.constructor-block-color_pink5').removeClass('constructor-block-color_frame');
$('.constructor-block-color_red5').removeClass('constructor-block-color_frame');
$('.constructor-block-color_blue5').removeClass('constructor-block-color_frame');
document.querySelector(".chrysanthemums").src = "img/constructor/chrysanthemums_yellow.png";
});
//розовый цвет
$('.constructor-block-color_pink5').on("click", function(){
$('.constructor-block-color_white5').removeClass('constructor-block-color_framew');
$('.constructor-block-color_yellow5').removeClass('constructor-block-color_framew');
$('.constructor-block-color_pink5').addClass('constructor-block-color_frame');
$('.constructor-block-color_red5').removeClass('constructor-block-color_frame');
$('.constructor-block-color_blue5').removeClass('constructor-block-color_frame');
document.querySelector(".chrysanthemums").src = "img/constructor/chrysanthemums_pink.png";
});
//красный цвет
$('.constructor-block-color_red5').on("click", function(){
$('.constructor-block-color_white5').removeClass('constructor-block-color_framew');
$('.constructor-block-color_yellow5').removeClass('constructor-block-color_framew');
$('.constructor-block-color_pink5').removeClass('constructor-block-color_frame');
$('.constructor-block-color_red5').addClass('constructor-block-color_frame');
$('.constructor-block-color_blue5').removeClass('constructor-block-color_frame');
document.querySelector(".chrysanthemums").src = "img/constructor/chrysanthemums_red.png";
});

//6 элемент
//плюс минус для 3го элемента
$('.constructor-block-count_plus6').on("click", function(){
var	number	=	$(".constructor-block-count_number6").text();
number++;
	$(".constructor-block-count_number6").text(number);

});

$('.constructor-block-count_minus6').on("click", function(){
var	number	=	$(".constructor-block-count_number6").text();
number--;
if(number > 0){
	$(".constructor-block-count_number6").text(number);
}
else{
	$(".constructor-block-count_number6").text('0');
}
});

//выделение нужного цвета
//белый цвет
$('.constructor-block-color_white6').on("click", function(){
$('.constructor-block-color_white6').addClass('constructor-block-color_framew');
$('.constructor-block-color_yellow6').removeClass('constructor-block-color_framew');
$('.constructor-block-color_pink6').removeClass('constructor-block-color_frame');
$('.constructor-block-color_red6').removeClass('constructor-block-color_frame');
$('.constructor-block-color_blue6').removeClass('constructor-block-color_frame');
document.querySelector(".carnations").src = "img/constructor/carnations_white.png";
});
//бежевый цвет
$('.constructor-block-color_yellow6').on("click", function(){
$('.constructor-block-color_white6').removeClass('constructor-block-color_framew');
$('.constructor-block-color_yellow6').addClass('constructor-block-color_framew');
$('.constructor-block-color_pink6').removeClass('constructor-block-color_frame');
$('.constructor-block-color_red6').removeClass('constructor-block-color_frame');
$('.constructor-block-color_blue6').removeClass('constructor-block-color_frame');
document.querySelector(".carnations").src = "img/constructor/carnations_yellow.png";
});
//розовый цвет
$('.constructor-block-color_pink6').on("click", function(){
$('.constructor-block-color_white6').removeClass('constructor-block-color_framew');
$('.constructor-block-color_yellow6').removeClass('constructor-block-color_framew');
$('.constructor-block-color_pink6').addClass('constructor-block-color_frame');
$('.constructor-block-color_red6').removeClass('constructor-block-color_frame');
$('.constructor-block-color_blue6').removeClass('constructor-block-color_frame');
document.querySelector(".carnations").src = "img/constructor/carnations_pink.png";
});
//красный цвет
$('.constructor-block-color_red6').on("click", function(){
$('.constructor-block-color_white6').removeClass('constructor-block-color_framew');
$('.constructor-block-color_yellow6').removeClass('constructor-block-color_framew');
$('.constructor-block-color_pink6').removeClass('constructor-block-color_frame');
$('.constructor-block-color_red6').addClass('constructor-block-color_frame');
$('.constructor-block-color_blue6').removeClass('constructor-block-color_frame');
document.querySelector(".carnations").src = "img/constructor/carnations_red.png";
});

//7 элемент
//плюс минус для 3го элемента
$('.constructor-block-count_plus7').on("click", function(){
var	number	=	$(".constructor-block-count_number7").text();
number++;
	$(".constructor-block-count_number7").text(number);

});

$('.constructor-block-count_minus7').on("click", function(){
var	number	=	$(".constructor-block-count_number7").text();
number--;
if(number > 0){
	$(".constructor-block-count_number7").text(number);
}
else{
	$(".constructor-block-count_number7").text('0');
}
});

//выделение нужного цвета
//белый цвет
$('.constructor-block-color_white7').on("click", function(){
$('.constructor-block-color_white7').addClass('constructor-block-color_framew');
$('.constructor-block-color_yellow7').removeClass('constructor-block-color_framew');
$('.constructor-block-color_pink7').removeClass('constructor-block-color_frame');
$('.constructor-block-color_red7').removeClass('constructor-block-color_frame');
$('.constructor-block-color_blue7').removeClass('constructor-block-color_frame');
document.querySelector(".aster").src = "img/constructor/aster_white.png";
});
//бежевый цвет
$('.constructor-block-color_yellow7').on("click", function(){
$('.constructor-block-color_white7').removeClass('constructor-block-color_framew');
$('.constructor-block-color_yellow7').addClass('constructor-block-color_framew');
$('.constructor-block-color_pink7').removeClass('constructor-block-color_frame');
$('.constructor-block-color_red7').removeClass('constructor-block-color_frame');
$('.constructor-block-color_blue7').removeClass('constructor-block-color_frame');
document.querySelector(".aster").src = "img/constructor/aster_yellow.png";
});
//розовый цвет
$('.constructor-block-color_pink7').on("click", function(){
$('.constructor-block-color_white7').removeClass('constructor-block-color_framew');
$('.constructor-block-color_yellow7').removeClass('constructor-block-color_framew');
$('.constructor-block-color_pink7').addClass('constructor-block-color_frame');
$('.constructor-block-color_red7').removeClass('constructor-block-color_frame');
$('.constructor-block-color_blue7').removeClass('constructor-block-color_frame');
document.querySelector(".aster").src = "img/constructor/aster_pink.png";
});
//красный цвет
$('.constructor-block-color_red7').on("click", function(){
$('.constructor-block-color_white7').removeClass('constructor-block-color_framew');
$('.constructor-block-color_yellow7').removeClass('constructor-block-color_framew');
$('.constructor-block-color_pink7').removeClass('constructor-block-color_frame');
$('.constructor-block-color_red7').addClass('constructor-block-color_frame');
$('.constructor-block-color_blue7').removeClass('constructor-block-color_frame');
document.querySelector(".aster").src = "img/constructor/aster_red.png";
});

//8 элемент
//плюс минус для 3го элемента
$('.constructor-block-count_plus8').on("click", function(){
var	number	=	$(".constructor-block-count_number8").text();
number++;
	$(".constructor-block-count_number8").text(number);

});

$('.constructor-block-count_minus8').on("click", function(){
var	number	=	$(".constructor-block-count_number8").text();
number--;
if(number > 0){
	$(".constructor-block-count_number8").text(number);
}
else{
	$(".constructor-block-count_number8").text('0');
}
});

//выделение нужного цвета
//белый цвет
$('.constructor-block-color_white8').on("click", function(){
$('.constructor-block-color_white8').addClass('constructor-block-color_framew');
$('.constructor-block-color_yellow8').removeClass('constructor-block-color_framew');
$('.constructor-block-color_pink8').removeClass('constructor-block-color_frame');
$('.constructor-block-color_red8').removeClass('constructor-block-color_frame');
$('.constructor-block-color_blue8').removeClass('constructor-block-color_frame');
document.querySelector(".dahlias").src = "img/constructor/dahlias_white.png";
});
//бежевый цвет
$('.constructor-block-color_yellow8').on("click", function(){
$('.constructor-block-color_white8').removeClass('constructor-block-color_framew');
$('.constructor-block-color_yellow8').addClass('constructor-block-color_framew');
$('.constructor-block-color_pink8').removeClass('constructor-block-color_frame');
$('.constructor-block-color_red8').removeClass('constructor-block-color_frame');
$('.constructor-block-color_blue8').removeClass('constructor-block-color_frame');
document.querySelector(".dahlias").src = "img/constructor/dahlias_yellow.png";
});
//розовый цвет
$('.constructor-block-color_pink8').on("click", function(){
$('.constructor-block-color_white8').removeClass('constructor-block-color_framew');
$('.constructor-block-color_yellow8').removeClass('constructor-block-color_framew');
$('.constructor-block-color_pink8').addClass('constructor-block-color_frame');
$('.constructor-block-color_red8').removeClass('constructor-block-color_frame');
$('.constructor-block-color_blue8').removeClass('constructor-block-color_frame');
document.querySelector(".dahlias").src = "img/constructor/dahlias_pink.png";
});
//красный цвет
$('.constructor-block-color_red8').on("click", function(){
$('.constructor-block-color_white8').removeClass('constructor-block-color_framew');
$('.constructor-block-color_yellow8').removeClass('constructor-block-color_framew');
$('.constructor-block-color_pink8').removeClass('constructor-block-color_frame');
$('.constructor-block-color_red8').addClass('constructor-block-color_frame');
$('.constructor-block-color_blue8').removeClass('constructor-block-color_frame');
document.querySelector(".dahlias").src = "img/constructor/dahlias_red.png";
});
/*$('.constructor-block-color_white').on("click", function(){
var img = document.querySelector(".rose");
img.src = "img/constructor/plus.png";

});*/

});


/*				$('form').submit(function(event) {
			event.preventDefault();
			$.ajax({
				type: "POST",
				url: "mailer/test.php",
				data: $(this).serialize()
			}).done(function() {
				$(this).find("input").val("");
				alert("Сообщение успешно отправленоооооо");
				$("form").trigger("reset");
			});
			return false;
		});*/

jQuery(function($){
   $(".form-wrap__input").mask("+7 (999) 999-99-99");});

	// открываем закрываем попап на цветах и заказ звонка
	//роза
	$(document).ready(function(){
$('.slider-img1').on("click", function(){
$('.popup-flowers1').show()
});

$('.popup-close1').on("click", function(){
$('.popup-flowers1').hide()
});

//лилии
$('.slider-img2').on("click", function(){
$('.popup-flowers2').show()
});

$('.popup-close2').on("click", function(){
$('.popup-flowers2').hide()
});

//георгины
$('.slider-img3').on("click", function(){
$('.popup-flowers3').show()
});

$('.popup-close3').on("click", function(){
$('.popup-flowers3').hide()
});

//тюльпаны
$('.slider-img4').on("click", function(){
$('.popup-flowers4').show()
});

$('.popup-close4').on("click", function(){
$('.popup-flowers4').hide()
});

//герберы
$('.slider-img5').on("click", function(){
$('.popup-flowers5').show()
});

$('.popup-close5').on("click", function(){
$('.popup-flowers5').hide()
});

//ирис
$('.slider-img6').on("click", function(){
$('.popup-flowers6').show()
});

$('.popup-close6').on("click", function(){
$('.popup-flowers6').hide()
});

//Заказ звонка

$('.popup-phone').on("click", function(){
$('.popup-call').show()
});

$('.popup-close').on("click", function(){
$('.popup-call').hide()
});

//фото букета

$('.photo1').on("click", function(){
$('.popup-photo1').show()
});

$('.popup-close').on("click", function(){
$('.popup-photo1').hide()
});

//фото букета

$('.photo2').on("click", function(){
$('.popup-photo2').show()
});

$('.popup-close').on("click", function(){
$('.popup-photo2').hide()
});

//фото букета

$('.photo3').on("click", function(){
$('.popup-photo3').show()
});

$('.popup-close').on("click", function(){
$('.popup-photo3').hide()
});

});
if (window.matchMedia('(min-width: 768px) and (max-width: 991px)').matches) {
      $('.offer-slider').slick({
	arrows: true,
	slidesToShow: 5,
	slidesToScroll: 1,
	prevArrow: '<div class="offer-slider-arrow offer-slider-arrow_left"></div>',
	nextArrow: '<div class="offer-slider-arrow offer-slider-arrow_right"></div>'
});
} else if (window.matchMedia('(min-width: 577px) and (max-width: 767px)').matches) {
      $('.offer-slider').slick({
	arrows: true,
	slidesToShow: 4,
	slidesToScroll: 4,
	prevArrow: '<div class="offer-slider-arrow offer-slider-arrow_left"></div>',
	nextArrow: '<div class="offer-slider-arrow offer-slider-arrow_right"></div>'
});
} else if (window.matchMedia('all and (max-width: 576px)').matches) {
      $('.offer-slider').slick({
	arrows: true,
	slidesToShow: 3,
	slidesToScroll: 3,
	prevArrow: '<div class="offer-slider-arrow offer-slider-arrow_left"></div>',
	nextArrow: '<div class="offer-slider-arrow offer-slider-arrow_right"></div>'
});
} else{
	      $('.offer-slider').slick({
	arrows: true,
	slidesToShow: 6,
	slidesToScroll: 1,
	prevArrow: '<div class="offer-slider-arrow offer-slider-arrow_left"></div>',
	nextArrow: '<div class="offer-slider-arrow offer-slider-arrow_right"></div>'
});
}


      $('.feedback-slider').slick({
	arrows: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	prevArrow: '<div class="feedback-slider-arrow feedback-slider-arrow_left"></div>',
	nextArrow: '<div class="feedback-slider-arrow feedback-slider-arrow_right"></div>'
});


