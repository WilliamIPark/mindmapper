import p5 from 'p5';
import drawBackground from './utils/blueprintBG';
import initStore from './utils/initStore';

const sketch = new p5(function (s) {
  initStore(s);

  // Setup
  s.setup = function () {
    s.createCanvas(window.innerWidth, window.innerHeight);
    s.background(133,193, 233);
  };

  // Main draw loop
  s.draw = function () {
    s.clear();
    drawBackground(s);

    s.fill(0);
    s.text(Math.ceil(s.frameRate()), 10, 10);

    Object.values(window.store.objs.bubbles).map(bubble => {
      bubble.draw();
    });
  };

  s.mousePressed = function() {
    Object.values(window.store.objs.bubbles).map(bubble => {
      bubble.mousePressed();
    });
  }

  s.mouseReleased = function() {
    window.store.selected = undefined;
    console.log('selected', window.store.selected ? true : false);
  }

  s.mouseDragged = function() {
    Object.values(window.store.objs.bubbles).map(bubble => {
      bubble.mouseDragged();
    });
  }

  s.windowResized = function() {
    s.resizeCanvas(window.innerWidth, window.innerHeight)
  };
  
}, 'canvas_container');

export default sketch;
