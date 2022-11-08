var headX= 450
var headY= 200
var headDirection= 6

var bodyX = 400;
var bodyY = 300;
var bodyDirection = 3;

var eyeXright=490;
var eyeYright=175;
var eyeRightdirection=4;

var eyeXleft=410;
var eyeYleft=175;
var eyeLeftdirection=4;

var mouthX=450
var mouthY=245
var mouthDirection=5

var size = 22;
var count = 0;
var sizeDirection = 2;

var ShirtcircleX=450  
var shirtcircleY=350
var shirtcircleDirection=7

var size = 22;
var count = 0;
var sizeDirection = 2;

var movement
function setup() {
  createCanvas(1000,1000);
  movement = floor(random(1,11))+ 1
}

function draw() {
  background(0,125,200);
  //title
  fill(140,20,30)
  textSize(size);
  size+= sizeDirection;
  count++;
  if(count > 5)
  {
      sizeDirection *=-1;
      count = 0;
  }
  text("Self Portrait", 375, 60)
//head
  fill(255,205,0);
  circle(headX,headY,175);
    headX+=headDirection;
    if(headX >= 800 || headX <= 200)
    {
        headDirection *= -1;
    }

  //eyes
  strokeWeight(10);
  point(eyeXleft,eyeYleft);
    eyeXleft+=eyeLeftdirection
    if(eyeXleft >= 720 || eyeXleft <= 270)
    {
        eyeLeftdirection *= -1;
    }
  point(eyeXright,eyeYright);
  eyeXright+=eyeRightdirection
  if(eyeXright >= 720 || eyeXright <= 270)
  {
      eyeRightdirection *= -1;
  }

  //mouth
  fill(150,0,0)
  ellipse(mouthX,mouthY,120,40)
    mouthY+=mouthDirection
    if(mouthY >= 800 || mouthY <= 200)
    {
        mouthDirection *= -1;
    }

  //nose
  triangle(437,205,450,197,463,205)

  //body
  fill(20,150,40)
  rect(bodyX,bodyY,100,200);
    bodyY += bodyDirection;
    if(bodyY <= 50 || bodyY >= 700 )
    {
        bodyDirection *= -1;
    }

  //circle on shirt
  fill (167,205,200);
  circle (ShirtcircleX,shirtcircleY,50);
  shirtcircleY += shirtcircleDirection, ShirtcircleX += shirtcircleDirection;
  if(shirtcircleY <= 100 || shirtcircleY >= 700, ShirtcircleX  <= 110 || ShirtcircleX >= 700 )
  {
    shirtcircleDirection *= -1;
  }


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