var clearButton=document.getElementById("clear")
var stopButton=document.getElementById("stop")
var dvdButton=document.getElementById("dvd")
var growShrinkButton=document.getElementById("growShrink")
var canvas=document.getElementById("slate");
var ctx=canvas.getContext("2d");

var requestID;

var stopIt=function(){
    window.cancelAnimationFrame(requestID);
};

var animateDVD=function(){
    var x=200;
    var y=225;
    var randomOne=Math.floor(Math.random()*2);
    var randomTwo=Math.floor(Math.random()*2);
    var ranX=Math.floor(Math.random()*7)+1;
    var ranY=Math.floor(Math.random()*7)+1;
    var moveRight=true;
    var moveDown=true;
    if(randomOne==1){
	moveRight=true;
    }
    else{
	moveRight=false;
    }
    if(randomTwo==1){
	moveDown=true;
    }
    else{
	moveDown=false;
    }
    window.cancelAnimationFrame(requestID);
    var rect=function(){
	ctx.clearRect(0,0,500,500);
	ctx.beginPath();
	ctx.fillStyle="lightsteelblue"
	if(x>=400){
	    moveRight=false;
	}
	if(x<=0){
	    moveRight=true;
	}
	if(y>=450){
	    moveDown=false;
	}
	if(y<=0){
	    moveDown=true;
	}
	if(moveRight){
	    x+=ranX;
	}
	else{
	    x-=ranX;
	}
	if(moveDown){
	    y+=ranY;
	}
	else{
	    y-=ranY;
	}
	ctx.fillRect(x,y,100,50);
	requestID=window.requestAnimationFrame(rect);
    };
    rect();
};
    
var animateCircle=function(){
    var r=0;
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
	    if(r==0){
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

growShrinkButton.addEventListener("click", animateCircle);
dvdButton.addEventListener("click", animateDVD);
clearButton.addEventListener("click", clear);
stopButton.addEventListener("click", stopIt);


