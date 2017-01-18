var sketchProc = function(processingInstance) {

	with(processingInstance) {

		size(500, 500);

		frameRate(30);
		// Write code of program, here!!  

		var Walker = function() {
			this.x = width / 2;
			this.y = height / 2;
		};

		Walker.prototype.display = function() {
			stroke(0, 0, 0);
			ellipse(this.x, this.y,30,30);
		};

		// Randomly move up, down, left, right, or stay in one place
		Walker.prototype.walk = function() {
			var choice = floor(random(4));
			if (choice === 0) {
				this.x++;
			} else if (choice === 1) {
				this.x--;
			} else if (choice === 2) {
				this.y++;
			} else {
				this.y--;
			}
		};

		var w = new Walker();

		var draw = function() {
			w.walk();
			w.display();
		};
//End Sketch Processing
	}
}

// Get the canvas that Processing-js will use

var canvas = document.getElementById("mycanvas");

// Pass the function sketchProc (defined in myCode.js) to Processing's constructor.

var processingInstance = new Processing(canvas, sketchProc);