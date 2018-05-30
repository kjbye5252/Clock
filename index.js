
function setup() {
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES);
  textAlign(CENTER);
  textSize(20);
}

function draw() {
  background(51);
  translate(width/2,height/2);
  strokeWeight(1);
  fill(255);
  text("0",0,-108);
  text("3",108,0);
  text("6",0,108);
  text("9",-108,0);
  noFill();
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
  line(0,0,0,75);
  pop();
}  

function hourhand(){
  push();
  stroke(255);
  rotate(hour()*30);
  line(0,0,0,50);
  pop();
}  
