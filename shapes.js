function Shape(point) {
  this.x = point[0];
  this.y = point[1];
  this.maxX = this.x + cellSize;
  this.maxY = this.y + cellSize;
  this.color = random(["#7537f6","#acffca","#999999","#fff"]);

  if (random() < 0.4 ) {
    this.maxX = constrain(this.x * round(random(2,3)), cellSize, maxWidth);
    this.maxY = constrain(this.y * round(random(2,3)), cellSize, maxHeight);
  }

  this.show = function() {

    fill(color(this.color));
    noStroke();

    // if (this.maxX-this.x > 100) {
    //   rect(this.x+10,this.y,(this.maxX-this.x)-20,this.maxY-this.y,5);
    //   rect(this.x,this.y+10,(this.maxX-this.x),(this.maxY-this.y)-20,5);
    // }
    // else {
    //   rect(this.x+5,this.y,(this.maxX-this.x)-10,this.maxY-this.y,3);
    //   rect(this.x,this.y+5,(this.maxX-this.x),(this.maxY-this.y)-10,3);
    // }

    text(this.x + " " + this.maxX, this.x, this.y);
    beginShape();
    vertex(this.x, this.y);
    // bezierVertex(this.x, this.y+5, this.x+5, this.y+5, this.x+5, this.y+5);
    // bezierVertex(this.x+5, this.y+5, this.x+10, this.y+5, this.x+10, this.y);
    vertex(this.maxX, this.y);
    vertex(this.maxX, this.maxY);
    vertex(this.x, this.maxY);
    endShape();
  }

}
