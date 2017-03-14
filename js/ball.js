
function Ball(x, y, r){
  this.pos = createVector(x, y);
    this.r = r;
    this.vel = createVector(0,0);
    this.accel = acceleration;

    this.update = function() {
      this.pos.y += this.accel;
    }

    this.show = function() {
      fill(255);
      ellipse(this.pos.x, this.pos.y, this.r*2, this.r*2);
    }

}

function setup(){
  canvas = createCanvas(700, 500);
  canvas.parent('canvas-holder');
  background(0);

    for (var i = 0; i < 20; i++) {
      var x = random(0,width);
      var y = random(-height,0);
      balls[i] = new ball2(x, y, 16);
    }
}