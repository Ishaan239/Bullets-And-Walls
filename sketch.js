var bullet, wall, speed, weight, deformation, thickness;

function setup() {
  createCanvas(1600,400);
  speed=random(223, 321);
  weight=random(30, 52);
  thickness=random(22, 83)
  bullet=createSprite(50, 200, 50, 10);
  bullet.shapeColor="white";
  bullet.velocityX=speed;
  wall=createSprite(1200, 200, thickness, 200);
  wall.shapeColor=(80, 80, 80);
}

function draw() {
  background(0);
  
  if(hasCollided(bullet, wall)) {
     deformation=0.5*weight*speed*speed/thickness*thickness*thickness
     bullet.velocityX=0
     if(deformation>10) {
       wall.shapeColor="red";
     }
     if(deformation<10) {
       wall.shapeColor="green";
     }
  }

  drawSprites();
}

function hasCollided(lbullet, lwall) {
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if (bulletRightEdge>wallLeftEdge) {
    return true
  }else{

  
  return false

    
    }
  }

