// Get the canvas and create the drawing context
var canvas = document.getElementById("gameCanvas");
var ctx = canvas.getContext("2d");

// Set the initial ball position, velocity, and size
var ballX = canvas.width/2;
var ballY = canvas.height/2;
var ballDX = 5;
var ballDY = 5;
var ballSize = 10;

// Set the initial paddle positions, sizes, and velocities
var paddleHeight = 100;
var paddleWidth = 10;
var paddleSpeed = 10;
var leftPaddleY = canvas.height/2 - paddleHeight/2;
var rightPaddleY = canvas.height/2 - paddleHeight/2;

// Set the initial scores and winning score
var leftPlayerScore = 0;
var rightPlayerScore = 0;
var winningScore = 20;

// Draw the game elements (ball, paddles, and scores)
function drawGame() {
	// Clear the canvas
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	// Draw the ball
	ctx.beginPath();
	ctx.arc(ballX, ballY, ballSize, 0, Math.PI*2);
	ctx.fillStyle = "black";
	ctx.fill();
	ctx.closePath();

	// Draw the left paddle
	ctx.beginPath();
	ctx.rect(0, leftPaddleY, paddleWidth, paddleHeight);
	ctx.fillStyle = "blue";
	ctx.fill();
	ctx.closePath();

	// Draw the right paddle
	ctx.beginPath();
	ctx.rect(canvas.width - paddleWidth, rightPaddleY, paddleWidth, paddleHeight);
	ctx.fillStyle = "red";
	ctx.fill();
	ctx.closePath();

	// Draw the scores
	ctx.font = "20px Arial";
	ctx.fillText("Left player score: " + leftPlayerScore, 20, 40);
	ctx.fillText("Right player score: " + rightPlayerScore, canvas.width - 220, 40);
}

// Update the game elements (ball and paddles)
function updateGame() {
	// Move the ball
	ballX += ballDX;
	ballY += ballDY;

	// Check for ball and paddle collision (left paddle)
	if (ballX - ballSize <= paddleWidth && ballY >= leftPaddleY && ballY <= leftPaddleY + paddleHeight) {
		ballDX = -ballDX;
		ballDX *= 1.1;
		ballDY *= 1.1;
	}

	// Check for ball and paddle collision (right paddle)
	if (ballX + ballSize >= canvas.width - paddleWidth && ballY >= rightPaddleY && ballY <= rightPaddleY + paddleHeight) {
		ballDX = -ballDX;
		ballDX *= 1.1;
		ballDY *= 1.1;
	}

	// Check for ball and boundary collision (top and bottom)
	if (ballY - ballSize <= 0 || ballY + ballSize >= canvas.height) {
		ballDY = -ballDY;
	}

	// Check for left player score
}