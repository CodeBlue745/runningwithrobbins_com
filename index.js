// JavaScript Document
//Remember to grab the element id for javascript, class name for CSS.
var i = 0;
/*if coords = 0,0 call cycle().*/
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
	var pages = ["Events", "Experiences", "Games", "Projects", "Theories", "end"];
	var pgNum = Math.round(i * .0001)/2;
	if(pgNum < 2){
		recents.innerHTML = pages[pgNum];
	}
	else{/*go back to normal*/
		pgNum = 0;
		recents.innerHTML = pages[pgNum];
		return i = 39.8, recents;
	}
	console.log(i);
}
/*var newPage = recents.innerHTML;
		var link = document.createElement('a');
		link.href = 'https://google.com';
		link.appendChild(newPage);
		recents.append(link);*/
getCoords(i);
function preloadImages() {
	for(var i = 0; i < imgArray.length; i++) {
	var tmpImg = new Image;
	tmpImg.src = imgPath + imgArray[i];
	}
}
/*Show Nav menu on btn. click.*/
function dropdown(){
	var down = document.getElementById("shownav");
	down.style.display = 'block';
}
function clickPhoto(){
	/*switch to GuitarandUkulele*/
}
/*If window is clicked, nav display is set to none.*/
function windowClick(){
	window.click(function(){
		alert("clickified");
	});
	/*if(window.click == true){
		down.style.display = 'none';
	}*/
}
windowClick()