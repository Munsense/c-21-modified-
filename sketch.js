//create two variables
var fixedRect, movingRect;
var o1,o2,o3,o4;
function setup() {
  createCanvas(1200,800);
  fixedRect= createSprite(200,200,50,80);
  fixedRect.shapeColor= "green";
//fixedRect.debug= true;
  movingRect= createSprite(400, 200,80,30);
  movingRect.shapeColor= "green";
  //movingRect.debug= true;

  o1= createSprite(100,100,50,50);
  o1.shapeColor= "plum";
  o2= createSprite(200,100,50,50);
  o2.shapeColor= "plum";
  o3= createSprite(300,100,50,50);
  o3.shapeColor= "plum";
  o4= createSprite(400,100,50,50);
  o4.shapeColor= "plum";
}

function draw() {
  background(0,0,0);  
  movingRect.x= World.mouseX;
  movingRect.y= World.mouseY;

if(isTouching(movingRect, o1)){
movingRect.shapeColor= "blue";
o1.shapeColor="blue";
}
else{
  movingRect.shapeColor= "purple";
  o1.shapeColor="purple";
}
  drawSprites();
}
//passing argument, basically whatever sits within your paranthesis
