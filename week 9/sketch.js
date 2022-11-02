function setup() {
  createCanvas(1000,1000);
}

function draw() {
  background(0,125,200);
  //title
  fill(140,20,30)
  textSize(30)
  text("Self Portrait", 375, 60)
//head
  fill(255,205,0);
  circle(450,200,200);

  //eyes
  strokeWeight(10);
  point(410,175);
  point(490,175);

  //mouth
  fill(150,0,0)
  ellipse(450,245,120,40)

  //nose
  triangle(437,205,450,197,463,205)

  //body
  fill(20,150,40)
  rect(400,300,100,200)

  //right Arm
  line(500,320,550,475)

  //left Arm
  line(400,320,350,475)

  //left leg
  line(425,500,400,675)

  //right leg
  line(480,500,505,675)

  //signature
  fill(0,0,0)
  textSize(30)
  text("Mason Auerbach", 650,850)
}