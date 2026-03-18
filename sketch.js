let song;
let visualColor = ("white"); // Default to white
let input;
let amplitude;  

function setup() {
  createCanvas(1920, 1080);
  input = createFileInput(handleFile);
  textSize(20);

  input.position(10, 50);
  amplitude = new p5.Amplitude();
}

function handleFile(file) {  
  song = loadSound(file.data, () => {
      song.play();
    });
  }

function keyPressed() {
  if (key === '1') {
    visualColor = "red"; 
  } else if (key === '2') {
    visualColor = "orange"; 
  } else if (key === '3') {
    visualColor = "yellow"; 
  } else if (key === '4') {
    visualColor = "lightGreen"; 
  } else if (key === '5') {
    visualColor = "lime"; 
  } else if (key === '6') {
    visualColor = "cyan"; 
  } else if (key === '7') {
    visualColor = "skyblue";
  } else if (key === '8') {
    visualColor = "magenta"; 
  } else if (key === '9') {
    visualColor = "pink"; 
  } else if (key === '0') {
    visualColor = "white"; 
  } 
}

function draw() {
  background(0);
  fill(255);
  text("Upload an audio file to start the visualizer", 10, 30);
  text("Use number keys to change color", 10, 100);

  fill(visualColor);
  let vol = amplitude.getLevel();

  ellipse(960, 540, 960*(vol*2), vol * 540);
}

