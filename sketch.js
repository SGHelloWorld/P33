const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

 
var particles = [];
var plinkos = [];
var divisions =[];
var ground;
var divisionHeight=300;
var score =0;
var particle;
var turn=0;
var gameState="play";
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
 

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    
    ground = new Ground(width/2,height,width,20);

    Engine.run(engine);
}
 


function draw() {
  background("black");
  textSize(20)
  text("100",100,760);
  text("100",25,760);
  text("100",175,760);
  text("100",250,760);
  text("200",325,760);
  text("200",420,760);
  text("200",505,760);
  text("100",570,760);
  text("100",655,760);
  text("100",740,760);
  text("100",795,760);
  
  text("Score : "+score,100,100);
  if(gameState=="end")
  {textSize(50);
    text("GameOver",400,400);
  }

  //Engine.update(engine);
 ground.display();
 if(particle!=null)
 {
  particle.display();
  if(particle.body.position.y>779)
  {
    console.log('particle');
   if(particle.body.position.x<300)
   {
    score=score+100;
    console.log('100');
    particle=null;
   }
   if(particle!=null)
   {
   if(particle.body.position.x>300&&particle.body.position.x<600)
   {
    score=score+200;
    particle=null;
   }
  }
  if(particle!=null)
  {
   if(particle.body.position.x>600&&particle.body.position.x<900)
   {
    score=score+100;
    particle=null;
   }
  }
  }
 }
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }

   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   if(turn==5)
   {
     gameState="end";
   }

   //drawSprites();
}

function mousePressed()
{
  if(gameState!=="end")
  {
    turn++;
    particle=new Particle(mouseX,10,10,10);
  }


}