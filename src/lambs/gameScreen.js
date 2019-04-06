// let house; 

function setup(){
  createCanvas(1000,600);
}

function draw() {
  background("64", "132", "64");
  // Load assets
  // house = loadImage('assets/house.jpg');
  // Draw
  drawRiver();
  drawHouses();
  drawCoalMine();
  drawWindFarmLocation();
}

function drawRiver(){
  // fill("0", "0", "200");
  stroke(0, 0, 200);
  noFill();
  bezier(30, 80, 600, 250, 400, 80, 800, 100);
  bezier(25, 75, 595, 245, 395, 75, 795, 95);
}

function drawHouses(){
  // image(house, 0,0);
  // image(house, 0, 0, house.width, house.height);
  fill(134, 134, 134);
  noStroke();
  // v1
  square(80, 150, 50);
  square(80, 225, 50);
  square(80, 300, 50);
  square(160, 150, 50);
  square(160, 225, 50);
  square(160, 300, 50);
  // v2
  square(600, 500, 50);
  square(700, 500, 50);
  square(800, 500, 50);
  square(600, 400, 50);
  square(700, 400, 50);
  square(800, 400, 50);
}

function drawCoalMine(){
  stroke(0,0,0);
  fill(0,0,0);
  rect(300, 300, 200, 100);
}

function drawWindFarmLocation(){
  stroke(0, 0, 0);
  fill(255, 253, 165);
  square(250, 20, 50);
  square(300, 20, 50);
  square(350, 20, 50);
  square(400, 20, 50);
}