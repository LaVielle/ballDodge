
var playerBall;
var balls = [];

var acceleration = 1;

function setup(){
	canvas = createCanvas(700, 500);
	canvas.parent('canvas-holder');
	background(0);

	playerBall = new Ball(width/2, height - 50, 25, 0);

  	for (var i = 0; i < 20; i++) {
	    var x = random(0,width);
	    var y = random(-height,0);
	    balls[i] = new Ball(x, y, 16, 1);
  	}
}

function draw() {
	background(0);

	playerBall.pos.x = mouseX;

	if (playerBall.pos.x <= 0){
		playerBall.pos.x = 0;
	}
	else if (playerBall.pos.x >= width){
		playerBall.pos.x = width;
	}
	else{
		playerBall.pos.x = mouseX;
	}
	
	playerBall.show();
	playerBall.update();


	for (var i = balls.length-1; i >=0; i--) {

		if (balls[i].pos.y > height + balls[i].r){
			balls[i].pos.x = random(width);
			balls[i].pos.y = random(-height, -height/2);
			console.log(balls[i] + " passed");
			balls[i].accel +=1;
		}

		balls[i].show();
		balls[i].update();

		if(playerBall.eats(balls[i])){
			balls.splice(i,1);
			console.log("checked");
		}
	}


}

