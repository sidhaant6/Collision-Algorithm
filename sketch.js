var fixedRect, movingRect;

function setup() {
  createCanvas(1200,600);
  fixedRect= createSprite(400, 200, 50, 50);
  movingRect= createSprite(600, 350, 60, 50);

  fixedRect.shapeColor="green";
  movingRect.shapeColor="green";
}
function draw() {
  background(0,0,0);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2     
  && fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2 
  &&  movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2 
  &&  fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2 ){
  fixedRect.shapeColor="Red";
  movingRect.shapeColor="Red";
}
else{
  fixedRect.shapeColor="green";
  movingRect.shapeColor="green";
}

  drawSprites();
}