var movingObject,stableObject




function setup() {
  createCanvas(800,400);


movingObject =  createSprite(400, 200, 50, 50);
movingObject.shapeColor = "green";
stableObject =  createSprite(400, 200, 50, 50);
stableObject.shapeColor = "yellow";

}

function draw() {

  background(0);  
  
  // for the movement of the object
  movingObject.x = mouseX;
  movingObject.y = mouseY;
  
  console.log(movingObject.x-stableObject.x);
  
  // for the object when touch should change color

  if(movingObject.x-stableObject.x < stableObject.width/2 + movingObject.width/2 
    && stableObject.x-movingObject.x < stableObject.width/2 + movingObject.width/2
    &&movingObject.y-stableObject.y < stableObject.height/2 + movingObject.height/2 
    && stableObject.y-movingObject.y < stableObject.height/2 + movingObject.height/2


    ){
    movingObject.shapeColor = "pink";
    stableObject.shapeColor = "pink";
  }
else{
  movingObject.shapeColor = "green";
  stableObject.shapeColor = "yellow";
}


  drawSprites();

}