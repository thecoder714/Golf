canvas = new fabric.Canvas("mycanvas");
var ballx = 50;
var bally = 50;
var hole = "";
var ball = "";
var holex;
var holey;

function loadImg() {
	canvas.remove(ball);
	holex = 150;
	holey = 150;
	fabric.Image.fromURL('golf-h.png', function (Img) {
		hole = Img;
		hole.scaleToWidth(50);
		hole.scaleToHeight(50);
		hole.set({
			top: holey,
			left: holex
		});
		canvas.add(hole);
	})
}

function newImage() {
	fabric.Image.fromURL('ball.png', function (Img) {
		ball = Img;
		ball.scaleToWidth(50);
		ball.scaleToHeight(50);
		ball.set({
			top: bally,
			left: ballx
		});
		canvas.add(ball);
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
	steps = 50;
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if (keyPressed == '38') {
		up();
		console.log("up");
	}
	if (keyPressed == '40') {
		down();
		console.log("down");
	}
	if (keyPressed == '37') {
		left();
		console.log("left");
	}
	if (keyPressed == '39') {
		right();
		console.log("right");
	}
	console.log(ballx +"and"+ bally);
	console.log(holex +"and"+ holey);

	if (Math.sqrt(Math.pow(holex - ballx,2) + Math.pow(holey - bally,2)) == 0) {
		canvas.remove(ball);
		console.log("Collision Detected");
		document.getElementById("hd3").innerHTML = "You've Won! <br> You will be sent to a new game in 5 seconds";
		setTimeout(function () {
			open("https://127.0.0.1:5500/Golf/");
		}, 5000);
	}
}

function up() {
	if (bally > 0) {
		bally -= steps;
		canvas.remove(ball);
		newImage();
	}
}

function down() {
	if (bally < 650) {
		bally += steps;
		canvas.remove(ball);
		newImage();
	}
}

function left() {
	if (ballx > 0) {
		ballx -= steps;
		canvas.remove(ball);
		newImage();
	}
}

function right() {
	if (ballx <= 1300) {
		ballx += steps;
		canvas.remove(ball);
		newImage();
	}
}