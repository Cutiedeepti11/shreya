
var sprite1,sprite2;
function setup() {
  createCanvas(400, 400);
  sprite1=createSprite(200,200,30,30);
  sprite2=createSprite(300,200,50,50);
  sprite1.shapeColor="purple";
  sprite2.shapeColor="purple";
}


function draw() {
  background(0);
  sprite2.x=mouseX;
  sprite2.y=mouseY;
  console.log(sprite2.x-sprite1.x)
  console.log(sprite1.width/2+sprite2.width/2)
  if(sprite1.x-sprite2.x<sprite1.width/2+sprite2.width/2&&sprite2.x-sprite1.x<sprite1.width/2+sprite2.width/2)
  {
	sprite1.shapeColor="green";
	sprite2.shapeColor="green";
  }
  else{
	sprite1.shapeColor="purple";
	sprite2.shapeColor="purple";
  }
  drawSprites();
 
}