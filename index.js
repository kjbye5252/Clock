
function setup() {
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES);
  stroke(255);
  noFill();
}

function draw() {
  background(51);
  translate(width/2,height/2);
  rotate(180);
  strokeWeight(5);
  stroke(255);
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
  stroke(255);
  rotate(minute()*6);
  line(0,0,0,100);
  pop();
}  

function hourhand(){
  push();
  stroke(127);
  rotate(hour()*30);
  line(0,0,0,100);
  pop();
}  
