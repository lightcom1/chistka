//smaller nav when scrolling
$(window).scroll(() => {
	var windowTop = $(window).scrollTop();
	if (windowTop > 20){
		$('.menu__elem').addClass('menu__elem--active');
		$('.nav').addClass('navbar');
		
	} else {
		$('.menu__elem').removeClass('menu__elem--active');
		$('.nav').removeClass('navbar');
	}
});

//Smooth animation when clicking on the link
$('a[href*="#"]').on('click', function(e) {
	const target = $($(this).attr('href')).offset().top - 55;
	$('html,body').animate({
		scrollTop: target
	}, 600);
	e.preventDefault();
});

//Burger menu
const menuToggle = document.querySelector('.menu-icon');
const mobileNavContainer = document.querySelector('.mobile-nav');
menuToggle.onclick = function() {
	menuToggle.classList.toggle('menu-icon-active');
	mobileNavContainer.classList.toggle('mobile-nav--active');
}
//hide the menu when clicking on the link
$(document).ready(function() {
	$('.mobile-nav__link').click(function(event) {
		mobileNavContainer.classList.remove('mobile-nav--active');
		menuToggle.classList.remove('menu-icon-active')
	});
});
//hide the menu when clicking on the body
$(document).mouseup(function(e) {
	if (!$('.menu-icon').is(e.target) && $('.menu-icon').has(e.target).length === 0 &&
		!$('.mobile-nav').is(e.target) && $('.mobile-nav').has(e.target).length === 0) {
		mobileNavContainer.classList.remove('mobile-nav--active');
		menuToggle.classList.remove('menu-icon-active');
	}
});

//modal price
const priceButton = document.querySelectorAll('.price__btn');
const priceModal = document.querySelector('.overlay-price');
const priceModalClose = document.querySelector('.close-modal');
const priceModalWindow = $('.modal-price');

priceButton.forEach(function(btn) {
	btn.addEventListener('click', function(event) {
		event.preventDefault();
		priceModal.classList.add('modal--active');
	});
});
priceModalClose.addEventListener('click', function(event) {
	event.preventDefault();
	priceModal.classList.remove('modal--active');
});
$(document).mouseup(function (e) { 
	if (e.target!=priceModalWindow[0]&&priceModalWindow.has(e.target).length === 0){
		priceModal.classList.remove('modal--active');
	};
});

//modal contacts
const contactButton = document.querySelector('.info__contacts');
const contactButtonForm = document.querySelector('.contact-modal');
const contactModal = document.querySelector('.overlay-contacts');
const contactModalClose = document.querySelector('.close-modal');
const contactModalWindow = $('.modal-contacts');

contactButton.addEventListener('click', function(event) {
	event.preventDefault();
	contactModal.classList.add('modal--active');
});
contactModalClose.addEventListener('click', function(event) {
	event.preventDefault();
	contactModal.classList.remove('modal--active');
});
contactButtonForm.addEventListener('click', function(event) {
	event.preventDefault();
	contactModal.classList.add('modal--active');
});
$(document).mouseup(function (e) { 
	if (e.target!=contactModalWindow[0]&&e.target!=contactModalWindow[1]&&e.target!=contactModalWindow[2]&&contactModalWindow.has(e.target).length === 0){
		contactModal.classList.remove('modal--active');
	};
});

//slider
$(document).ready(function() {
	$('.slider').slick({
		speed: 500,
		autoplay: true,
		autoplaySpeed: 3000,
		lazyLoad: 'ondemand',
		pauseOnFocus: true,
		draggable: false,
		swipe: true,
		centerMode: false,
		slidesToShow: 3,
		responsive: [
			{
				breakpoint: 1299,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});
});

//Animation
$(function() {
	$(window).scroll(function() {
		$('.contact__title').each(function() {
			var imagePos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+780) {
				$(this).addClass("animate__fadeInDown");
			}
		});
	});
	$(window).scroll(function() {
		$('.anim--right, .why-intro, .stages-intro, .works-intro').each(function() {
			var imagePos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+780) {
				$(this).addClass("animate__fadeInRight");
			}
		});
	});
	$(window).scroll(function() {
		$('.stage').each(function() {
			var imagePos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+780) {
				$(this).addClass("animate__fadeInLeft");
			}
		});
	});
	$(window).scroll(function() {
		$('.reasons-wrapper').each(function() {
			var imagePos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+780) {
				$(this).addClass("animate__fadeInUp");
			}
		});
	});
});

//mail
$(document).ready(function() {
	$("form").submit(function() {
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail/mail.php", 
			data: th.serialize()
		}).done(function() {
			$('.js-overlay-campaign').fadeIn();
			setTimeout(function() {
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});
});

$('.js-close-campaign').click(function() { 
	$('.js-overlay-campaign').fadeOut();
});
$(document).mouseup(function (e) { 
	var popup = $('.js-popup-campaign');
	if (e.target!=popup[0]&&popup.has(e.target).length === 0){
		$('.js-overlay-campaign').fadeOut();
	}
});