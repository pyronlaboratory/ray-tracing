let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", handleWindowResize);

/**
* @description This function resizes the canvas according to the current window 
* dimensions and updates the canvas center coordinate (halfCanvasW and halfCanvasH) 
* to be used for drawing.
*/
function handleWindowResize()
{
	// Get the new window dimensions and 
	// update the halfCanvasW and H variables
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	halfCanvasW = canvas.width / 2;
	halfCanvasH = canvas.height / 2;

	draw();
}

let text = document.getElementById("myText");

window.addEventListener("mousedown", handleMouseDown);

/**
* @description This function sets the inner HTML of the element with the ID "text" 
* to the string "You pressed the mouse!" when the user presses the mouse button.
*/
function handleMouseDown()
{
	text.innerHTML = "You pressed the mouse!";
}

window.addEventListener("mouseup", handleMouseUp);

/**
* @description This function sets the `text` element's `innerHTML` property to the 
* string "This is some text" when the mouse button is released (i.e., when a mouse 
* "up" event occurs).
*/
function handleMouseUp()
{
	text.innerHTML = "This is some text";
}

let button = document.getElementById("myButton");

button.addEventListener("click", handleButtonClick);

/**
* @description The given function is responsible for setting the size of two rectangle 
* and then drawing them on the canvas using the `draw()` method.
*/
function handleButtonClick()
{
	rectW = Math.random() * 200 + 5;
	rectW = Math.floor(rectW);
	halfRectW = rectW / 2;
	rectH = Math.random() * 200 + 5;
	rectH = Math.floor(rectH);
	halfRectH = rectH / 2;

	draw();
}

let halfCanvasW = canvas.width / 2;
let halfCanvasH = canvas.height / 2;

let rectW = 40;
let rectH = 20;

let halfRectW = rectW / 2;
let halfRectH = rectH / 2;

let colorString = "rgb(255,0,0)";
let r = 0;
let g = 0;
let b = 0;

/**
* @description The function randomizeColorString generates a new string representing 
* a random RGB color with the format "rgb(255pxyloren)" (255 being a maximum value).
*/
function randomizeColorString()
{
	// create a new string with the form "rgb(255,255,255)"
	r = Math.random() * 256;
	r = Math.floor(r);

	g = Math.random() * 256;
	g = Math.floor(g);

	b = Math.random() * 256;
	b = Math.floor(b);

	colorString = "rgb(" + r + "," + g + "," + b + ")";
}

/**
* @description This function randomly places four rectangle on a canvas using two 
* different colors and randomly chosen positions within the canvas's bounds.
*/
function draw()
{
	context.clearRect(0, 0, canvas.width, canvas.height);

	randomizeColorString();
	context.fillStyle = colorString;
	context.fillRect(halfCanvasW - halfRectW, halfCanvasH - halfRectH, rectW, rectH);

	randomizeColorString();
	context.fillStyle = colorString;
	context.fillRect(0, 0, rectW, rectH);

	randomizeColorString();
	context.fillStyle = colorString;
	context.fillRect(canvas.width - rectW, 0, rectW, rectH);

	randomizeColorString();
	context.fillStyle = colorString;
	context.fillRect(0, canvas.height - rectH, rectW, rectH);

	randomizeColorString();
	context.fillStyle = colorString;
	context.fillRect(canvas.width - rectW, canvas.height - rectH, rectW, rectH);
}

draw();
