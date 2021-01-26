const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

const Constraint = Matter.Constraint

var boy, engine, world, ground, tree, sling, stone;
var mango1, mango2, mango3, mango4, mango5;

function preload()
{
	boy = loadImage("PluckingMangoes/boy.png");
	tree = loadImage("PluckingMangoes/tree.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400, 675, 800, 20);
	
	mango1 = new Mango(500, 300);
	mango2 = new Mango(520, 310);
	mango3 = new Mango(580, 325);
	mango4 = new Mango(630, 310);
	mango5 = new Mango(670, 350);

	stone = new Stone(200, 400);
	sling = new SlingShot(stone.body, {x: 100, y: 550});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(221);

  detectcollision(stone, mango1);
  detectcollision(stone, mango2);
  detectcollision(stone, mango3);
  detectcollision(stone, mango4);
  detectcollision(stone, mango5);

  image(tree, 375,  230, 400, 450);

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  ground.display();
  image(boy, 100, 480, 100, 250);

  stone.display();
  sling.display();
  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === 32) {
		Matter.Body.setPosition(stone.body, {x: 235, y: 420})
		sling.attach(stone.body);
	}
}

function mouseDragged() {
	Matter.Body.setPosition(stone.body, {x: mouseX, y: mouseY})
}

function mouseReleased() {
	sling.fly();
}


function detectcollision(Lstone, Lmango) {
	mangoBodyPosition = Lmango.body.position
	stoneBodyPosition = Lstone.body.position

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
		if(distance<=Lmango.radius+Lstone.radius) {
			Matter.Body.setStatic(Lmango.body, false);
			console.log("detect");
		}

}


