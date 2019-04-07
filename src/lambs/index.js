var home_image;
var logo_image;
var home_start;
var instructions;

//Home screen

function setup(){
  createCanvas(1250,700);
  home_image = loadImage('assets/home_image.png');
  logo_image = loadImage('assets/karma_logo.png');
  instructions = loadImage('assets/instructions_logo.png');
  home_start = loadImage("assets/home_start.png");
}

function draw() {
  image(home_image, 0, 0, home_image.width / 1.5, home_image.height / 1.5);
  image(logo_image, 70, 480);
  image(instructions, 120, 560)
  image(home_start, 120, 620);

  if(mouseIsPressed){
    if (mouseX >= 120) {
      if (mouseX <= 120+(home_start.width/1.5) &&
        mouseY >=620 && mouseY <= 620 + (home_start.height/1.5)){
        window.location.assign("level.html");
      } else if (mouseX <= 120+(instructions.width/1.5) &&
        mouseY >=560 && mouseY <= 560 + (instructions.height/1.5)){
        window.location.assign("instructions.html");
      }
    }
  }
}
