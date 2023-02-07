import './style.scss'
import {loadAnimations, playMoonHover, playMoonToSun, playSunHover, playSunToMoon} from './animations'

let themeIsDark = false;

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
	switchTheme(themeIsDark = !themeIsDark);
}

// Load functions
loadAnimations(themeIsDark);
listeners();

function listeners() {
	// Scroll down icon listener
	let el = document.getElementById('scroll-down-arrow');
	el.addEventListener('click', () => {
		console.log(document.getElementById('scroll-target'));
		document.getElementById('scroll-target').scrollIntoView({behavior: 'smooth'});
	});

	// Theme button listeners
	let themeBtn = document.getElementById('theme-switcher');
	themeBtn.addEventListener('click', () => {
		themeIsDark = !themeIsDark
		switchTheme(themeIsDark);
	});

	themeBtn.addEventListener('mouseenter', () => {
		if (themeIsDark) {
			playSunHover();
		} else {
			playMoonHover();
		}
	})
};

function switchTheme(isDark) {
	var r = document.querySelector(':root');

	if (isDark) {
		playMoonToSun();
		r.style.setProperty('--background-color', '#1f1f1f');
		r.style.setProperty('--text-color', '#f3f3f3');
		r.style.setProperty('--accent-color', '#364CEA');
		r.style.setProperty('--brightness', '1');
	} else {
		playSunToMoon();
		r.style.setProperty('--background-color', '#FDFDFD');
		r.style.setProperty('--text-color', '#2C3E50');
		r.style.setProperty('--accent-color', '#364CEA');
		r.style.setProperty('--brightness', '.12');
	}
}
