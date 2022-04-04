const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rocha;
var borracha;
var ferro;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,20,1200,20)
    hammer = new Hammer(10,100);
    ferro = new Ferro(300,350,50,50);
    rocha = new Rocha(700,320,100,100);
    borracha = new Borracha(900,450,70);
  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rocha.display();
    borracha.display();
    ferro.display();
 
}



























