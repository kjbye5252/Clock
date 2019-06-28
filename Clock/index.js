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
  text("12",-0.5,-200);
  text("3",216,14);
  text("6",-0.5,222);
  text("9",-216,14);
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
  line(0,0,0,180);
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
