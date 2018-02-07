var clearButton=document.getElementById("clear")
var stopButton=document.getElementById("stop")
var canvas=document.getElementById("slate");
var ctx=canvas.getContext("2d");

var stopIt=function(){
    window.cancelAnimationFrame(requestID);
};

var animate=function(){
    var r=10;
    window.cancelAnimationFrame(requestID);
    var circle=function(){
	requestID=window.requestAnimationFrame(circle);
	ctx.beginPath();
	ctx.arc(250,250,r,0,2*Math.PI);
	ctx.fillStyle="blue";
	ctx.fill();
	ctx.stroke();
	r++;
    };
    circle();
};

var clear=function(e){
    ctx.clearRect(0,0,500,500);
}

canvas.addEventListener("click", animate);
clearButton.addEventListener("click", clear);
stopButton.addEventListener("click", stopIt);


