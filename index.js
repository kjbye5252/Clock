
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
//   text("0",0,-105);
//   text("3",108,3);
//   text("6",3,111);
//   text("9",-108,0);
  noFill();
//   rotate(180);
  strokeWeight(7);
  stroke(255);
  ellipse(0,0,250);
  line(-45,-45,-45,45);
  line(20,0,-20,0);
  stroke(255,0,0);
  line(25,20,50,-40);
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
