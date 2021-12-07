AOS.init({
	duration: 800,
	// delay: 300,
	disable: 'tablet',
	disable: 'mobile',
	// disable: 'phone',
	offset: 20,
});

$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger, .header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

