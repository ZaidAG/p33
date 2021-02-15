const Engine= Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var particle;
var particles=[];
var plinkos=[];
var divisions=[];
var engine,world
var divisionHeight=300;
var score = 0;
var turn = 0;
function setup() {
  createCanvas(800,800);
  engine=Engine.create();
  world=engine.world;
  ground=new Ground(width/2,height,width,40);
  for(var k=0;k<=width;k=k+80){
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight))
  }
  for(var j=40;j<=width;j=j+50){
    plinkos.push(new Plinko(j,75))
  }
  for(var j=15;j<=width-10;j=j+50){
    plinkos.push(new Plinko(j,175))
  }
  for(var j=40;j<=width;j=j+50){
    plinkos.push(new Plinko(j,275))
  }
  for(var j=15;j<=width-10;j=j+50){
    plinkos.push(new Plinko(j,375))
  }
}
function draw() {
  background(0); 
  Engine.update(engine);
  ground.display();
  textSize(30);
  text("Score:"+score,20,40)
  text("500",5,760);
  text("100",85,760);
  text("300",170,760);
  text("500",255,760);
  text("600",340,760);
  text("800",425,760);
  text("700",500,760);
  text("100",585,760);
  text("200",645,760);
  text("100",725,760);
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));
  }
for(var k=0;k<divisions.length;k++){
  divisions[k].display();
}
for(var j=0;j<plinkos.length;j++){
  plinkos[j].display();
}
for(var i=0;i<particles.length;i++){
  particles[i].display();
}
}
function mousePressed(){

}