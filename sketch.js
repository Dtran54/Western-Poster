var counter = 0;
var a = 0;
var s = 0;
var w = 0;
var r = 0;

function preload() {
  soundFormats('mp3', 'wav');
  sound0 = loadSound('sounds/cylinder.mp3');
  sound1 = loadSound('sounds/revolvercock.wav');
  sound2 = loadSound('sounds/shot.wav');
  sound3 = loadSound('sounds/whistle.wav');
}

function setup() {
  createCanvas(400, 550);
  a = color('#E91A00');
  s = color('#E91A00');
  w = color('#FFFFFF');
  r = color('#1600C9');
}


function draw() {
  background('white');
  let c = color('#E91A00');
  fill(c);
  noStroke();
  rect(20, 20, 360, 250);
  let d = color('#1600C9');
  fill(d);
  noStroke();
  rect(20, 330, 360, 190);
  textSize(54);
  textStyle(BOLD);
  fill(w);
  noStroke();
  text('REDEMPTION', 20, 320);
  textSize(170);
  textStyle(BOLD);
  fill(a);
  noStroke();
  text('RED', 20, 270);
  textSize(80);
  textStyle(BOLD);
  fill(s);
  noStroke();
  text('DEAD', 90, 270);
  textSize(20);
  textStyle(BOLD);
  fill(r);
  noStroke();
  text('A ROCKSTAR GAME', 175, 353);
}

function mouseClicked() {
  counter += 1;
  if (counter === 1) {
    a = color('#000000');
    sound0.play();
  }
  if (counter === 2) {
    s = color('#FFFFFF');
    sound1.play();
  }
  if (counter === 3) {
    w = color('#000000');
    sound2.play();
  }
  if (counter === 4) {
    r = color('#FFFFFF');
    sound3.play();
  } else {
    return false;
  }
}