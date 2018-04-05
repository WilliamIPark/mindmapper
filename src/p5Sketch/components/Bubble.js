export default class Bubble {
  constructor(sketch, id, x, y, w, h) {
    this.s = sketch;
    this.id = id;
    this.position = sketch.createVector(x, y);
    this.w = w;
    this.h = h;
  }

  draw() {
    let { s, position, w, h } = this;
    
    s.noStroke();
    s.fill(0);
    s.rect(position.x, position.y, w, h);
  }
}