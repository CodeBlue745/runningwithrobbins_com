var canvas = document.getElementById("canvas1");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "black";
/*TODO: Draw a square on canvas. Assign to wall.*/
ctx.beginPath();
ctx.moveTo(20, 20);
ctx.lineTo(20, 100);
ctx.lineTo(70, 100);
ctx.strokeStyle = "black";
ctx.stroke();
var wall = "";
wall.addEventListener("mouseleave", function(){
	alert("choco");
	appearance(2);
});
wall.addEventListener("mazeCompleted", function(){
	alert("choco");
	appearance(3);
});
canvas.addEventListener("click", function(){
  
	appearance(1);
});

function appearance(data){
	try{
		if(data === 1){
			document.getElementById("wall").style.display = 'block';
		}
		if(data === 2){
			document.getElementById("wall").style.display = 'none';
		}
		if(data === 3){
			//Switch to a new maze.
		}
		else{
			document.getElementById("wall").style.display = 'none';
		}
	}
	catch(error){
		alert(error);
	}
}