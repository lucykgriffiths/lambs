var instructions;

//Home screen

function setup(){
  createCanvas(1250,700);
  instructions = loadImage('assets/instructions.png');
}

function draw() {
  image(instructions, 0, 0, instructions.width / 1.6, instructions.height / 1.6);

  if(mouseIsPressed){
    if(mouseX >= 1085 && mouseX <=1240 && mouseY >= 640 && mouseY <= 695){
      window.location.assign("index.html");
    }
  }
}
