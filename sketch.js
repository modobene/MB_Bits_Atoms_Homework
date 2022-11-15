var data;

function preload() {
  data = loadJSON("future_cities_data.json");
  myFont = loadFont("HelveticaNeueLTCom-Md.ttf");
}

function setup() {
  data = Object.values(data);
  createCanvas(1200, 700);
  background(255);
  textSize(32);
  textFont(myFont);
  fill(252, 210, 153);
  text("annual mean temperature : now", 40, 600);
  fill(254, 80, 0);
  text("annual mean temperature : future", 40, 640);
}

function draw() {
  for (var i = 0; i < data.length; i++) {
    let d = data[i];
    translate(50, 0);
    stroke(0);
    strokeWeight(3);

    push();
    fill(254, 80, 0);
    rect(i * 40 + 10, 10, 50, d.future_Annual_Mean_Temperature * 30);
    pop();

    push();
    fill(252, 210, 153);
    rect(i * 40, 0, 50, d.Annual_Mean_Temperature * 30);
    translate(i * 40, 0);
    rotate(radians(90));
    noStroke();
    textSize(32);
    fill(0);
    text(d.current_city, 10, -15);
    textSize(18);
    text(
      round(d.Annual_Mean_Temperature, 1),
      d.Annual_Mean_Temperature * 30 - 45,
      -18
    );
    fill(255);
    text(
      round(d.future_Annual_Mean_Temperature, 1),
      d.future_Annual_Mean_Temperature * 30 - 35,
      -28
    );
    pop();
  }
}
