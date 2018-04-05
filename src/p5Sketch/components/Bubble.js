export default class Bubble {
  constructor(sketch, id, x, y, w, h) {
    this.s = sketch;
    this.id = id;
    this.position = sketch.createVector(x, y);
    this.w = w;
    this.h = h;
    this.borderRadius = 6;
  }

  mouseOver() {
    let { s, position, w, h } = this;

    if(s.mouseX > position.x && s.mouseX < (position.x + w) &&
       s.mouseY > position.y && s.mouseY < (position.y + h)) {
      return true;
    }
    return false;
  }

  mousePressed() {
    if(this.mouseOver()) {
      window.store.selected = {object: this, type: 'Bubble'};
      console.log('selected', window.store.selected)
    }
  }

  mouseDragged() {
    let { s, position, w, h } = this;
    if(window.store.selected && window.store.selected.object.id == this.id) {
      this.position = s.createVector(
        s.lerp(position.x, s.mouseX-w/2, 0.3),
        s.lerp(position.y, s.mouseY-h/2, 0.3)
      );
    }
  }

  draw() {
    let { s, position, w, h, borderRadius } = this;
    
    s.noStroke();
    this.mouseOver() ? s.fill(240) : s.fill(255);
    s.rect(
      position.x, position.y, w, h,
      borderRadius, borderRadius, borderRadius, borderRadius
    );
  }
}