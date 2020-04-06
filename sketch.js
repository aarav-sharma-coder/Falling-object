
// CREATE GLOBAL VARIABLES
// For Engine, World, Bodies and any other that you have in mind to make your coding life easier.
// remember to create an array of boxes.
var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;
 
var engine;
var world;
var meteorite = [];
 
var ground;
var gSlider;
 
function setup() {
    createCanvas(400, 400);

    // Create an instance of Engine, World
    engine = Engine.create();
    world = engine.world;
 engine.world.gravity.y=5;
    // A slider is already created for you here. This slider will dictate the gravity of the world
    gSlider = createSlider(0, 100, 50);
    gSlider.position(40, 365);
    gSlider.input = map(engine.world.gravity, gSlider.min, gSlider.max, 0, 1);
 
    // Create a ground rectangle that would hold all the boxes and add it to the world.
ground = new Ground(200,350,600,30);

}
 
function mousePressed() {
    if (mouseIsPressed) {
    // Every time a mouse press occures create a new box.
    meteorite = new Meteorite(mouseX,mouseY,random(35,90));
    meteorite.display();
}
}
function draw() {
    // Draw all the elements including the slider that 

    background("Black");
    // This is the value of your gravity. You can optionally show it to the viewer.
    
 ground.display();

 

 mousePressed();
 
    // Use a for loop to show all the boxes
    for(var i=10; i > 0;i++){
        meteorite.display();
    }
    var fVal = gSlider.value();
}
 

// You can either create a file for the class Box or build a simple function that creates one box at a time.
// I have gone for the second option.
