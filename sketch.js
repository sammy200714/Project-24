
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var rightSide, leftSide, bottomSide;
var ground;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(50,350,10);

	bottomSide = new DustBin(415, 650, 200, 20);
    leftSide = new DustBin(330, 620, 20, 100);
	rightSide = new Dustbin(500, 620, 20, 100);
	
	ground = new Ground(width/2, height-10, width, 20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  text(mouseX + "," + mouseY, mouseX, mouseY);

  paper.present();

  bottomSide.present();
  rightSide.present();
  leftSide.present();

  drawSprites();
 
}



