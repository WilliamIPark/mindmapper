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
    
    window.store.objs.bubbles.map(bubble => {
      bubble.draw();
    });
  };

  s.windowResized = function() {
    s.resizeCanvas(window.innerWidth, window.innerHeight)
  };
  
}, 'canvas_container');

export default sketch;
