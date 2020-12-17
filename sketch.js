const Engine = Matter.Engine;
const World = Matter.World;
const Bodies= Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world;

var yeet, score = 0;

function setup(){
engine = Engine.create();
world = engine.world;

var canvas = createCanvas(1000,500);
boi = new Yeet(100,200);
nope = new Stop(boi.body,{x:100,y:200})
ground1 = new Ground(500,490,width,50);
ground2 = new Ground(500,10,width,50)
base1 = new Ground(450,450,150,10);
//bottom of base 1
b1 = new Box(400,421,20,40);
b2 = new Box(420,420,20,40);
b3 = new Box(440,421,20,40);
b4 = new Box(460,420,20,40);
b5 = new Box(480,421,20,40);
b6 = new Box(500,421,20,40);
//middle of base 1
b7 = new Box(420,400,20,40);//b2
b8 = new Box(440,401,20,40);//b3
b9 = new Box(460,400,20,40);//b4
b10 = new Box(480,401,20,40);//b5
b11 = new Box(440,361,20,40);//b3
b12 = new Box(460,360,20,40);//b4
//top of base 1
b13 = new Box(450,320.5,20,40);//(b11 and b12)/2


base2 = new Ground(740,350,150,10);
//bottom of base 2
b14 = new Box(690,321,20,40);
b15 = new Box(710,320,20,40);
b16 = new Box(730,321,20,40);
b17 = new Box(750,320,20,40);
b18 = new Box(770,321,20,40);
b19 = new Box(790,321,20,40);
//middle of base 2
b20 = new Box(710,280,20,40);//b15
b21 = new Box(730,281,20,40);//b16
b22 = new Box(750,280,20,40);//b17
b23 = new Box(770,281,20,40);//b18
b24 = new Box(730,241,20,40);//b21
b25 = new Box(750,240,20,40);//b22
//top of base 2
b26 = new Box(740,200,20,40);//(b24 and b25)/2


base3 = new Ground(400,200,150,10);
//bottom of base 3
b27 = new Box(350,181,20,40);
b28 = new Box(370,180,20,40);
b29 = new Box(390,181,20,40);
b30 = new Box(410,180,20,40);
b31 = new Box(430,181,20,40);
b32 = new Box(450,181,20,40);
//middle of base 3
b33 = new Box(370,140,20,40);//b28
b34 = new Box(390,141,20,40);//b29
b35 = new Box(410,140,20,40);//b30
b36 = new Box(430,141,20,40);//b31
b37 = new Box(390,101,20,40);//b34
b38 = new Box(410,100,20,40);//b35
//top of base 3
b39 = new Box(400,60,20,40);//(b37 and b38)/2
}

function draw(){
Engine.update(engine);
background ("blue");
boi.display();
ground1.display();
ground2.display();
base1.display();
base2.display();
base3.display();
fill("lightblue");
b1.display();
b2.display();
b3.display();
b4.display();
b5.display();
b6.display();
b7.display();
b8.display();
b9.display();
b10.display();
b11.display();
b12.display();
b13.display();
fill("darkgreen");
b14.display();
b15.display();
b16.display();
b17.display();
b18.display();
b19.display();
b20.display();
b21.display();
b22.display();
b23.display();
b24.display();
b25.display();
b26.display();
fill("orange");
b27.display();
b28.display();
b29.display();
b30.display();
b31.display();
b32.display();
b33.display();
b34.display();
b35.display();
b36.display();
b37.display();
b38.display();
b39.display();
textSize(30);
fill("green")
text("Destory the blocks by dragging and releasing the hexagon!",10,60);
text("Press space for another try",10,460);
nope.display();
//text("Score: " + score, 100,100);
}

function mouseDragged()
{
  Matter.Body.setPosition(boi.body,{x:mouseX,y:mouseY});
}

function mouseReleased()
{
   nope.yeet();
}

function keyPressed()
{
  if(keyCode===32)
  {
    Matter.Body.setPosition(boi.body,{x:100,y:220});
    nope.attacher(boi.body);
  }
}