var bgImg,airplaneImg,asteroidImg;
var aeroplane,plane;

function preload() {
  bgImg = loadImage('images/bg.png');
  airplaneImg = loadImage('images/shooter.png');
  asteroidImg = loadImage('images/asteroid.png');
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  aeroplane = new Airplane();
}

function draw() {
  background(bgImg);

  aeroplane.display();
  drawSprites();
}

function keyPressed() {
  if(keyCode == UP_ARROW) {
    plane.y -= 5;
  }

  if(keyCode == DOWN_ARROW) {
    plane.y += 5;
  }
}