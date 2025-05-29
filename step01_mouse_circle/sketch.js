function setup(params) {
    createCanvas(400, 400);
}

function draw(params) {
    background(255);
    fill(100, 150, 255);
    noStroke();
    ellipse(mouseX, mouseY, 50, 50);
}