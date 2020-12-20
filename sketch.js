const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(700, 500);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here
    paperball = new Paper(100, 450);
	leftdustbin = new Dustbin(550, 440, 10, 50);
	bottomdustbin = new Dustbin(605, 470, 100, 10);
	rightdustbin = new Dustbin(660, 440, 10, 50);
	ground = new Ground(400, 480, 800, 10);

	Engine.run(engine);

	if (keyDown(UP_ARROW)){
		keyPressed();
  }
}

function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  paperball.display();
  ground.display();
  leftdustbin.display();
  bottomdustbin.display();
  rightdustbin.display();
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paperball.body, paperball.body.position, {x:45, y:-80});
	}
}