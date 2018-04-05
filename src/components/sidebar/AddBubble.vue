<template>
    <Button @click="addBubble()">Add Bubble</Button>
</template>

<script>
import Bubble from '../../p5Sketch/components/Bubble';

export default {
  name: 'AddBubble',
  methods:{
    addBubble: function() {
      window.store.objs.bubbles.push(
        new Bubble(window.store.sketch, 0, 50, 50, 100, 100)
      )
    }
  }
}
</script>

<style scoped>
  button {
    padding: 15px;
    background-color: #42b883;
    border: none;
    color: white;
    font-size: 1em;
    font-weight: bold;
    width: 100%;
    border-radius: 4px;
  }
  button:hover {
    background-color: #319a6b;
    cursor: pointer;
  }
</style>
