
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
  text("0",0,-105);
  text("3",108,3);
  text("6",3,111);
  text("9",-108,0);
  noFill();
  rotate(180);
  strokeWeight(5);
  stroke(255);
  ellipse(0,0,250);
  line(-50,-50,-50,50);
  line(25,0,-25,0);
//   secondshand();
//   minuteshand();
//   hourhand();
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
