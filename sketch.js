var shapeArray = [];
var shapeNumber = 25;
var cellSize = 40;
var maxWidth = cellSize * Math.round(window.innerWidth/cellSize) - cellSize;
var maxHeight = cellSize * Math.round(window.innerHeight/cellSize) - cellSize;
var img;
var count = 0;

function setup() {

  createCanvas(windowWidth, windowHeight);

  //create grid

  createNew();

}

function draw() {

  count++;
  console.log(count);
  if(count > 50) {
    shapeArray = [];
    createNew();
    count = 0;
  }

}

function createNew() {

  //create shapes

  while (shapeArray.length < shapeNumber) {
    var overlapping = false;
    var randomX = floor(random(1,((maxWidth)/cellSize))) * cellSize;
    var randomY = floor(random(1,((maxHeight)/cellSize))) * cellSize;
    var newShape = new Shape([randomX, randomY]);

    for (var i = 0; i <= shapeArray.length-1; i++) {
      if (checkOverlap(newShape, shapeArray[i])) {
        overlapping = true;
      }
    }

    if (!overlapping) {
      shapeArray.push(newShape);
    }

  }

  //draw

  background(0);
  for (var x = cellSize; x < maxWidth; x += cellSize) {
    for (var y = cellSize; y < maxHeight; y += cellSize) {
      stroke(100);
      noFill();
      rect(x,y,cellSize,cellSize);
    }
  }

  for (var i = 0; i < shapeArray.length; i++) {
    shapeArray[i].show();
  }

}

function checkOverlap(testShape, prevShape) {
  if (testShape.maxX > prevShape.x && testShape.x < prevShape.maxX && testShape.maxY > prevShape.y && testShape.y < prevShape.maxY) {
    return true;
  }
  return false;
}
