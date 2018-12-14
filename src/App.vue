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
  },
  data: function() {
    return {
      images: this.getRandomImages()
    }
  },
  methods: {
    getRandomImages: function() {
      let images = []
    
      for (let i = 0; i < 5; i++) {
        images[i] = "https://loremflickr.com/320/240?random=" + Math.floor(Math.random()*1000)
      }
      return images
    }
  }
}
</script>