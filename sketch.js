var bird;
var pipes = [];
var score = 0;
var gameOver = false;

function setup() {
	createCanvas(windowWidth, windowHeight);
	bird = new Bird;
	pipes.push(new Pipe());
	textAlign(CENTER);
	textFont('Georgia');
	stroke(0);
}

function draw() {
	background(144, 195, 212);
	if (!gameOver) {
		if (frameCount % 100 == 0) {
			pipes.push(new Pipe());
		}
		for (var i = pipes.length - 1; i >= 0; i--) {
			pipes[i].show();
			pipes[i].update();
			if (pipes[i].offScreen()) {
				pipes.splice(i, 1);
				score++;
			}
			if (pipes[i].hit(bird)) {
				console.log("HIT");
				gameOver = true;
			}
		}
		bird.show();
		bird.update();
		textSize(50);
		fill(255, 240, 130);
		text("Score: " + score, width/2, 50);
	}
	else {
		for (var i = 0; i < pipes.length; i++) {
			pipes[i].velocity = 0;
			pipes[i].show();
		}
		textSize(width*0.16);
		fill(255, 240, 130);
		text("GAME OVER", width/2, height/2);
		textSize(width*0.09);
		text("Score: " + score, width/2, height*0.75);
		text("Tap to reset", width/2, height*0.625);
	}
}

function resetGame() {
	gameOver = false;
	score = 0;
	pipes = [];
}

function keyPressed() {
	if (!gameOver) {
		if (key == ' ') {
			bird.flap();
		}
	}
	else {
		resetGame();
	}
}

function touchStarted() {
	if (!gameOver) {
		bird.flap();
	} else {
		resetGame();
	}
}