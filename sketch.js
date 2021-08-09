var movingRect, fixedRect;
function setup() {
  createCanvas(800,400);
  movingRect = createSprite(198, 240, 40, 50);
  movingRect.shapeColor="red";
  fixedRect = createSprite(200, 300, 40, 50);
  fixedRect.shapeColor="red";
}

function draw() {
  background(255,255,255); 
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
if (movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2&&
    movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2){
    movingRect.shapeColor="green";
    fixedRect.shapeColor="green";
}
else{
  movingRect.shapeColor="red";
  fixedRect.shapeColor="red";
}
  drawSprites();
}