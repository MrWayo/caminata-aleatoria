var sketchProc = function(processingInstance) {

	with(processingInstance) {

		size(500, 500);
		frameRate(30);

		var randomPosX = function() {
			return Math.floor(Math.random() * (width - 15)) + 15;
		}
		var randomPosY = function() {
			return Math.floor(Math.random() * (height - 15)) + 15;
		}

		var walkers = [];

		var Walker = function(x,y) {
			console.log("x:",x,"y:",y)
			this.x = x;
			this.y = y;
		};

		Walker.prototype.display = function() {
			stroke(0, 0, 0);
			ellipse(this.x, this.y,30,30);
		};

		Walker.prototype.remove = function() {
			fill(0,0,0);
			stroke(0, 0, 0);
			ellipse(this.x, this.y,30,30);
			fill(255,255,255);
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

		var addWalker = function(){
			var walker = new Walker(
				randomPosX(),
				randomPosY()
			)
			walkers.push(walker);
		}
		var removeWalker = function(){
			walkers.length--;
		}

		var createWalkers = function(event){
			walkers_qty = event.target.value;
			if (walkers_qty <= walkers.length){
				while (walkers.length > walkers_qty) {
					walkers[walkers.length-1].remove();
					walkers.length--;
				}
			} else {
				while (walkers.length < walkers_qty){
					addWalker();
				}
			}
		}

		document.getElementById("walkers_qty").onchange = createWalkers;
		createWalkers({ target: { value: 1 }});
		var draw = function() {
			for (var i = walkers.length - 1; i >= 0; i--) {
				walkers[i].walk();
				walkers[i].display();
			}
		};
//End Sketch Processing
	}
}

// Get the canvas that Processing-js will use

var canvas = document.getElementById("mycanvas");

// Pass the function sketchProc (defined in myCode.js) to Processing's constructor.

var processingInstance = new Processing(canvas, sketchProc);
