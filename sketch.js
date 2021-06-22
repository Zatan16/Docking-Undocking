var bg;
var sleep, brush, gym, eat, move, bath;
var astronaut;
var edges;

function preload() {
  bg = loadImage("images/iss.png");
  sleep = loadAnimation("images/sleep.png");
  brush = loadAnimation("images/brush.png");
  gym = loadAnimation("images/gym1.png","images/gym1.png",  "images/gym2.png", "images/gym2.png");
  eat = loadAnimation("images/eat1.png", "images/eat1.png", "images/eat2.png", "images/eat2.png");
  move = loadAnimation("images/move.png", "images/move.png", "images/move1.png", "images/move1.png");
  bath = loadAnimation("images/bath1.png", "images/bath1.png", "images/bath2.png", "images/bath2.png");
}

function setup() {
  createCanvas(800,400);

  astronaut = createSprite(300, 230);
  astronaut.addAnimation("sleeping", sleep);
  astronaut.scale = 0.1;
}

function draw() {
  background(bg);
  drawSprites();

  textSize(20);
  fill(255);
  text("Instructions", 20, 35);
  textSize(15);
  text("Up Arrow = Brushing", 20, 55);
  text("Down Arrow = Gymming", 20, 70);
  text("Left Arrow = Eating", 20, 85);
  text("Right Arrow = Bathing", 20, 100);
  text("M/m key = Moving", 20, 115);

  edges = createEdgeSprites();
  astronaut.bounceOff(edges);

  if (keyDown(UP_ARROW)) {
    astronaut.addAnimation("brushing", brush);
    astronaut.changeAnimation("brushing");
    reset();
  }
  if(keyDown(DOWN_ARROW)) {
    astronaut.addAnimation("gymming", gym);
    astronaut.changeAnimation("gymming");
    reset();
  }
  if(keyDown(LEFT_ARROW)) {
    astronaut.addAnimation("eating", eat);
    astronaut.changeAnimation("eating");
    reset();
  }
  if(keyDown(RIGHT_ARROW)) {
    astronaut.addAnimation("bathing", bath);
    astronaut.changeAnimation("bathing");
    reset();
  }
  if(keyWentDown("m") || keyWentDown("M")) {
    astronaut.addAnimation("moving", move);
    astronaut.changeAnimation("moving");
    astronaut.velocityX = Math.round(random(-5, 5));
    astronaut.velocityY = Math.round(random(-5, 5));
  }
}

function reset() {
  astronaut.x = 400;
  astronaut.y = 230;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;
}

// up-brush down-gym right-bath left-eat m-move