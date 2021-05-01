var ball, leftBar,rightBar,bottomBar, ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

/*function preload()
{
	
}*/

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new Paper(50,200,20);
	leftBar = new Dustbin(515,645,20,100);
	rightBar = new Dustbin(686,645,20,100);
	bottomBar = new Dustbin(600,690,150,20);
	ground = new Dustbin(400,700,800,10);
	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball.display();
  leftBar.display();
  rightBar.display();
  bottomBar.display();
  ground.display();
  drawSprites();

}
function keyPressed(){
	if(keyCode ===UP_ARROW)
	Matter.Body.applyForce(ball.body,ball.body.position,{x:80,y:-40})
}


