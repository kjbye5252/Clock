
function setup() {
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES);
  stroke(255);
  noFill();
}

function draw() {
  background(255);
  translate(width/2,height/2);
  rotate(180);
  strokeWeight(5);
  stroke(51);
  ellipse(0,0,250);
  secondshand();
  minuteshand();
  hourhand();
}

function secondshand(){
  push();
  stroke(255,0,0);
  rotate(second()*6);
  line(0,0,0,100);
  pop();
}  

function minuteshand(){
  push();
  stroke(0,255,0);
  rotate(minute()*6);
  line(0,0,0,100);
  pop();
}  

function hourhand(){
  push();
  stroke(0,0,255);
  rotate(hour()*30);
  line(0,0,0,100);
  pop();
}  
