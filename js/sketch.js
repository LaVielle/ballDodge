
var playerBall;
var balls = [];

var acceleration = 1;

function setup(){
	canvas = createCanvas(700, 500);
	canvas.parent('canvas-holder');
	background(0);

  	for (var i = 0; i < 20; i++) {
	    var x = random(0,width);
	    var y = random(-height,0);
	    balls[i] = new Ball(x, y, 16);
  	}
}

function draw() {
	background(0);

	playerBall = ellipse(mouseX, height - 50, 25, 25);

	for (var i = balls.length-1; i >=0; i--) {
		if (balls[i].pos.y > height + balls[i].r){
			balls[i].pos.y = random(-height, -height/2);
			console.log(balls[i] + " passed");
			balls[i].accel +=1;
		}
		balls[i].show();
		balls[i].update();
	}

}