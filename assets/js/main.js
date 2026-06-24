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
		link.style.setProperty('font-weight', 'bold', 'important');
	});

	link.addEventListener('mouseout', () => {
		link.style.backgroundColor = '';
		link.style.color = '';
		link.style.setProperty('font-weight', 'normal');
	});
});

const customSelect = document.querySelector('#project-type-select');

if (customSelect) {
	const selected = customSelect.querySelector('.selected');
	const hiddenInput = document.querySelector('#project-type');
	const options = customSelect.querySelectorAll('.options li');

	selected.addEventListener('click', () => {
		customSelect.classList.toggle('open');
	});

	options.forEach(option => {
		option.addEventListener('mouseover', () => {
			const randomColor = getRandomColor();
			option.style.backgroundColor = `#${randomColor}`;
			option.style.fontWeight = 'bold';
		});

		option.addEventListener('mouseout', () => {
			option.style.backgroundColor = '';
			option.style.fontWeight = 'normal';
		});

		option.addEventListener('click', () => {
			selected.textContent = option.textContent;
			hiddenInput.value = option.dataset.value;
			customSelect.classList.remove('open');
		});
		customSelect.addEventListener('click', (event) => {
			event.stopPropagation();
		});

		document.addEventListener('click', (event) => {
			if (!customSelect.contains(event.target)) {
				customSelect.classList.remove('open');
			}
		});
	});

const observer = new MutationObserver(() => {
	if (document.body.classList.contains('is-menu-visible')) {
		customSelect.classList.remove('open');
	}
});

observer.observe(document.body, {
	attributes: true,
	attributeFilter: ['class']
});
}

// const customSelect = document.querySelector('#project-type-select');
// const selected = customSelect.querySelector('.selected');
// const hiddenInput = document.querySelector('#project-type');
// const options = customSelect.querySelectorAll('.options li');

// selected.addEventListener('click', () => {
// 	customSelect.classList.toggle('open');
// });

// options.forEach(option => {
// 	option.addEventListener('mouseover', () => {
// 		const randomColor = getRandomColor();
// 		option.style.backgroundColor = `#${randomColor}`;
// 		option.style.fontWeight = 'bold';
// 	});

// 	option.addEventListener('mouseout', () => {
// 		option.style.backgroundColor = '';
// 		option.style.fontWeight = 'normal';
// 	});

// 	option.addEventListener('click', () => {
// 		selected.textContent = option.textContent;
// 		hiddenInput.value = option.dataset.value;
// 		customSelect.classList.remove('open');
// 	});
// });

// projectType.addEventListener('mouseout', () => {
//     projectType.style.backgroundColor = '';
// });

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

addHoverEffect(sendMessageButton);

// For the form fields
function addFocusEffect(element) {
	if (element) {
		element.addEventListener('focus', () => {
			const randomColor = getRandomColor();
			element.style.backgroundColor = `#${randomColor}`;
			if (element.style.backgroundColor == "rgb(253, 216, 53)") {
				element.style.color = "#43a047"
			} else {
				element.style.color = "#ffffff"
			}
		});

		element.addEventListener('blur', () => {
			element.style.backgroundColor = '';
			element.style.color = '';
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

const rotatingWord = document.querySelector('.rotating-word');

const words = [
	'makes<br>sense',
	'connects',
	'resonates',
	'works'
];

let wordIndex = 0;

if (rotatingWord) {
	setInterval(() => {
		rotatingWord.classList.add('fade-out');

		setTimeout(() => {
			wordIndex = (wordIndex + 1) % words.length;
			rotatingWord.innerHTML = words[wordIndex];
			rotatingWord.classList.remove('fade-out');
		}, 400);
	}, 2200);
}

const licensingWord = document.querySelector('.licensing-side-word');

const licensingWords = [
	'simple',
	'flexible',
	'creative'
];

let licensingIndex = 0;

if (licensingWord) {
	licensingWord.textContent = licensingWords[licensingIndex];

	setInterval(() => {
		licensingWord.classList.add('fade-out');

		setTimeout(() => {
			licensingIndex = (licensingIndex + 1) % licensingWords.length;
			licensingWord.innerHTML = licensingWords[licensingIndex];
			licensingWord.classList.remove('fade-out');
		}, 400);
	}, 2200);
}
	
})(jQuery);