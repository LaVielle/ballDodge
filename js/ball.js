
function Ball(x, y, r, a, c){
  this.pos = createVector(x, y);
    this.r = r;
    this.vel = createVector(0,0);
    this.accel = a;
    this.class = c;

    this.update = function() {
      this.pos.y += this.accel;
    }

    this.eats = function(other){
    var d = p5.Vector.dist(this.pos, other.pos);
    if( d <= this.r +other.r){
      this.r += other.r*0.1;
      return true;
    }
    return false;
    }

    this.show = function() {
      if (c == 1){
        fill(255,0,0);
      }
      else if (c == 2){
        fill(153,102,51);
      }
      else if (c == 3){
        fill(0,0,255);
      }
      else if (c == 4){
        fill(0,255,0);
      }
      else {
        fill(255);
      }
      ellipse(this.pos.x, this.pos.y, this.r*2, this.r*2);
    }

}


