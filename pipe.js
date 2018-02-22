function Pipe() {
	this.x = width;
	this.w = 90;
	this.gapSize = 150;
	this.top = random(height - 100);
	this.bottom = (height - this.top) - this.gapSize;
	this.velocity = 3;
	
	this.show = function() {
		fill(100, 200, 50);
		rect(this.x, 0, this.w, this.top);
		rect(this.x - 5, this.top, this.w + 10, -60);
		rect(this.x, height-this.bottom, this.w, this.bottom);
		rect(this.x - 5, height-this.bottom, this.w + 10, 60);
	}
	
	this.offScreen = function() {
		if (this.x < 0 - (this.w + 5)) {
			return true;
		}
	}
	
	this.update = function() {
		this.x -= this.velocity;
	}
	
	this.hit = function(bird) {
		if (bird.y < this.top || bird.y > height - this.bottom) {
			if (bird.x > this.x && bird.x < this.x + this.w) {
				return true;
			}
		}
	}
}