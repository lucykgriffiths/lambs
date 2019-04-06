let house;
let power_plant;
let sad_house;

const HOUSES = [];
const SADNESS = 300;

function setup(){
  createCanvas(1250,700);

  // Load the images to use
  house = loadImage('assets/house.png');
  power_plant = loadImage('assets/coal_power_plant.png');
  sad_house = loadImage('assets/house_sad.png');

  // Populate the coordinates of the houses
  for (i = 80; i <= 160; i+=80) {
    for (j = 225; j<= 450; j+=75) {
      HOUSES.push([i, j]);
    }
  }
  for (i = 300; i <= 500; i += 100) {
    HOUSES.push([i, 500]);
  }
  for (i = 600; i <= 800; i+=100) {
    for (j = 400; j<= 500; j+=100) {
      HOUSES.push([i, j]);
    }
  }
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
  for(i=0; i<20; i++){
    bezier(0, 80+i, 600+i, 250+i, 400+i, 80+i, 1250, 100+i);
  }
}

function drawHouses(){
  for (i = 0; i < HOUSES.length; i++){
    if(Math.hypot(HOUSES[i][0] - 385, HOUSES[i][1] - 385) <= SADNESS) {
      image(sad_house, HOUSES[i][0], HOUSES[i][1], house.width/5, house.height/5);
    } else {
      image(house, HOUSES[i][0], HOUSES[i][1], house.width/5, house.height/5);
    }
  }
}

function drawCoalMine(){
  // console.log(power_plant.width/1.5)
  // console.log(power_plant.height/1.5);
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
