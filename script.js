/*var colors = [
	"rgb(255, 0, 0)",
	"rgb(255, 255, 0)",
	"rgb(0, 255, 0)",
	"rgb(0, 255, 255)",
	"rgb(0, 0, 255)",
	"rgb(255, 0, 255)"
];*/
var numSquares = 6;
var colors = generateRandomColors(numSquares);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButton = document.querySelectorAll(".mode");

init();

function init(){

	// add modeButton event listeners
	setupModeButtons();
	setupSquares();
	reset();
}

function setupModeButtons(){

	for (var i = 0; i < modeButton.length; i++){
		modeButton[i].addEventListener("click", function(){
			//remove selected class from all buttons
			modeButton[0].classList.remove("selected");
			modeButton[1].classList.remove("selected");
			// add class to clicked button
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			reset();
		});
	}
}

function setupSquares(){
	for(var i = 0; i < squares.length; i++){
		squares[i].addEventListener("click", function(){

		// Record which color was clicked
		var clickedColor = this.style.backgroundColor;
			
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct";
			changeColors(pickedColor);
			h1.style.backgroundColor = pickedColor;
			resetButton.textContent = "Play Again?";
		}
		else {
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again";
			}
		});
	}	
}


function reset(){
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";

	for (var i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.visibility = "visible";
		} else {
			squares[i].style.visibility = "hidden";
		}
	}
	h1.style.backgroundColor = "steelblue"; // orginal background color	
}


resetButton.addEventListener("click", function(){
	reset();
});


function changeColors(color){
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
		squares[i].style.visibility = "visible";
	}
}


// choose random index for picked color
function pickColor(){
	var index = Math.floor(Math.random() * colors.length);
	return colors[index];
}


function generateRandomColors(num){
	var arr = [];

	for(var i = 0; i < num; i++){
		arr.push(randomColor());
	}

	return arr;
}


function randomColor(){
	// 256 = max of 255 + 1
	// pick a val for red
	var red = Math.floor(Math.random() * 256);
	// pick a val for green
	var green = Math.floor(Math.random() * 256);
	//pick a val for blue
	var blue = Math.floor(Math.random() * 256);

	return "rgb(" + red + ", " + green + ", " + blue + ")";
}