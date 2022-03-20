const video =document.querySelector('#video');
const play =document.querySelector('#play-button');
let bool = true;
function ool (){
	
}

video.addEventListener('click',target=>
{
	
	if(bool){
		video.play();
		bool=false;
	}else{
		video.pause();
		bool=true;
	}
	console.log(bool)
	play.classList.toggle('display-none')
	

	
})