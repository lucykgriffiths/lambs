let house;
let power_plant;

const HOUSES = [];

function setup(){
  createCanvas(1000,600);
  house = loadImage('assets/house.png');
  power_plant = loadImage('assets/coal_power_plant.png');
  for (i = 80; i <= 160; i+=80) {
    for (j = 150; j<= 300; j+=75) {
      HOUSES.push([i, j]);
    }
  }
  for (i = 600; i <= 800; i+=100) {
    for (j = 400; j<= 500; j+=100) {
      HOUSES.push([i, j]);
    }
  }
  console.log(HOUSES);
}

function draw() {
  background("64", "132", "64");
  drawRiver();
  drawHouses();
  drawCoalMine();
  drawWindFarmLocation();
}

function drawRiver(){
  stroke(0, 0, 200);
  noFill();
  bezier(30, 80, 600, 250, 400, 80, 800, 100);
  bezier(25, 75, 595, 245, 395, 75, 795, 95);
}

function drawHouses(){
  for (i = 0; i < HOUSES.length; i++){
    image(house, HOUSES[i][0], HOUSES[i][1], house.width/5, house.height/5);
  }
}

function drawCoalMine(){
  image(power_plant, 300, 300, power_plant.width/1.5, power_plant.height/1.5);
}

function drawWindFarmLocation(){
  stroke(0, 0, 0);
  fill(255, 253, 165);
  square(250, 20, 50);
  square(300, 20, 50);
  square(350, 20, 50);
  square(400, 20, 50);
}
