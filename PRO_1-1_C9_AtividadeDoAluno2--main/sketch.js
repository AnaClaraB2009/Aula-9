var sprite 

function setup() {
  createCanvas(windowWidth, windowHeight);
  sprite = createSprite (200,200,10,10)
}

function draw() 
{
  background(30);
if (keyIsDown(UP_ARROW)) {
sprite.y = sprite.y -2;
}
if (keyIsDown(DOWN_ARROW)) {
  sprite.y = sprite.y +2;
}
if (keyIsDown(RIGHT_ARROW)) {
  sprite.x = sprite.x +2;
}
if (keyIsDown(LEFT_ARROW)) {
  sprite.x = sprite.x -2;
}

  drawSprites();

}




