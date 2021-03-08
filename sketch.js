
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5, mango6,mango7,mango8,mango9;
var world,boy;
var score = 0;
var gameState = play;
var serve;
function preload(){
	boy=loadImage("ninja.jpg");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;
var tower1 = new ground(850,250,20,300);
var tower2 = new ground(950,250,20,400);
var tower3 = new ground(1500,250,20,500);

	mango1=new mango(830,50,20);
	mango2=new mango(890,150,20);
	mango3=new mango(1200,200,20);
	mango4=new mango(1250,300,20);
	mango5=new mango(1100,400,20);
	mango6=new mango(940,500,20);
    mango7=new mango(1100,550,20);
	mango8=new mango(1070,90,20);
  mango9=new mango(950,290,20);
  
  stone1 =new stone(237,405,30)
  slingshot = new SlingShot(stone1.body,{x:237, y:425});
  
	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
	Engine.run(engine);

}

function draw() {

  background("white");
  fill("black");
  textSize(20);
  text("NINJA STARS: "+score,10,15)
  image(boy ,70,325,200,300);
  textSize(20)
  fill("black")
  text("PRESS 'SPACE' TO GET THE NINJA (NUN CHAKU) BACK",10,50);
  slingshot.display();
  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  stone1.display();

 if(detectcollision(stone1,mango1)||detectcollision(stone1,mango2)||detectcollision(stone1,mango3)||detectcollision(stone1,mango4)||detectcollision(stone1,mango5)||detectcollision(stone1,mango6)||detectcollision(stone1,mango7)||detectcollision(stone1,mango8)||detectcollision(stone1,mango9)){
   score = score++
 }

 if (score>=8){
   treeObj.display() = false;

 }




detectcollision(stone1,mango1);
detectcollision(stone1,mango2);
detectcollision(stone1,mango3);
detectcollision(stone1,mango4);
detectcollision(stone1,mango5);
detectcollision(stone1,mango6);
detectcollision(stone1,mango7);
detectcollision(stone1,mango8);
detectcollision(stone1,mango9);


  groundObject.display();
}




function mouseDragged(){
  Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingshot.fly();
 
}

function keyPressed(){
  if(keyCode === 32){
      slingshot.attach(stone1.body);
  }
  }
  function isTouching(object1,object2){
    if(object1.x-object2.x<object2.width/2+object1.width/2
      && object2.x-object1.x < object2.width/2+object1.width/2
      && object1.y-object2.y<object2.height/2+ object1.height/2
      && object2.y-object1.y< object2.height/2+object1.height/2) {
       object2.isStatic=false
       
       World.remove(world,object2.body);
       
  push()
  
  tint(255,object2.Visibility);
  pop()      
      // object2.shapeColor = "red";
   }
   else{
      
       object2.isStatic=true
       //object2.shapeColor = "green";
   }
   
   
   }
  function detectcollision(lstone,lmango){
   var mangoBodyPosition = lmango.body.position
   var stoneBodyPosition = lstone.body.position

   var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
   if(distance<lmango.r+lstone.r){
     Matter.Body.setStatic(lmango.body,false)
   }
  }