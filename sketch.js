
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload() {

}

function setup() {
  createCanvas(800, 700);

  engine = Engine.create();
  world = engine.world;
  top = new Ground(400, 160, 400,10);

  bob1 = new Bob(100,200,10,10);
  chain1=new Slingshot(bob1, {x:100, y:160});

  bob2=new Bob(120,200,10,10);
  chain2=new Slingshot(bob2,{x:120, y:160});

  bob3=new Bob(140,200,10,10);
  chain3=new Slingshot(bob3,{x:140,y:160});

  bob4=new Bob(160,200,10,10);
  chain=new Slingshot(bob4,{x:160,y:160});

  //Engine.run(engine);
}


function draw() {

  Engine.update(engine);
  background(220);
  top.display();
  chain1.display();
  bob1.display();

  chain2.display();
  bob2.display();

  chain3.display();
  bob3.display();

  chain4.display();
  bob4.display();
}

function keyPressed(){
  if(keyCode===LEFT_ARROW){
      Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-85,y:50});
  }
}