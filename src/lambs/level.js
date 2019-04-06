function setup(){
  createCanvas(1000,600);
  background("100", "100", "100")

}


let value = 0
function draw() {
  textSize(24);
  text('Level', 130, 30);
  textSize(32);

  fill(value);
  square(30, 30, 55)
  square(30, 130, 55)
  square(30, 230, 55)
  square(230, 30, 55)
  square(230, 130, 55)
  square(230, 230, 55)
  square(130, 30, 55)
  square(130, 130, 55)
  square(130, 230, 55)
  fill(255, 0, 0);
  text('1', 50, 70);
  text('4', 50, 170);
  text('7', 50, 270);
  text('2', 150, 70);
  text('5', 150, 170);
  text('8', 150, 270);
  text('3', 250, 70);
  text('6', 250, 170);
  text('9', 250, 270);  
  
}

function mouseClicked() {
  if (value === 0) {
    value = 255;
  } else {
    value = 0;
  }
}
