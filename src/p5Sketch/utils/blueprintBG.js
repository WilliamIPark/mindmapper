export default function(s) {
  s.background(133, 193, 233);
  s.stroke(255);

  let x, y = 0;
  let gridSize = 10;

  for(y = 0; y < s.height; y+=gridSize) {
    for (x = 0; x < s.width; x += gridSize) {
      s.point(x, y);
    }
  }
}