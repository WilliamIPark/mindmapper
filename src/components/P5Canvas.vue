<template>
  <div>
    <div id="canvas_container"></div>
  </div>
</template>

<script>
import sketch from '../p5Sketch/sketch.js';

export default {
  name: 'P5Canvas',
}
</script>

<style scoped>
#canvas_container {
  padding: 0;
  margin: 0;
  overflow: hidden;
}
</style>
