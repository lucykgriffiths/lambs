var home_image;
var logo_image;
var home_start;

//Home screen

function setup(){
  createCanvas(1250,700);
  home_image = loadImage('assets/home_image.png');
  logo_image = loadImage('assets/karma_logo.png');
  home_start = loadImage("assets/home_start.png");
}

function draw() {
  image(home_image, 0, 0, home_image.width / 1.5, home_image.height / 1.5);
  image(logo_image, 80, 500);
  image(home_start, 90, 580);

  if(mouseIsPressed){
    window.location.assign("level.html");
  }
}
