

function setup(){
	canvas = createCanvas(800, 400);
	background(0);
}

function draw() {
	background(0);
	for (var  i = 0; i < 10; i ++){
		ellipse(random(width), random(height), 5, 5)
	}
}