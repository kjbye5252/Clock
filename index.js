
function setup() {
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES);
  stroke(255);
  noFill();
}

function draw() {
  background(51);
  translate(width/2,height/2);
  ellipse(0,0,250);
  secondshand();
  minuteshand();
  hourhand();
}

function secondshand(){
  push();
  rotate(second()*6);
  line(0,0,0,100);
  pop();
}  

function minuteshand(){
  push();
  rotate(minute()*6);
  line(0,0,0,100);
  pop();
}  

function hourhand(){
  push();
  rotate(hour()*30);
  line(0,0,0,100);
  pop();
}  
