<template>
  <div id="sidebar">
    <h2>Mindmap</h2>
    <AddBubble />
  </div>
</template>

<script>
import AddBubble from './AddBubble.vue';
export default {
  name: 'sidebar',
  components: {
    AddBubble,
  }
}
</script>

<style scoped>
  #sidebar {
    position: fixed;
    right: 0;
    top: 0;
    bottom: 0;
    width: 270px;
    background-color: white;
    padding: 15px;
    box-shadow: 0px 0px 12px 0px rgba(0,0,0,0.4);
  }
</style>
