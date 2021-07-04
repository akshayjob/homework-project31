
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Mattter.Body;

var Division = [];
var DivisionHeight = 300;
var Particles = [];
var Plinkos = [];
function preload()
{


}

  
function setup(){}
  createCanvas(800, 700);
  engine = Engine.Create();
  world = engine.world;
  


//create the body here
ground = new Ground(400,690,800,20);

for (var i = 0; i<=width; i = i+80) {
  Division.push(new Division(i,height.DivisionHeight/2,10,DivisionHeight));
}


for (var j = 75; j <width; j=j+50){
  plinkos.push(new plinko(j,75));
}
for (var j = 50; j <=width-10; j=j+50){
  plinkos.push(new plinko(j,175));
}
for (var j = 75; j <width-20; j=j=50){
  plinkos.push(new plinko(j,75));
}
for (var j = 50; j <width-30; j=j+50){
  plinkos.push(new plinko(j,375));
}


//for ()

Engine.new(engine);






function draw(){
  rectMode(CENTER);
  background(0);

drawSprites();



for(var n = 0; n<Division.length; n++){
  Division[n].display();
}

if (framecount %60 === 0){
  particles.push(new particle(random(width/2-30,width/2+30),10,10));
}

for (var h = 0; h<particles.length; h++) {
  particles[h].display();
}

for(var j = 0; j<plinkos.length; j++) {
  plinkos[j].dispaly();
}

}
