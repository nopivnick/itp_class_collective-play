// Mimi Yin
// https://github.com/mimiyin/collective-play-s19/tree/master/00_helloworld/02_helloworld-sockets
// Allison Parrish
// https://editor.p5js.org/allison.parrish/sketches/SJ3webh0m

// Open and connect socket
let socket = io();
// Declare a variabe to store the mic level
let mic;

function setup(){
  createCanvas(windowWidth, windowHeight);
  background(255);
  mic = new p5.AudioIn();
  mic.start();

  // Listen for confirmation of connection
  socket.on('connect', function() {
    print("Connected");
  });

  // Receive message from server
  socket.on('data', drawLevel);
}

function micCheck() {
  // Send mic level
  socket.emit('data', mic.getLevel();
  print("one two, one two");
  // Change text size yourself? or Wait for server?
  // fill(0);
  // ellipse(mouseX, mouseY 10, 10);
}

// Callback to draw text when new mic level is received
function drawLevel() {
  textAlign(CENTER, CENTER);
  textSize(10 + mic.getLevel() * 5000);
  print(mic.getLevel());
  text("sound", windowWidth / 2, windowHeight / 2);
}
