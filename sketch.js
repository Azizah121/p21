var bullet;
var wall, thickness;
 function setup(){ 
   createCanvas(1600,400);
    bullet= createSprite(200,200,60,10);
    bullet.shapeColor='white';
    bullet.velocityX=random(223,321);
    bullet.weight=random(30,52);
     wall= createSprite(1200,200,thickness,height/2);
     wall.velocityX=0;
     thickness=random(22,83);
     
    } 
     function draw(){
        background('black');
        bullet.collide(wall);
        if(hasCollided(bullet, wall)){
         bullet.velocityX=0;
          var damage=0.5* bullet.weight* bullet.velocityX* bullet.velocityX/(thickness *thickness *thickness);
        }
          if(damage<10){
            wall.shapeColor='green';
          }
          if (damage>10){
            wall.shapeColor='red';
          }
        

          
   drawSprites(); 
          }
          function hasCollided(bullet1,wall1){
            bulletRightEdge=bullet1.x+bullet1.width;
            wallLeftEdge=wall1.x;
            if(bulletRightEdge>=wallLeftEdge){
                return true;
            }
                return false;
              }
          