let charAnimationMobile;
let charAnimationDesktop;
let themeAnimation;

export function loadAnimations(themeIsDark) {
	charAnimationMobile = lottie.loadAnimation({
		container: document.getElementById('lottie-mob'), // Required
		path: '../char-jump-coffee.json', // Required
		renderer: 'svg', // Required
		loop: false, // Optional
		autoplay: false, // Optional
	});

	charAnimationDesktop = lottie.loadAnimation({
		container: document.getElementById('lottie-char'), // Required
		path: '../char-jump-coffee.json', // Required
		renderer: 'svg', // Required
		loop: false, // Optional
		autoplay: false, // Optional
	});

	themeAnimation = lottie.loadAnimation({
		container: document.getElementById('lottie-theme-transform'),
		path: '../sun_to_moon_icon.json',
		renderer: 'svg',
		loop: false,
		autoplay: true,
	});

	const loadingOverlay = document.getElementById('loading-overlay');

	let fll = false;

	setTimeout(function(){
		fll = true;
	}, 1500);

	charAnimationDesktop.addEventListener('data_ready', () => {
		charAnimationDesktop.stop();
		if(fll){
			loadingOverlay.classList.add('animate');
		} else {
			setTimeout(function(){
				loadingOverlay.classList.add('animate');
			}, 1000);
		}
	});

	loadingOverlay.addEventListener('animationend', () => {
		charAnimationDesktop.play();
		charAnimationMobile.play();
		document.getElementById('loading-overlay').style.display = 'none';
	});

	themeAnimation.addEventListener('data_ready', (x) => {
		themeAnimation.setSpeed(5);

		if (themeIsDark) {
			freezeSun();
		} else {
			freezeMoon();
		}
	});

	themeAnimation.addEventListener('complete', function(x) {
		themeAnimation.setSpeed(1);
		themeAnimation.removeEventListener('complete');
	});
};

function freezeSun() {
	themeAnimation.playSegments([0, 1], true);
}

function freezeMoon() {
	themeAnimation.playSegments([55, 56], true);
}

export function playSunHover() {
	themeAnimation.playSegments([0, 25], false);
}

export function playMoonHover() {
	themeAnimation.playSegments([55, 85], false);
}

export function playMoonToSun() {
	if (themeAnimation) themeAnimation.playSegments([85, 113], true);
}

export function playSunToMoon() {
	if(themeAnimation) themeAnimation.playSegments([25, 55], true);
}
