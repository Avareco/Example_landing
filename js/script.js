const video = document.querySelector('#video video');
const videoBlock = document.querySelector('#video');
const play = document.querySelector('#play-button');
const mediaQuery = window.matchMedia('(min-width: 991px)')
const navBar = document.querySelector('#nav-bar');
function handleTabletChange(e) {
	if (!e.matches) {
		video.setAttribute('poster', 'img/screen-mobile.jpg')


		let prevScrollpos = window.pageYOffset;

		navBar.style.position = "fixed"
		window.onscroll = function () {
			var currentScrollPos = window.pageYOffset;
			if (prevScrollpos > currentScrollPos) {
				navBar.style.top = "0";
			} else {
				navBar.style.top = "-100%";
				navBar.style.backgroundColor = "#333"
			}
			prevScrollpos = currentScrollPos;
		}


	}
}
mediaQuery.addListener(handleTabletChange)
handleTabletChange(mediaQuery)


let bool = true;
videoBlock.addEventListener('click', target => {

	if (bool) {
		video.play();
		bool = false;
	} else {
		video.pause();
		bool = true;
	}
	console.log(bool)
	play.classList.toggle('display-none')



})