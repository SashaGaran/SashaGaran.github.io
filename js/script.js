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