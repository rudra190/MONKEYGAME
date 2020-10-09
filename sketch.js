
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obGroup
var score
var survival;

function preload(){
  
  
monkey_running=loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
} 



function setup() {
  createCanvas(620,620);
 monkey = createSprite(80,316,20,20);
 monkey.addAnimation("moving", monkey_running); 
  monkey.scale=0.1 

  
  
   ground = createSprite(400,350,900,10);
  ground.velocityX=-3
  ground.x = ground.width /2 ;
  
  
   ob =new Group();
  foodGroup = new Group();
  
  
  score=0
  
  survival=0
  
  
  
}


function draw() {
background("red");
  
  
   if (ground.x < 0){
      ground.x = ground.width/2;
    }    
  
if(keyDown("space")) {
        monkey.velocityY = -15   ;
    }
       monkey.velocityY = monkey.velocityY + 0.8  ;

  
  monkey.collide(ground);
  
 spawnfood(); 
 spawnobstacles();
  
  drawSprites();
  
   stroke("white")
  textSize("20")
  fill("white")
  text("Score :"+ score,500,50)
  
  stroke("white")
  textSize("20")
  fill("white")
  
  if(ob.isTouching(monkey)){
    ground.velocityX = 0;
    monkey.velocityY = 0; 
   
    ob.setVelocityXEach(0);
    foodGroup.setVelocityXEach(0);
      
    ob.setLifetimeEach(-1);
    foodGroup.setLifetimeEach(-1);
    
    survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time: "+ survivalTime, 100,50);
    
  }
  
    
}

function spawnfood(){
  if(frameCount%80===0){ 
  banana=createSprite(600,250,40,10)
  banana.y=random(120,200);
 banana.velocityX=-5;
 banana.setLifetime=300;
   monkey.depth=banana.depth+1
  banana.scale=0.05;
    banana.addImage(bananaImage)
  foodGroup.add(banana);
    
  } 
}

function spawnobstacles(){
  
  if(frameCount%300===0){
  obstacle=createSprite(800,320,10,40)
    obstacle.velocityX=-5
    obstacle.setLifetime=300;
   obstacle.addImage(obstacleImage)

          
  obstacle.scale = 0.15;
    obstacle.lifetime = 300;
  
    ob.add(obstacle); 
}
  
}