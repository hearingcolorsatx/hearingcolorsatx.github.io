/*
	Solid State by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/


	// Random color picker for buttons and form fields
	// const colors = ['d75c30', 'ff9900', 'ffcc00', '008000', '3366ff', '0096ff', '993366'];
	const colors = ['e53935', 'fb8c00', 'fdd835', '43a047', '26c6da', '1e88e5', '8e24aa'];

	let previousColor = null;

	function getRandomColor() {
		let randomIndex;
		do {
			randomIndex = Math.floor(Math.random() * colors.length);
		} while (colors[randomIndex] === previousColor);
		previousColor = colors[randomIndex];
		return colors[randomIndex];
	}

	const links = document.querySelectorAll('#menu .links li a');
	links.forEach(link => {
		link.addEventListener('mouseover', () => {
			const randomColor = getRandomColor();
			link.style.backgroundColor = `#${randomColor}`;
		});

		link.addEventListener('mouseout', () => {
			link.style.backgroundColor = '';
		});
	});

	// Assign elements to variables to act on
	const button = document.querySelector('button');
	const sendMessageButton = document.querySelector('input[type="submit"][value="Send Message"]');
	const nameField = document.querySelector('input[type="text"][id="name"]');
	const emailField = document.querySelector('input[type="email"][id="email"]');
	const messageField = document.querySelector('textarea[id="message"]');

	// For the buttons
	function addHoverEffect(element) {
		if (element) {
			element.addEventListener('mouseover', () => {
				const randomColor = getRandomColor();
				element.style.backgroundColor = `#${randomColor}`;
			});

			element.addEventListener('mouseout', () => {
				element.style.backgroundColor = '';
			});
		} // else {
		// console.warn(element, 'not found on this page.');
		// }
	}

	addHoverEffect(button);
	addHoverEffect(sendMessageButton);

	// For the form fields
	function addFocusEffect(element) {
		if (element) {
			element.addEventListener('focus', () => {
				const randomColor = getRandomColor();
				element.style.backgroundColor = `#${randomColor}`;
			});

			element.addEventListener('blur', () => {
				element.style.backgroundColor = '';
			});
		} else {
			console.warn(element, 'not found on this page.');
		}
	}

	addFocusEffect(nameField);
	addFocusEffect(emailField);
	addFocusEffect(messageField);

	// End random color picker logic

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$header = $('#header'),
		$banner = $('#banner');

	// Breakpoints.
		breakpoints({
			xlarge:	'(max-width: 1680px)',
			large:	'(max-width: 1280px)',
			medium:	'(max-width: 980px)',
			small:	'(max-width: 736px)',
			xsmall:	'(max-width: 480px)'
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Header.
		if ($banner.length > 0
		&&	$header.hasClass('alt')) {

			$window.on('resize', function() { $window.trigger('scroll'); });

			$banner.scrollex({
				bottom:		$header.outerHeight(),
				terminate:	function() { $header.removeClass('alt'); },
				enter:		function() { $header.addClass('alt'); },
				leave:		function() { $header.removeClass('alt'); }
			});

		}

	// Menu.
		var $menu = $('#menu');

		$menu._locked = false;

		$menu._lock = function() {

			if ($menu._locked)
				return false;

			$menu._locked = true;

			window.setTimeout(function() {
				$menu._locked = false;
			}, 350);

			return true;

		};

		$menu._show = function() {

			if ($menu._lock())
				$body.addClass('is-menu-visible');

		};

		$menu._hide = function() {

			if ($menu._lock())
				$body.removeClass('is-menu-visible');

		};

		$menu._toggle = function() {

			if ($menu._lock())
				$body.toggleClass('is-menu-visible');

		};

		$menu
			.appendTo($body)
			.on('click', function(event) {

				event.stopPropagation();

				// Hide.
					$menu._hide();

			})
			.find('.inner')
				.on('click', '.close', function(event) {

					event.preventDefault();
					event.stopPropagation();
					event.stopImmediatePropagation();

					// Hide.
						$menu._hide();

				})
				.on('click', function(event) {
					event.stopPropagation();
				})
				.on('click', 'a', function(event) {

					var href = $(this).attr('href');

					event.preventDefault();
					event.stopPropagation();

					// Hide.
						$menu._hide();

					// Redirect.
						window.setTimeout(function() {
							window.location.href = href;
						}, 350);

				});

		$body
			.on('click', 'a[href="#menu"]', function(event) {

				event.stopPropagation();
				event.preventDefault();

				// Toggle.
					$menu._toggle();

			})
			.on('keydown', function(event) {

				// Hide on escape.
					if (event.keyCode == 27)
						$menu._hide();

			});

// USER ADDED CODE BELOW

// Learn More Buttion Functionality

	// document.addEventListener("DOMContentLoaded", function () {
	// 	const licensingSwiper = new Swiper(".mySwiper3", {
	// 		grabCursor: true,
	// 		effect: "creative",
	// 		creativeEffect: {
	// 		prev: { shadow: true, translate: ["-20%", 0, -1] },
	// 		next: { translate: ["100%", 0, 0] },
	// 		},
	// 		slidesPerView: 1,
	// 		spaceBetween: 1,
	// 		autoHeight: true,
	// 		pagination: {
	// 		el: ".mySwiper3 .swiper-pagination",
	// 		clickable: true,
	// 		},
	// 	});
	// });

	const toggles = document.querySelectorAll(".js-more-toggle");

	toggles.forEach((toggle) => {
		toggle.addEventListener("click", () => {
		const targetSel = toggle.getAttribute("data-target");
		const sectionSel = toggle.getAttribute("data-section");

		const content = targetSel ? document.querySelector(targetSel) : null;
		const section = sectionSel ? document.querySelector(sectionSel) : null;

		if (!content) return;

		const isExpanded = content.classList.toggle("show");

		toggle.textContent = isExpanded ? "Less" : "More";
		toggle.setAttribute("aria-expanded", String(isExpanded));

		// ✅ If we just opened the licensing panel, refresh Swiper after layout updates
		if (isExpanded && targetSel === "#more-licensing") {
		setTimeout(() => {
			licensingSwiper.update();
			licensingSwiper.slideTo(0, 0);
		}, 150);
		}


		if (!isExpanded && section) {
			section.scrollIntoView({ behavior: "smooth", block: "start" });
		}
		});
	});
	
// Music/Licensing Slider Text Effect

	const animatedSlides = [
		document.getElementById('mus-slide1'),
		document.getElementById('lic-slide1')
	].filter(Boolean);

	const observer = new IntersectionObserver(
	entries => {
		entries.forEach(entry => {
		if (entry.isIntersecting) {
			entry.target.classList.remove('animate');
			void entry.target.offsetWidth; // restart animation
			entry.target.classList.add('animate');
		} else {
			entry.target.classList.remove('animate');
		}
		});
	},
	{ threshold: 0.6 }
	);

	animatedSlides.forEach(slide => observer.observe(slide));

	musicSwiper.on('slideChangeTransitionEnd', () => {
	const activeSlide = musicSwiper.slides[musicSwiper.activeIndex];

	if (activeSlide.id === 'mus-slide1' || activeSlide.id === 'lic-slide1') {
		activeSlide.classList.remove('animate');
		void activeSlide.offsetWidth; // restart animation
		activeSlide.classList.add('animate');
	} else {
		animatedSlides.forEach(slide => slide.classList.remove('animate'));
	}
	});

})(jQuery);