let song;

function setup() {
  createCanvas(1920, 1080);
  createFileInput(handleFile);
  amplitude = new p5.Amplitude();
}

function handleFile(file) {
    song = loadSound(file.data, () => {
      song.play();
    });
  }

function draw() {
  background(0);

  fill("pink");

  let vol = amplitude.getLevel();

  ellipse(960, 540, 960*(vol*2), vol * 540);
}