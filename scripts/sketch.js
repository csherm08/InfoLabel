var canvas;
var mouseDownForTear = false;
function setup() {
  canvas = createCanvas(windowWidth*.6, windowHeight*.8);
  canvas.parent('canvas-wrapper');
  background(45);
	tear = new tearDrop(width/10, height/8);
	label = new Label((width/2)-(width*(.4/2)), (height/2)-(height*(.75/2)), width*.4, height*.75);
  //cw = new color_wheel();
}

function draw() {
	fill("white")
  //cw.drawColorWheel()
  background(45)

	label.show();
	tear.show();
	label.checkForTear(tear);
	if(mouseDownForTear){
  console.log(tear.x + " " + tear.y)
		tear.move(mouseX - xOffset, mouseY - yOffset)
  }
}

function mousePressed(){
	xOffset = mouseX - tear.x
	yOffset = mouseY - tear.y

	if(tear.checkMouseIn(mouseX, mouseY))
		mouseDownForTear = true
}
function mouseReleased(){
	xOffset = mouseX - tear.x
	yOffset = mouseY - tear.y
	console.log("RELEASE MEEEE")
	mouseDownForTear = false
  if(label.TearReleasedInLabel(tear)){
      tear.move(width/10, height/8)
  }
}
//function mouseDragged(){
//	if (tear.checkMouseIn(mouseX, mouseY)){
//		tear.move(mouseX - xOffset, mouseY - yOffset)
//	}
//}
window.onresize = function() {
  canvas.size(windowWidth*.6, windowHeight*.8);
};
//// Draw a rectangle with rounded corners having the following radii:
// top-left = 20, top-right = 15, bottom-right = 10, bottom-left = 5.
//rect(30, 20, 55, 55, 20, 15, 10, 5);
