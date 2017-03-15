
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
	    var c = Math.floor(random(1,5));
	    balls[i] = new Ball(x, y, 16, 1, c);
  	}
  	console.log(balls);
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
			touched(playerBall,balls[i]);
			balls[i].pos.x = random(width);
			balls[i].pos.y = random(-height, -height/2);
			//balls.splice(i,1);
		}
	}


}

function touched(b1, b2){
	console.log("touched running");
	if(b2.class == 1){
		for (var i = 0; i < balls.length; i++) {
			balls[i].accel += 1;
		}
	}
	else if(b2.class == 2){
		console.log("score -xx");
	}
	else if(b2.class == 3){
		for (var i = 0; i < balls.length-1; i++) {
			if (balls[i].accel <= 1){
				balls[i].accel = 1;
			}
			else {
				balls[i].accel -= 1;
			}
		}
	}
	else if (b2.class == 4){
		console.log("score +xx");
	}
}


