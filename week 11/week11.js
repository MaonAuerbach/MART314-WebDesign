// x and y for character
var characterX = 100;
var characterY = 100;
// var for wasd
var w = 87;
var s = 83;
var a = 65;
var d = 68;
// x and y for obstacle1
var obstacle1X = 30;
var obstacle1Y = 50;
var obstacle1Xspeed;
var obstacle1Yspeed;
// x and y for obstacle2
var obstacle2X= 50;
var obstacle2Y=70;
var obstacle2Xspeed;
var obstacle2Yspeed;
// create shape when mouse is clicked
var mouseShapeX;
var mouseShapeY;
function setup()
{
    createCanvas(500, 600);
    
    obstacle1Xspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    obstacle1Yspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    obstacle2Xspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    obstacle2Yspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
}
function draw()
{
    background(30,150,78);
    stroke(0);
    fill(0);
    // top border
    rect(0,0,width,10);
    // left border
    rect(0,0,10,height);
    // bottom border
    rect(0, height-10,width, 10);
    // right upper border
    rect(width-10,0,10,height-50);

    // exit message
    textSize(16);
    text("EXIT", width-50,height-50)
        //character
        fill(23,40,123);
        circle(characterX,characterY,25);
    
        // handle the keys
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
            
    fill(130,30,14);
  // obstacle 1
    circle(obstacle1X, obstacle1Y, 10);

    
     obstacle1Xspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
     obstacle1Yspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

   
    obstacle1X += obstacle1Xspeed;
    obstacle1Y += obstacle1Yspeed;
    
    if(obstacle1X > width)
    {
        obstacle1X = 0;
    }
    if(obstacle1X < 0)
    {
        obstacle1X = width;
    }
    if(obstacle1Y > height)
    {
        obstacle1Y = 0;
    }
    if(obstacle1Y < 0)
    {
        obstacle1Y = height;
    }
                
                fill(13,14,140);
                // obstacle 2
                circle(obstacle2X, obstacle2Y, 10);
            
                
                 obstacle2Xspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
                 obstacle2Yspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
            
               
                obstacle2X += obstacle2Xspeed;
                obstacle2Y += obstacle2Yspeed;
                
                if(obstacle2X > width)
                {
                    obstacle2X = 0;
                }
                if(obstacle2X < 0)
                {
                    obstacle2X = width;
                }
                if(obstacle2Y > height)
                {
                    obstacle2Y = 0;
                }
                if(obstacle2Y < 0)
                {
                    obstacle2Y = height;
                }

    // check to see if the character has left the exit
    if(characterX > width && characterY > width-50)
    {
        fill(0);
        stroke(5);
        textSize(26);
        text("You Win!", width/2-50, height/2-50);
    }

    // create shape when mouse is clicked
    fill(120,130,140);
    circle(mouseShapeX, mouseShapeY, 25);
}
function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}

