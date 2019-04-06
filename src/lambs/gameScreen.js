let house;
let power_plant;
let sad_house;
let happy_coffee;
let sad_coffee;
let happy_market;
let sad_market;


let HOUSES = [];
let MARKETS = [];
let COFFEES = [];
let SADNESS = 300;

function setup(){
  createCanvas(1250,700);

  // Load the images to use
  house = loadImage('assets/buildings/house.png');
  power_plant = loadImage('assets/buildings/coal_power_plant.png');
  sad_house = loadImage('assets/buildings/house_sad.png');
  happy_coffee = loadImage('assets/buildings/coffee-happy.png');
  sad_coffee = loadImage('assets/buildings/coffee-sad.png');
  happy_market = loadImage('assets/buildings/market.png');
  sad_market = loadImage('assets/buildings/market-sad.png');

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
  // Populate shops n shit
  for (i=95; i<= 175; i+=80){
    for (j=525; j<=600; j+=75){
      if(Math.floor(Math.random() * 2) == 1){
        COFFEES.push([i, j]);
      } else {
        MARKETS.push([i, j]);
      }
    }
  }
}

function draw() {
  background("64", "132", "64");
  drawRiver();
  drawHouses();
  drawShops();
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

function drawShops(){
  for(i=0; i<COFFEES.length; i++){
    if(Math.hypot(COFFEES[i][0] - 385, COFFEES[i][1] - 385) <= SADNESS) {
      image(sad_coffee, COFFEES[i][0], COFFEES[i][1], sad_coffee.width/3, sad_coffee.height/3);
    } else {
      image(happy_coffee, COFFEES[i][0], COFFEES[i][1], sad_coffee.width/3, sad_coffee.height/3);
    }
  }
  for(i=0; i<MARKETS.length; i++){
    if(Math.hypot(MARKETS[i][0] - 385, MARKETS[i][1] - 385) <= SADNESS) {
      image(sad_market, MARKETS[i][0], MARKETS[i][1], sad_market.width/3, sad_market.height/3);
    } else {
      image(happy_market, MARKETS[i][0], MARKETS[i][1], sad_market.width/3, sad_market.height/3);
    }
  }
}

function drawWindFarmLocation(){
  stroke(0, 0, 0);
  fill(255, 253, 165);
  square(250, 20, 50);
  square(300, 20, 50);
  square(350, 20, 50);
  square(400, 20, 50);
}
