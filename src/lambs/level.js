let level;
let home_image;
let one,two,three,four,five,six,seven,eight,nine;
let lock;

function setup(){
  createCanvas(1250,700);
  home_image = loadImage('assets/home_image.png');
  level = loadImage('assets/level.png');
  one = loadImage('assets/levels/one.png');
  two = loadImage('assets/levels/two.png');
  three = loadImage('assets/levels/three.png');
  four = loadImage('assets/levels/four.png');
  five = loadImage('assets/levels/five.png');
  six = loadImage('assets/levels/six.png');
  seven = loadImage('assets/levels/seven.png');
  eight = loadImage('assets/levels/eight.png');
  nine = loadImage('assets/levels/nine.png');
  lock = loadImage('assets/lockboi.png');
}

function draw() {
  image(home_image, 0, 0, home_image.width / 1.5, home_image.height / 1.5);


  fill(0);
  square(447, 152, 76, 20, 20, 20, 20);
  image(one, 455, 150);

  square(597, 152, 76, 20, 20, 20, 20);
  image(two, 600, 150);
  image(lock, 635, 190, lock.width/2, lock.height/2);

  square(747, 152, 76, 20, 20, 20, 20);
  image(three, 750, 150);
  image(lock, 785, 190, lock.width/2, lock.height/2);

  square(447, 302, 76, 20, 20, 20, 20);
  image(four, 450, 302);
  image(lock, 485, 340, lock.width/2, lock.height/2);

  square(597, 302, 76, 20, 20, 20, 20);
  image(five, 600, 300);
  image(lock, 635, 340, lock.width/2, lock.height/2);

  square(747, 302, 76, 20, 20, 20, 20);
  image(six, 750, 300);
  image(lock, 785, 340, lock.width/2, lock.height/2);

  square(447, 452, 76, 20, 20, 20, 20);
  image(seven, 450,450);
  image(lock, 485, 490, lock.width/2, lock.height/2);

  square(597, 452, 76, 20, 20, 20, 20);
  image(eight, 600, 448);
  image(lock, 635, 490, lock.width/2, lock.height/2);

  square(747, 452, 76, 20, 20, 20, 20);
  image(nine, 750, 450);
  image(lock, 785, 490, lock.width/2, lock.height/2);


  image(level, 580, 20);
  textSize(32);

  if(mouseIsPressed){
    window.location.assign("game.html");
  }
}
