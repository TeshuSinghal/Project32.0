const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var platform1, platform2;
var block1, block2, block3, block4, block5, block6, block7;
var block8, block9, block10, block11, block12;
var block13, block14, block15, block16, block17;
var block18, block19, block20;
var block21, block22, block23;
var block24, block25;
var score = 0;
var backgroundColor;

function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  
  //createSprite(400, 200, 50, 50);
  ground = new Ground(450, 390, 900, 20);
  platform1 = new Ground(395, 300, 250, 10);
  platform2 = new Ground(700, 150, 200, 10);

 
  block1 = new Block(300, 275, 30, 40);
  block2 = new Block(330, 275, 30, 40);
  block3 = new Block(360, 275, 30, 40);
  block4 = new Block(390, 275, 30, 40);
  block5 = new Block(420, 275, 30, 40);
  block6 = new Block(450, 275, 30, 40);
  block7 = new Block(480, 275, 30, 40);

  block8 = new Block(630, 132, 30, 40);
  block9 = new Block(660, 132, 30, 40);
  block10 = new Block(690, 132, 30, 40);
  block11 = new Block(720, 132, 30, 40);
  block12 = new Block(750, 132, 30, 40);
  
  
  block13 = new Block(330, 235, 30, 40);
  block14 = new Block(360, 235, 30, 40);
  block15 = new Block(390, 235, 30, 40);
  block16 = new Block(420, 235, 30, 40);
  block17 = new Block(450, 235, 30, 40);

  block18 = new Block(660, 85, 30, 40);
  block19 = new Block(690, 85, 30, 40);
  block20 = new Block(720, 85, 30, 40);

  block21 = new Block(360, 195, 30, 40);
  block22 = new Block(390, 195, 30, 40);
  block23 = new Block(420, 195, 30, 40);

  block24 = new Block(690, 45, 30, 40);
  block25 = new Block(390, 155, 30, 40);

  polygon = new Polygon(200,390,40);
  
  slingshot = new Slingshot(polygon.body, {x: 200, y:200} );
  

  
  Engine.run(engine);
}

function draw() {
  /*if(backgroundColor){
    background(backgroundColor);
  }*/
  background(56, 44, 44);
  Engine.update(engine);

  textSize(20);
  fill(225);
  text("SCORE: "+score, 100,50);

  ground.display();
  platform1.display();
  platform2.display();

  fill(135, 206, 234);
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();

  fill(251, 206, 234);
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block24.display();

  block13.score();
  block14.score();
  block15.score();
  block16.score();
  block17.score();
  block24.score();


  fill(63, 224, 208);
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();

  block18.score();
  block19.score();
  block20.score();
  block21.score();
  block22.score();
  block23.score();

  fill(128, 128, 128);
  block25.display();

  block25.score();

  polygon.display();
  slingshot.display();

  

  drawSprites();
}

function mouseDragged(){

    Matter.Body.setPosition(polygon.body, {x: mouseX, y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
 if(keyCode === 32){
    slingshot.attach(polygon.body);
  }
}

/*async function getBackgroundImg(){ 
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();
  var datetime = responseJSON.datetime;

  console.log(datetime);

  var hour = datetime.slice(12, 14);
  
  console.log(hour);

  if(hour >= 06 && hour <= 19){
      background("blue");
  }else{
    background("black");
  }
  backgroundColor  = background();
  

}*/
