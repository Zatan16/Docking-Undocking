var bgImg;
var sleep, brush, gym1, gym2, eat, drink, move, bath;
var astronaut;

function preload() {
  bgImg = loadImage("images/iss.png");
  sleep = loadAnimation("images/sleep.png");
  brush = loadAnimation("images/brush.png");
  gym1 = loadAnimation("images/gym1.png", "images/gym2.png");
  gym2 = loadAnimation("images/gym11.png", "images/gym12.png");
  eat = loadAnimation("images/eat1.png", "images/eat2.png");
  drink = loadAnimation("images/drink1.png", "images/drink2.png");
  move = loadAnimation("images/move.png", "images/move1.png");
  bath = loadAnimation("images/bath1.png", "images/bath2.png");
}

function setup() {
  createCanvas(800,400);
  
  bg = createSprite(400, 200, width, height);
  bg.addImage(bgImg);
  bg.scale = 0.2;

  astronaut = createSprite(400, 230);
  astronaut.addAnimation(sleep);
  astronaut.scale = 0.1;
}

function draw() {
  background(255);

  if (keyDown("q") || keyDown("Q")) {
    astronaut.addAnimation(sleep);
    reset();
  }
  if(keyDown("w") || keyDown("W")) {
    astronaut.addAnimation(brush);
    reset();
  }
  if(keyDown("e") || keyDown("E")) {
    astronaut.addAnimation(move);
    reset();
  }
  if(keyDown("r") || keyDown("R")) {
    astronaut.addAnimation(gym1);
    reset();
  }
  if(keyDown("t") || keyDown("T")) {
    astronaut.addAnimation(gym2);
    reset();
  }
  if(keyDown("y") || keyDown("Y")) {
    astronaut.addAnimation(eat);
    reset();
  }
  if(keyDown("u") || keyDown("U")) {
    astronaut.addAnimation(drink);
    reset();
  }
  if(keyDown("i") || keyDown("I")) {
    astronaut.addAnimation(bath);
    reset();
  }
  if(keyWentDown("m") || keyWentDown("M")) {
    astronaut.velocityX = Math.round(random(-5, 5));
    astronaut.velocityY = Math.round(random(-5, 5));
  }

  drawSprites();
}

function reset() {
  astronaut.x = 400;
  astronaut.y = 230;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;
}

// up-brush down-gym right-bath left-eat m-move