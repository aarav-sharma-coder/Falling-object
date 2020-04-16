var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;
 
var engine;
var world;
var boxes = [];
 
var ground;
var gSlider;
 
 
function setup() {
    createCanvas(400, 400);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);
 
    gSlider = createSlider(0, 100, 50);
    gSlider.position(40, 365);
    gSlider.input = map(engine.world.gravity, gSlider.min, gSlider.max, 0, 1);
 
    var options = {
        isStatic: true,
        density:0.2
    }
    ground = Bodies.rectangle(200,350, 1000, 30, options);
    World.add(world, ground);
}
 
function mousePressed() {
    if (mouseY < 350) {
        boxes.push(new Box(mouseX, mouseY, random(10, 100), random(10, 90)));
    }
}
 
function draw() {
    background("black");
    var fVal = gSlider.value();
 
    for (var num = 0; num < boxes.length; num++) {
        boxes[num].show();
    }
    noStroke();
    fill("ORANGE");
    strokeWeight(0);
    rectMode(CENTER);
    rect(ground.position.x, ground.position.y, 1000, 30);
    fill("Blue");

    textSize(15);
    text("Gravity " + fVal, 180, 381);
}
 
function Box(x, y, w, h, options) {
    var options = {
        friction: 0.5,
        restitution: 0.5,
    }
 
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(world, this.body);
 
    this.show = function () {
        var pos = this.body.position;
        var angle = this.body.angle;
 
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(2);
        stroke(255);
        fill("red");
        rect(0, 0, this.w, this.h);
        pop();
    }
}