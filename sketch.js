let song;

function preload() {
  soundFormats('mp3', 'ogg');
  song = loadSound('/zara larsson hot and sexy (Rahul.mp3 Remix).mp3');
}

function setup() {
  createCanvas(1920, 1080);
  amplitude = new p5.Amplitude();
  song.play();
}

function draw() {
  background(0);
  fill("pink");
  let vol = amplitude.getLevel();
  ellipse(960, 540, 960*(vol*2), vol * 540);
}