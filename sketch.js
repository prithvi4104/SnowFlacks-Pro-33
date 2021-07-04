var snowflake,snowflakeImg
var bgImg

function preload() {
  snowflakeImg = loadImage("snow4.webp");
  snowflakeImg2 = loadImage("snow5.webp")
  bgImg = loadImage("snow2.jpg");
}
function setup() {
  createCanvas(800,400);
 
}

function draw() {
  background(bgImg);  
  drawSprites();
  createSnowflake();
}

function createSnowflake(){
  if(frameCount%10===0){
  snowflake = createSprite(random(0,800), 0, 50, 50);
  snowflake.velocityX = -2;
  snowflake.velocityY = 4;
  snowflake.addImage(snowflakeImg);
  snowflake.scale = 0.1;
  }
  if(frameCount%10===0){
    snowflake = createSprite(random(0,800), 0, 50, 50);
    snowflake.velocityX = -2;
    snowflake.velocityY = 4;
    snowflake.addImage(snowflakeImg);
    snowflake.scale = 0.1;
  }
  if(frameCount%20===0){
    snowflake = createSprite(random(0,800), 0, 50, 50);
    snowflake.velocityX = -1;
    snowflake.velocityY = 3;
    snowflake.addImage(snowflakeImg2);
    snowflake.scale = 0.1;
  }

}