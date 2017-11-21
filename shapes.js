function Shape(point) {
  this.x = point[0];
  this.y = point[1];
  this.maxX = constrain(this.x * round(random(2,3)), cellSize, maxWidth);
  this.maxY = constrain(this.y * round(random(2,3)), cellSize, maxHeight);
  this.color = random(["#7537f6","#acffca","#999999","#fff"]);

  if (random() < 0.2 ) {
    this.maxX = this.x + cellSize;
    this.maxY = this.y + cellSize;
  }

  if (random() < 0.2 ) {
    this.maxX = this.x + cellSize/2;
    this.maxY = this.y + cellSize/2;
  }

  this.show = function() {
    text(this.x + " " + this.maxX, this.x, this.y);
    fill(color(this.color));
    noStroke();
    beginShape();
    vertex(this.x, this.y);
    vertex(this.maxX, this.y);
    vertex(this.maxX, this.maxY);
    vertex(this.x, this.maxY);
    endShape();
  }
}
