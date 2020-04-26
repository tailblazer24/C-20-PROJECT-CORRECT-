
var r = 0;
var g = 50;
var b=255;



function setup(){

  createCanvas(1200,400);
}


function draw(){

  r=map(mouseX,mouseY,10,4,165);
   g=map(mouseX,mouseY,67,6,23);
    b=map(mouseX,mouseY,27,32,140);
     background(r,g,b);
      ellipse(mouseX,mouseY,100,100);

 
}

