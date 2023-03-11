function preload() {}

function setup() {
  canvas = createCanvas(640, 480);
  canvas.position(110, 250);
  video = createCapture(VIDEO);
  video.hide();

  tint_color = "";
}

function draw() {
  image(video, 10, 10, 600, 440);
  tint(tint_color);
  fill(0, 0, 255);
  stroke(255, 0, 1);
  circle(30, 30, 60);
  circle(570, 30, 60);
  circle(570, 450, 60);
  circle(30, 450, 60);
  rect(60, 20, 480, 10);
  rect(60, 440, 480, 10);
  rect(20, 60, 10, 360);
  rect(560, 60, 10, 360);
}

function take_snapshot() {
  save("student_name.png");
}

function filter_tint() {
  tint_color = document.getElementById("color_name").value;
}
