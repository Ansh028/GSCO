var car,wall;
var speed,weight

function setup() {
  createCanvas(400,400);
  createSprite(400, 200, 50, 50);
  speed=random(55,90)
  weight=random(400,1500)
  car=createSprite(50,200,30,30)
  /*line=createSprite(400,100,400,10)
  line=createSprite(400,150,400,10)
  line=createSprite(400,200,400,10)
  line=createSprite(400,250,400,10)
  line=createSprite(400,300,400,10)
 */ wall=createSprite(400,200,50,300)
  
  
}

function draw() {
  car.velocityX=speed;
  background(255,255,255);  
  if(wall.x-car.x<(car.width+wall.width/2))
  {
    car.velocityX=0;
    var deformation=0.5*weight*speed*speed/22509;

  if(deformation>180)
  {
    car.shapeColor=color(255,0,0)
  }
  if(deformation<180 && deformation>100)
  {
car.shapeColor=color(230,230,0)
  }
  if(deformation<100)
  {
  car.shapeColor=color(0,255,0)
  }
}
  drawSprites();
}