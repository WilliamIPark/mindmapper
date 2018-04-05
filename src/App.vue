<template>
  <div id="app">
    <Sidebar />
    <P5Canvas />
  </div>
</template>

<script>
import P5Canvas from './components/P5Canvas.vue'
import Sidebar from './components/sidebar/Sidebar.vue'
export default {
  name: 'app',
  components: {
    P5Canvas,
    Sidebar,
  }
}
</script>

<style>
  body {
    margin: 0;
    padding: 0;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
