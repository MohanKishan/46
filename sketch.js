// for food
var biscute,cake,op,panipuri,vadapav,samosa
var foodGroup
var biscuteimg,cakeimg,opimg,panipuriimg,vadapavimg,samosaimg
function preload() {
  biscuteimg=loadImage("images/biscute.png")
  cakeimg=loadImage("images/cake.png")
  opimg=loadImage("images/op.png")
  panipuriimg=loadImage("images/panipuri.png")
  vadapavimg=loadImage("images/vada pav.png")
  samosaimg=loadImage("images/samosa.png")
}
function setup(){
  createCanvas(displayWidth-20,displayHeight-20);
foodGroup=new Group();
createFood();
} 

function draw() {
  //set background to white
  background("red");
  // createFood();
  drawSprites();
 
}

function createFood(){
  biscute=createSprite(random(0,displayWidth),random(0,displayHeight))
  biscute.addImage(biscuteimg);
  biscute.scale=0.2
// biscute.lifetime=50;
//complete all these..k
biscute=createSprite(random(0,displayWidth),random(0,displayHeight))
biscute.addImage(cakeimg);
biscute.scale=0.2

cake=createSprite(random(0,displayWidth),random(0,displayHeight))
cake.addImage(opimg);
cake.scale=0.2

op=createSprite(random(0,displayWidth),random(0,displayHeight))
op.addImage(opimg);
op.scale=0.2

panipuri=createSprite(random(0,displayWidth),random(0,displayHeight))
panipuri.addImage(panipuriimg);
panipuri.scale=0.2

vadapav=createSprite(random(0,displayWidth),random(0,displayHeight))
vadapav.addImage(vadapavimg);
vadapav.scale=0.2

samosa=createSprite(random(0,displayWidth),random(0,displayHeight))
samosa.addImage(samosaimg);
samosa.scale=0.2



}

