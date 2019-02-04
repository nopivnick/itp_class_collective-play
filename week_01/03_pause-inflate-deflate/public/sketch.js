// Mimi Yin
// https://github.com/mimiyin/collective-play-s19/tree/master/00_helloworld/02_helloworld-sockets
// Allison Parrish
// https://editor.p5js.org/allison.parrish/sketches/SyZ3f95YQ

// Open and connect socket
let socket = io();
let paused = false;
let ourFrameCount = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Listen for confirmation of connection
  socket.on('connect', function() {
    console.log("Connected");
  });

  // Receive message from server
  socket.on('data', newPause);
}

function mouseClicked() {
  // Send paused state
  socket.emit('data', paused);

  // Change paused state yourself? or Wait for server?
  // fill(0);
  // ellipse(mouseX, mouseY 10, 10);
}

// Callback to change pause state when message saying new paused state is received
function newPause() {
  paused = !paused;
}

// Draw an ellispe that grows and shrinks until mouse is clicked
function draw() {
  background(220);
  ellipse(windowWidth / 2, windowHeight / 2,
    map(sin(ourFrameCount * 0.05), -1, 1, 0, 800));
  // ellipse(mouseX, mouseY, 100);
  if (!paused) {
    ourFrameCount++;
  }
}
