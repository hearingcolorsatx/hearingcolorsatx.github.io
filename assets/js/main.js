/*
	Solid State by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/


// Random color picker for buttons and form fields
// const colors = ['d75c30', 'ff9900', 'ffcc00', '008000', '3366ff', '0096ff', '993366'];
const colors = ['ff6347', 'ffa500', 'ffd700', '2e8b57', '00ced1', '3498db', '8a2be2'];

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
const button = document.querySelector('.button');
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

(function($) {

	// User added code for experimentation

	function createGradientHandler(element, colors) {
		let isHovering = false;
		let gradientAngle = 90;
	
		function defaultGradientRotation() {
			gradientAngle += -0.15; // Adjust the rotation speed as needed
			if (!isHovering) {
				const conicGradient = `conic-gradient(from ${gradientAngle}deg at -50% 50%, ${colors.join(", ")})`;
				element.style.background = conicGradient; // Set the conic gradient
			}
			requestAnimationFrame(defaultGradientRotation);
		}

		function hoverGradient(event) {
			if (isHovering) {
				let mouseXpercentage, mouseYpercentage;
				if (event.type === 'touchmove') {
					// For touch events, calculate the position of the touch relative to the wrapper element
					const touch = event.touches[0];
					mouseXpercentage = (touch.clientX / window.innerWidth) * 100;
					mouseYpercentage = (touch.clientY / window.innerHeight) * 100;
				} else {
					// For mouse events, calculate the position of the mouse cursor relative to the wrapper element
					mouseXpercentage = (event.clientX / window.innerWidth) * 100;
					mouseYpercentage = (event.clientY / window.innerHeight) * 100;
				}
								
				// Define the radial gradient with the center at the mouse cursor
				const radialGradient = `radial-gradient(circle at ${mouseXpercentage}% ${mouseYpercentage}%, ${colors.join(", ")})`;
				
				// Apply the radial gradient to the element's background
				element.style.background = radialGradient;
			}
			requestAnimationFrame(hoverGradient);
		}

		element.addEventListener('mouseenter', () => {
			isHovering = true;
		});
	
		element.addEventListener('mousemove', (event) => {
			if (isHovering) {
				hoverGradient(event);
			}
		});
	
		element.addEventListener('mouseleave', () => {
			isHovering = false;
		});

		element.addEventListener('touchstart', () => {
			isHovering = true;
		});
		
		element.addEventListener('touchmove', (event) => {
			if (isHovering) {
				hoverGradient(event);
			}
		});
		
		element.addEventListener('touchend', () => {
			isHovering = false;
		});
	
		defaultGradientRotation(); // Start the default behavior
	}
	
	if(document.title === "HEARING COLORS LLC") {
		// LSD Section
		const style1 = document.querySelector('.wrapper.alt.style1');
		// createGradientHandler(style1, ['#ff6347', '#ffa500', '#ffd700', '#2e8b57', '#00ced1', '#3498db', '#8a2be2', '#ff6347']);
		createGradientHandler(style1, [' #8a2be2, #ff6347, #ffa500, #8a2be2']);
		// Intro
		const spotlight = document.querySelector('.wrapper.spotlight');
		createGradientHandler(spotlight, ['#ff6347', '#ffa500', '#ffd700', '#ff6347']);
		// Tim Delaney
		const spotlight2 = document.querySelector('.wrapper.spotlight.style2');
		createGradientHandler(spotlight2, ['#ffd700', '#2e8b57', '#00ced1', '#ffd700']);
		// neutron squared
		const spotlight3 = document.querySelector('.wrapper.spotlight.style3');
		createGradientHandler(spotlight3, [' #00ced1, #3498db, #8a2be2, #00ced1']);
		
	} else if(document.title === "ABOUT") {

		const aboutContent = document.querySelector('.wrapper.about.content');
		createGradientHandler(aboutContent, ['#ff6347', '#ffa500', '#ffd700', '#2e8b57', '#00ced1', '#3498db', '#8a2be2', '#ff6347']);	


	} else if(document.title === "NFTs") {

		const aboutContent = document.querySelector('.wrapper.nfts.content');
		createGradientHandler(aboutContent, ['#ff6347', '#ffa500', '#ffd700', '#2e8b57', '#00ced1', '#3498db', '#8a2be2', '#ff6347']);	


	}
	// Back to the original code below

	var	$window = $(window),
		$body = $('body'),
		$header = $('#header'),
		$banner = $('#banner');

	// Breakpoints.
		breakpoints({
			// xlarge:	'(max-width: 1680px)',
			// large:	'(max-width: 1280px)',
			// medium:	'(max-width: 980px)',
			// small:	'(max-width: 736px)',
			// xsmall:	'(max-width: 480px)'
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

})(jQuery);