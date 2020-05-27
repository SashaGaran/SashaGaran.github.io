let navbr = document.querySelector('.navbar');
let footr = document.querySelector('.footer')
let themeButton = document.querySelector('.theme-button');
themeButton.onclick = function() {
	// NAVBAR
	navbr.classList.toggle('navbar-dark');
	navbr.classList.toggle('bg-dark');

	navbr.classList.toggle('navbar-light');
	navbr.classList.toggle('bg-light');

	// FOOTER
	footr.classList.toggle('bg-dark')
	footr.classList.toggle('text-light')

	footr.classList.toggle('bg-muted')
	footr.classList.toggle('text-dark')
}