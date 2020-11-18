const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird;

var ONSLING = 1;
var RELEASED = 2;
var END = 0
var gameState = ONSLING;
var score = 0;
var birdLife = 3; 

function preload() {
    h = getTime();
    if(h > 6 && b < 18){
        backgroundImg = loadImage("sprites/bg.png");
    }else{
        backgroundImg = loadImage("sprites/bg2.jpg");
    }
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 240);


    log3 =  new Log(810,180,300, PI/2);

    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    box5 = new Box(800,120,70,70);
    box6 = new Box(800,70,70,70);

    bird = new Bird(200,50);
    
    chain = new slingShot(bird.body, {x:200, y:50});
}

function draw(){
    if(backgroundImg){
        background(backgroundImg);
    }
    Engine.update(engine);
    strokeWeight(4);
    ground.display(); 

    box1.display();
    box1.score();

    box2.display();
    box2.score();

    
    pig1.display();
    pig1.score();
    
    log1.display()  
    log1.score();
    
    log3.display();
    log3.score();
    
    box3.display();
    box3.score();

    box4.display();
    box4.score();

    pig3.display();
    pig3.score();
    
    box5.display();
    box5.score();

    box6.display();
    box6.score();
    
    bird.display();
    platform.display();
    
    chain.display();

    //Score
    fill ("white");
    textSize(30);
    text ("score : " + score,900,25)

    fill ("red");
    text ("life :" + birdLife,900,60);

    if(mouseIsPressed){
        if(gameState === ONSLING  && mouseX > 0 && mouseX <200){
            Matter.Body.setPosition(bird.body,{x:mouseX, y:mouseY})
          }
    }

   if (birdLife === 0){
       gameState = END;
       push()
       fill("cyan");
       textSize(60)
       text("GAMEOVER!", width/2, height/2)    
       pop()
   }
}

/*function mouseDragged(){
    
  if(gameState === ONSLING){
    Matter.Body.setPosition(bird.body,{x:mouseX, y:mouseY})
  }
} 
*/


function mouseReleased(){
    if(gameState === ONSLING){
    birdLife = birdLife -1;
    gameState = RELEASED;
    chain.fly();
}
}

function keyPressed(){
    if(keyCode === 32 && gameState === RELEASED) {
        console.log(gameState)
       chain.attach(bird.body)
       gameState = ONSLING;
       Matter.Body.setPosition(bird.body,{x:200, y:50})
       
    }
}
// asynchronous , async , await
async function getTime(){
   var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/kolkata");
   var responseJSON = await response.json();
   var hour = responseJSON.datetime.slice(11,13)
   return hour
   
}

/*JSON JavaScript Object Notation
{
    name: value,name:value

    2020-11-16T19:16:21.717638+05:30
}*/
