


var gamestate = "maze";


function preload(){

}


function setup(){
createCanvas(windowWidth,windowHeight);
answer = createInput("Enter your answer");
  answer.position(width/2-200,height/2);
  con=createButton("OK");
  con.position(width/2+200,height/2);
  con.mouseClicked(checkanswer);
answer.hide()
con.hide()

}


function draw(){
background("orange");

if(gamestate === "start"){
   
 textFont("algerian");
 textSize(20);
 text("WELCOME TO THE GAME. In this game", width/2-200, 200);
 textAlign("left", TOP);
 
 
 textSize(20);
 text("ron is lost and can't find his way back .", width/2-200, 215);
 textAlign("left", TOP);

      
  
 textSize(20);
 text("home.So can you please help ron find ", width/2-200, 240);
 textAlign("left", TOP);
 
  textSize(20);
 text("his way back home.", width/2-200, 265);
 textAlign("left", TOP);

textSize(20);
 text("Click the enter key to start.", width/2-200, 350);
 textAlign("left", TOP);

 ron = createSprite(width/2, 100,50,50);

ron.shapeColor = "blue";

if(keyDown("ENTER")){
  gamestate = "math";
}
}
else if(gamestate === "math"){
  text("5+4=?",width/2-50,100)
  answer.show()
  con.show()
  
}
else if(gamestate === "maze"){

answer.hide()
con.hide()
var obstacle1 = createSprite(400,250,10,200);
var obstacle2= createSprite(40,150,100,10);
var obstacle3 = createSprite(80,200,10,50);
var obstacle4 = createSprite(500,250,10,100);
var obstacle5 = createSprite(80,290,10,50);
var obstacle6 = createSprite(600,250,10,200);
var obstacle7 = createSprite(700,250,10,100);
var obstacle8 = createSprite(800,250,10,200);
var obstacle9 = createSprite(230,230,10,100);
var obstacle10 = createSprite(800,250,10,100);
var obstacle11 = createSprite(900,250,10,200);
var obstacle12 = createSprite(1000,250,10,100);
var obstacle13 = createSprite(1100,250,10,200);
var obstacle14 = createSprite(1200,540,10,50);
var obstacle15 = createSprite(1000,600,100,10);
var obstacle16= createSprite(1200,600,50,10);
var obstacle17 = createSprite(1200,320,10,50);
var obstacle18 = createSprite(1200,450,10,50);
var Cup = createSprite(1350,550,10,80);

Cup.shapeColor ="gold";




function draw() {
  background("green");
  
  
  
  if (ron.isTouching(Cup)) {
  textSize(20);
  
  text("YOU HAVE REACHED HOME",100,350);
  }
 Edges = createEdgeSprites();
  
 drawSprites();
ron.bounceOff(Edges);
ron.bounceOff(obstacle1);
ron.bounceOff(obstacle2);
ron.bounceOff(obstacle3);
ron.bounceOff(obstacle4);
ron.bounceOff(obstacle5);
ron.bounceOff(obstacle6);
ron.bounceOff(obstacle7);
ron.bounceOff(obstacle8);
ron.bounceOff(obstacle9);
ron.bounceOff(obstacle10);
ron.bounceOff(obstacle11);
ron.bounceOff(obstacle12);
ron.bounceOff(obstacle13);
ron.bounceOff(obstacle14);
ron.bounceOff(obstacle15);
ron.bounceOff(obstacle16);
ron.bounceOff(obstacle17);
ron.bounceOff(obstacle18);
ron.bounceOff(obstacle19);
obstacle1.velocityY=5;
obstacle1.bounceOff(Edges[3]);
obstacle1.bounceOff(Edgee[1]);
if (keyDown("DOWN_ARROW")) {
  ron.velocityY=2;
  ron.velocityX=0 ;
   }
if (keyDown("LEFT_ARROW")) {
ron.velocityY=0;
ron.velocityX=-2;
 }
if (keyDown("RIGHT_ARROW")) {
ron.velocityX=2;
ron.velocityY=0;
}
if (keyDown("UP_ARROW")) {
 ron.velocityX=0;
 ron.velocityY=-2;
                 
   }
     
}
}
drawSprites();

}

function checkanswer(){
  console.log(answer.value())
  if("9"===answer.value() ){
    gamestate="maze"
  }
  else{
    text("Try Again!!",width/2+300,500);
    return false
  }
}