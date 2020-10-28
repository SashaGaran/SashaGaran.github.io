let navbr = document.querySelector('.navbar');
let themeButton = document.querySelector('.theme-button');
let icontheme = document.querySelector('.fas');
let footr = document.querySelector('.footer');

themeButton.onclick = function() {
	// NAVBAR
	navbr.classList.toggle('navbar-dark');
	navbr.classList.toggle('bg-dark');

	navbr.classList.toggle('navbar-light');
	navbr.classList.toggle('bg-light');

	// THEME BUTTON
	themeButton.classList.toggle('gray-200');
	themeButton.classList.toggle('btn-secondary');

	// ICON THEME
	icontheme.classList.toggle('fa-sun');
	icontheme.classList.toggle('fa-moon');

	// FOOTER
	footr.classList.toggle('bg-dark');
	footr.classList.toggle('text-light');

	footr.classList.toggle('bg-muted');
	footr.classList.toggle('text-dark');
}

// ScrollReveal({ reset: true });
ScrollReveal({ easing: 'cubic-bezier(0.17,0.84,0.44,1)' });
ScrollReveal({ rotate: { x: -60, y: 0, z: 0 } });
ScrollReveal({ scale: 0.92 });
ScrollReveal({ viewFactor: 0.2 });


ScrollReveal().reveal('.card-tag', { delay: 220 });

ScrollReveal().reveal('.smooth_scroll', { delay: 40 });
ScrollReveal().reveal('.smooth_scroll', { interval: 80 });

ScrollReveal().reveal('.smooth_out_container', { delay: 100 });
ScrollReveal().reveal('.smooth_in_container', { delay: 120 });

ScrollReveal().reveal('table', { delay: 220 });
ScrollReveal().reveal('tr', { delay: 420 });
ScrollReveal().reveal('tr', { interval: 100 });
