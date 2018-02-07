var clearButton=document.getElementById("clear")
var stopButton=document.getElementById("stop")
var canvas=document.getElementById("slate");
var ctx=canvas.getContext("2d");

var requestID;

var stopIt=function(){
    window.cancelAnimationFrame(requestID);
};

var animate=function(){
    var r=10;
    var tooBig=false;
    var tooSmall=false;
    window.cancelAnimationFrame(requestID);
    var circle=function(){
	ctx.clearRect(0,0,500,500);
	ctx.beginPath();
	if(r==250){
	    tooBig=true;
	}
	if(!tooBig){
	    ctx.arc(250,250,r,0,2*Math.PI);
	    r++;
	}
	else{
	    r--;
	    ctx.arc(250,250,r,0,2*Math.PI);
	    if(r==10){
		tooBig=false;
	    }
	}
	ctx.fillStyle="blue";
	ctx.fill();
	ctx.stroke();
	requestID=window.requestAnimationFrame(circle);
    };
    circle();
};

var clear=function(e){
    ctx.clearRect(0,0,500,500);
}

canvas.addEventListener("click", animate);
clearButton.addEventListener("click", clear);
stopButton.addEventListener("click", stopIt);


