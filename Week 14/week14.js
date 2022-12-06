// x and y for character
var characterX = 100;
var characterY = 100;
// var for wasd
var w = 87;
var s = 83;
var a = 65;
var d = 68;
// x and y for obstacle1
var obstacleX = 30;
var obstacleY = 50;

var obstacleXs = [];
var obstacleYs = [];
var diameters = [];

var obstacleXspeeds = [];
var obstacleYspeeds = [];

// create shape when mouse is clicked
var mouseShapeX;
var mouseShapeY;

function setup()
{
    createCanvas(500, 600);
    
    for (var i=0; i < 9; i++) {
        obstacleXspeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        obstacleYspeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        obstacleXs[i]= getRandomNumber(500)
        obstacleYs[i]= getRandomNumber(600)
        diameters[i]= getRandomNumber(30)
    }

    createCharacter(200,350)
}

function getRandomNumber(number){
    return Math.floor(Math.random(1, number)) + 1;
 }

function draw()
{
    background(30,150,78);
    stroke(0);
    fill(0);

    //calling createBoarder function
    createBoarder();

    //calling createCharacter function
    createCharacter();

    // calling exitMessage function
    exitMessage();
    
    // calling handlingKeys function
    handlingKeys();
            
     // calling createObstacles function
    createObstacles();
    
    // calling leftExit funtion
    leftExit();

    // calling clickedShape
    clickedShape();
}

function createObstacles()
{
    fill(130,30,14);
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

function createBoarder()
{
    // top border
    rect(0,0,width,10);
    // left border
    rect(0,0,10,height);
    // bottom border
    rect(0, height-10,width, 10);
    // right upper border
    rect(width-10,0,10,height-50);
}

function createCharacter()
{
    //character
    fill(23,40,123);
    circle(characterX,characterY,25);
}

function exitMessage()
{
    textSize(16);
    text("EXIT", width-50,height-50)
}

function handlingKeys()
{
    if(keyIsDown(w))
    {
        characterY -= 10;   
    }
    if(keyIsDown(s))
    {
        characterY += 10;   
    }
    if(keyIsDown(a))
    {
        characterX -= 10;   
    }
    if(keyIsDown(d))
    {
        characterX += 10;   
    }
}


function leftExit()
{
    if(characterX > width && characterY > width-50)
    {
        fill(0);
        stroke(5);
        textSize(26);
        text("You Win!", width/2-50, height/2-50);
    }
}

function clickedShape()
{
    fill(120,130,140);
    circle(mouseShapeX, mouseShapeY, 25);
}
function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}