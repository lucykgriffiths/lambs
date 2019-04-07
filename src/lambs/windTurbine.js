let background_image;
let fifty,sixty,seventy,eighty,ninety,hundred;
let start_time;

let turbine, motor, steel, screw, tool, wire, money, home, info

//Home screen

function setup(){
  createCanvas(1250,700);
  background_image = loadImage('assets/imabigfan.png');

  fifty = loadImage('assets/timebar/50.png');
  sixty = loadImage('assets/timebar/60.png');
  seventy = loadImage('assets/timebar/70.png');
  eighty = loadImage('assets/timebar/80.png');
  ninety = loadImage('assets/timebar/90.png');
  hundred = loadImage('assets/timebar/100.png');

  turbine = loadImage('assets/icons/morebladesthanbladerunner.png');
  motor = loadImage('assets/icons/motor.png');
  steel = loadImage('assets/icons/steelyboipt2.png');
  screw = loadImage('assets/icons/screwyou.png');
  tool = loadImage('assets/icons/youreatool.png');
  wire = loadImage('assets/icons/wiresidk.png');

  money = loadImage('assets/icons/baredollar.png');

  home = loadImage('assets/icons/houseeee.png');
  info = loadImage('assets/icons/information.png');

  start_time = Date.now();
}

function draw() {
  image(background_image, 0, 0, background_image.width / 1.5, background_image.height / 1.5);
  drawIcons();
  drawTimebar();
}

function drawIcons(){
  image(turbine, 200, 585, turbine.width/2.2, turbine.height/2.2);
  image(motor, 350, 585, turbine.width/2.2, turbine.height/2.2);
  image(steel, 500, 585, turbine.width/2.2, turbine.height/2.2);
  image(screw, 650, 585, turbine.width/2.2, turbine.height/2.2);
  image(tool, 800, 585, turbine.width/2.2, turbine.height/2.2);
  image(wire, 950, 585, turbine.width/2.2, turbine.height/2.2);

  
}

function drawTimebar(){
  var time_diff = Date.now() - start_time;
  switch(true){
    case time_diff < 5000:
      image(hundred, 10, 10, fifty.width/1.6, fifty.height/1.6);
      break;
    case time_diff < 10000:
      image(ninety, 10, 10, fifty.width/1.6, fifty.height/1.6);
      break;
    case time_diff < 15000:
      image(eighty, 10, 10, fifty.width/1.6, fifty.height/1.6);
      break;
    case time_diff < 20000:
      image(seventy, 10, 10, fifty.width/1.6, fifty.height/1.6);
      break;
    case time_diff < 25000:
      image(sixty, 10, 10, fifty.width/1.6, fifty.height/1.6);
      break;
    default:
      image(fifty, 10, 10, fifty.width/1.6, fifty.height/1.6);
  }
}
