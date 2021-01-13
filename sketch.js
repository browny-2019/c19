//Global Variables
var monkey,stone,banana,score,BananaGroup,ObstacleGroup;


function preload(){
 backImage=loadImage("jungle.jpg") ;
  player_running=loadAnimation("Monkey_01.png","Monkey_02.png", "Monkey_03.png" ,"Monkey_04.png" ,"Monkey_05.png" ,"Monkey_06.png"  ,"Monkey_07.png","Monkey_08.png","Monkey_09.png",   "Monkey_10.png")
 
  bananaImage=loadImage("banana.png");
  obstacleImage=loadImage("stone.png");
}


function setup() {
  createCanvas(600,400);
   jungle = createSprite(300,50,600,400);
  jungle.addImage(backImage);
  jungle.scale = 2;
  jungle.velocityX = -5;
  
   monkey = createSprite(80,380,10,10);
  monkey.addAnimation("running",player_running);
  monkey.scale = 0.08;
  
   ground = createSprite(300,380,600,10)
  ground.visible = false;
  
  score = 0;
  BananaGroup = new Group ();
  ObstacleGroup = new Group();
 
}


function draw(){
 background(255); 
  if(jungle.x<0){
    jungle.x = jungle.width/2;
  }
  monkey.collide(ground);
  spawnBananas();
  spawnObstacles();
  
  if(keyDown("space")){
    monkey.velocityY = -10;
  }
  monkey.velocityY = monkey.velocityY+0.8;
  
  if(monkey.isTouching(BananaGroup)){
    BananaGroup.destroyEach();
    monkey.scale = monkey.scale + 0.4;
    score = score+1; 
  }
  if(monkey.isTouching(ObstacleGroup)){
    monkey.scale = monkey.scale - 0.42   ;
    ObstacleGroup.destroyEach();
  }
 

  drawSprites();
   stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+score,500,50);
}

function spawnBananas() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var banana = createSprite(300,120,40,10);
    banana.x = 600
    banana.y = Math.round(random(100,200));
    banana.addImage(bananaImage);
    banana.scale = 0.05;
    banana.velocityX = -3;
    BananaGroup.add(banana);
  }
}
   function spawnObstacles() {
  //write code here to spawn the clouds
  if (frameCount % 200 === 0) {
    var obstacle = createSprite(600,360,40,10);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.2;
    obstacle.velocityX = -3;
    ObstacleGroup.add(obstacle);
  }
}

   