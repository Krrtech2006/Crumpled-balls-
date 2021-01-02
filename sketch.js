
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,height,800,30)
	log=new Box(290,625,20,100)
	log1=new Box(width/2,660,200,20)
	log2=new Box(510,625,20,100)
	paper1=new Paper(200,200)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  ground.display();
  log.display();
  log1.display();
  log2.display();
  paper1.display();
  drawSprites();
 
}



