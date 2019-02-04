// Mimi Yin
// https://github.com/mimiyin/collective-play-s19/tree/master/00_helloworld/02_helloworld-sockets
// Allison Parrish
// https://editor.p5js.org/allison.parrish/sketches/SJm1XHiTm


// Open and connect socket
let socket = io();
// Declare a variable to hold an empty string
let content = "";

function setup(){
  createCanvas(windowWidth, windowHeight);
  background(220);

  // Listen for confirmation of connection
  socket.on('connect', function() {
    console.log("Connected");
  });

  // Receive message from server
  socket.on('data', drawContent);
}

function keyTyped() {
  // Send mouse position
  socket.emit('data', content);

  // Draw yourself? or Wait for server?
  // fill(0);
  // ellipse(mouseX, mouseY 10, 10);
}


// Callback to draw contents when new contents is received
function drawContent() {
  textSize(24);
  text(content, 100, 100);
}
