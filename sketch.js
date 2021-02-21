
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;
var rod3;
var bob1,bob2,bob3,bob4,bob5;
var ch1,ch2,ch3,ch4,ch5;
function preload(){}
function setup() {
 createCanvas(1600, 700);

 engine = Engine.create();
 world = engine.world;
 rod3=new Rod(700,10,300,20);
 bob1=new Bob(600,400,50);
 bob2=new Bob(650,400,50);
 bob3=new Bob(700,400,50);
 bob4=new Bob(750,400,50);
 bob5=new Bob(800,400,50);
 ch1=new Chain(bob1.body,{x:600,y:10});
 ch2=new Chain(bob2.body,{x:650,y:10});
 ch3=new Chain(bob3.body,{x:700,y:10});
 ch4=new Chain(bob4.body,{x:750,y:10});
 ch5=new Chain(bob5.body,{x:800,y:10});
 Engine.run(engine);
}
function draw() {
 rectMode(CENTER);
 background(0);
 rod3.display();
 bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();
 ch1.display();
 ch2.display();
 ch3.display();
 ch4.display();
 ch5.display();
 drawSprites();
 keyPressed();
}
function keyPressed(){
    if (keyCode === LEFT_ARROW) {
 Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-5,y:-2.5});
 
}
}


