const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boy, engine, world, ground, tree;
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

	mango1 = new Mango(200, 200);
	//mango2 = new Mango()
	//mango3 = new Mango()
	//mango4 = new Mango()
	//mango5 = new Mango()

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  //detectcollision(stoneObj, mango1);
  //detectcollision(stoneObj, mango2);
  //detectcollision(stoneObj, mango3);
  //detectcollision(stoneObj, mango4);
  //detectcollision(stoneObj, mango5);

  mango1.display();
  //mango2.display();
  //mango3.display();
  //mango4.display();
  //mango5.display();
  ground.display();
  image(boy, 100, 480, 100, 250);

  image(tree, 375,  230, 400, 450);
  
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === 32) {
		Maatter.Body.setPosition(stoneObj.body, {x:235, y:420})
		launcherObject.attach(stoneObj.body);
	}
}


function detectcollision(Lstone, Lmango) {
	mangoBodyPosition = lmango.body.position
	stoneBodyPosition = lstone.body.position

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
		if(distance<=lmango.r+lstone.r)
		{
			Matter.Body.setStatic(lmango.body, false);
		}

}


