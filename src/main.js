import './style.scss'
// @ts-ignore
// import * as bodymovin from 'bodymovin';
// import typescriptLogo from './typescript.svg'
// import { setupCounter } from './counter'

// document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="/vite.svg" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://www.typescriptlang.org/" target="_blank">
//       <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
//     </a>
//     <h1>Vite + TypeScript</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite and TypeScript logos to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)


// Load functions
loadAnimations();
scrollListener();

// setTimeout(() => switchTheme(true), 5000);
setTimeout(switchTheme(true), 50000);

function scrollListener() {
	let el = document.getElementById('scroll-down-arrow');
	el.addEventListener('click', () => {
		console.log(document.getElementById('scroll-target'));
		document.getElementById('scroll-target').scrollIntoView({behavior: 'smooth'});
	});
};

function loadAnimations() {

	var charAnimationDesktop = bodymovin.loadAnimation({
		container: document.getElementById('lottie-char'), // Required
		path: '../char-jump-coffee.json', // Required
		renderer: 'svg', // Required
		loop: false, // Optional
		autoplay: false, // Optional
	});

	var charAnimationMobile = bodymovin.loadAnimation({
		container: document.getElementById('lottie-mob'), // Required
		path: '../char-jump-coffee.json', // Required
		renderer: 'svg', // Required
		loop: false, // Optional
		autoplay: true, // Optional
	});

	const loadingOverlay = document.getElementById('loading-overlay');
	const fistLoadLine = document.getElementById('fist-load-line');

	console.log(fistLoadLine);

	let fll = false;

	setTimeout(function(){
		 fll = true;
	}, 1500);

	charAnimationDesktop.addEventListener('DOMLoaded', () => {
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
		document.getElementById('loading-overlay').style.display = 'none';
	});
}

function switchTheme(dark) {
	var r = document.querySelector(':root');

	if (dark) {
		r.style.setProperty('--background-color', '#1f1f1f');
		r.style.setProperty('--text-color', '#f3f3f3');
		r.style.setProperty('--accent-color', '#364CEA');
	} else {
		r.style.setProperty('--background-color', '#FDFDFD');
		r.style.setProperty('--text-color', '#2C3E50');
		r.style.setProperty('--accent-color', '#364CEA');
	}
}
