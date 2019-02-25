function setup() {
    
    var canvas = createCanvas(windowWidth/1.5, 200);
    canvas.parent('header-holder');
    background(0, 128, 128);
    noStroke();
    frameRate(10)
}
  
function draw() {
   //background(0);
	fill(0, 128, 128,20);
	rect(0, 0, width, height);
	
	fill(255);
	ellipse(random(width),random(height),20,20);
}

function windowResized() {
    resizeCanvas(windowWidth/1.5, 200);
  }