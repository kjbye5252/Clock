
function setup() {
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES);
  textAlign(CENTER);
  textSize(40);
}

function draw() {
  background(51);
  translate(width/2,height/2);
  strokeWeight(1);
  fill(255);
  text("0",-3,-203);
  text("3",216,6);
  text("6",-3,222);
  text("9",-216,6);
  noFill();
  rotate(180);
  strokeWeight(14);
  stroke(255);
  ellipse(0,0,500);
  secondshand();
  minuteshand();
  hourhand();
}

function secondshand(){
  push();
  stroke(255,0,0);
  rotate(second()*6);
  line(0,0,0,200);
  pop();
}  

function minuteshand(){
  push();
  stroke(255);
  rotate(minute()*6);
  line(0,0,0,150);
  pop();
}  

function hourhand(){
  push();
  stroke(255);
  rotate(hour()*30);
  line(0,0,0,100);
  pop();
}  
