<template>
  <div id="app">
    <Viewer :images="images"></Viewer>
  </div>
</template>

<script>
import Viewer from './components/Viewer.vue'
export default {
  name: 'app',
  components: {
    Viewer
  }
}
</script>