function Bird() {
	this.y = height/2;
	this.x = 30;
	this.size = 30;
	
	this.gravity = 0.5;
	this.velocity = 0;
	
	this.show = function() {
		fill(255, 240, 130)
		ellipseMode(CENTER);
		ellipse(this.x, this.y, this.size);
	}
	
	this.flap = function() {
		if (this.velocity > 0) {
			this.velocity = -7;
		} else {
			this.velocity -= 6;
		}
	}
	
	this.update = function() {
		this.velocity += this.gravity;
		this.y += this.velocity;
		
		if (this.velocity > 12) {
			this.velocity *= 0.9
		}
		
		if (this.y < 0) {
			this.y = 0;
			this.velocity = 0;
		}
		
		if (this.y > height) {
			this.y = height;
			this.velocity = 0;
		}
	}
	
}