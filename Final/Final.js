var mouseShapeX;
var mouseShapeY;

var obstacleX = 500;
var obstacleY = 50;

var obstacleXs = [];
var obstacleYs = [];
var diameters = [];

var obstacleXspeeds = [];
var obstacleYspeeds = [];


function setup()

    createCanvas(1000,1000)

    for (var i=0; i < 50; i++) {
        obstacleXspeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        obstacleYspeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        obstacleXs[i]= getRandomNumber(500)
        obstacleYs[i]= getRandomNumber(600)
        diameters[i]= getRandomNumber(30)
}

function draw()
{
    clickedShape();

    background (0,125,200)

    createObstacles();

    //rectangle stump
    fill (170,75,30)
    rect (450,700,65,150)

    //ground
    fill(20,200,100)
    rect(0,850,1000,200)

    // big triangle
    fill (0,200,50)
    triangle(235,700,485,550,745,700)

    //medium triangle
    fill(0,200,50)
    triangle(300,600,485,450,680,600)

    //small triangle
    fill(0,200,50)
    triangle (350,500,485,350,630,500)

    //top triangle
    fill(0,200,50)
    triangle (400,400,485,275,580,400)

    //star
    fill(255,255,0)
    triangle (485,95,585,245,385,245)
    
    fill(255,255,0)
    triangle (385,145,485,295,585,145)
 
    //ornimints
    fill(255,0,0)
    circle(370,650,30 )

    fill(0,255,0)
    circle(450,620,30 )

    fill(0,0,255)
    circle(520,660,30 )

    fill(255,0,0)
    circle(600,670,30 )

    fill(0,0,255)
    circle(400,560,30 )

    fill(0,255,0)
    circle(520,570,30 )

    fill(255,0,0)
    circle(460,530,30 )

    fill(0,0,255)
    circle(550,540,30 )

    fill(255,0,0)
    circle(530,450,30 )

    fill(0,255,0)
    circle(440,470,30 )

    fill(0,0,255)
    circle(480,430,30 )

    fill(255,0,0)
    circle(460,360,30 )

    fill(0,255,0)
    circle(530,380,30 )
}

function createObstacles()
{
    fill(255,255,255);
    for (var i=0; i < obstacleXs.length; i++) {
        circle(obstacleXs[i], obstacleYs[i], diameters[i]);
        obstacle1Xspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        obstacle1Yspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
   
      
       obstacleXs[i] += obstacleXspeeds[i];
       obstacleYs[i] += obstacleYspeeds[i];
       
       if(obstacleXs[i] > width)
       {
           obstacleXs[i] = 0;
       }
       if(obstacleXs[i] < 0)
       {
           obstacleXs[i] = width;
       }
       if(obstacleYs[i] > height)
       {
           obstacleYs[i] = 0;
       }
       if(obstacleYs[i] < 0)
       {
           obstacleYs[i] = height;
       }
    }

}

function clickedShape()
{
    fill(255,0,0);
    rect(mouseShapeX, mouseShapeY, 30,30);
}
function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}

