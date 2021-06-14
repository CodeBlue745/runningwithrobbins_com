/*JavaScript Document
Remember to grab the element id for javascript, class name for CSS.
if coords = 0,0 call cycle().*/
function getCoords(i) {
	var recents = document.getElementById("recentPosts"),
		rect = recents.getBoundingClientRect();
	if(rect.top >= 16 && rect.left <= 250){
		cycle(i, recents);
	}
	window.requestAnimationFrame(getCoords); //This requests each movement of the animation.
}
/*Cycles through a list of Pages.*/ 
function cycle(i, recents){
	//var link = document.createElement('a');
	var pages = ["Events", "Experiences"];
	var pgNum = Math.round(i * 0.0001);
	if(pgNum >= pages.length){
		return;
	}
	else{
		recents.innerHTML = pages[pgNum];
		/*var x = pages.push(link);
		console.log(x);*/
	}
}
getCoords();

var navB = document.getElementById("navB");
var nav = document.getElementById("nav");
navB.addEventListener("click", function(){
	appearance(1);
});
nav.addEventListener("mouseleave", function(){
	appearance(2);
});
function appearance(data){
	try{
		if(data === 1){
		document.getElementById("nav").style.display = 'block';
	}
	else{
		document.getElementById("nav").style.display = 'none';
	}
	}
	catch(error){
		alert(error);
	}
}
/*I want to have an image carosel on my front page.
function preloadImages() {
	for(var i = 0; i < imgArray.length; i++) {
	var tmpImg = new Image;
	tmpImg.src = imgPath + imgArray[i];
	}
}*/