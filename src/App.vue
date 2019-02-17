<template>
  <div class="viewer" :style="{ backgroundColor }" v-if="loaded">
    <div class="viewer__image">
      <img :src="currentImage">
    </div>
    <div class="viewer__player" v-if="showButtons">
      <font-awesome-icon icon="step-backward"
        @click="stepBackward"
        class="viewer__player-action" 
      />
      <font-awesome-icon :icon="['far', 'play-circle']"
        @click="play"
        v-show="!isPlaying" 
        v-model="isPlaying"
        class="viewer__player-action viewer__player-action--bigger"
      />  
      <font-awesome-icon :icon="['far', 'pause-circle']"
        @click="pause"
        v-show="isPlaying" 
        v-model="isPlaying"
        class="viewer__player-action viewer__player-action--bigger"
      />
      <font-awesome-icon icon="step-forward"
        @click="stepForward"
        class="viewer__player-action" 
      />
    </div>
  </div>
</template>
<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStepBackward } from '@fortawesome/free-solid-svg-icons'
import { faPlayCircle } from '@fortawesome/free-regular-svg-icons'
import { faPauseCircle } from '@fortawesome/free-regular-svg-icons'
import { faStepForward } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faStepBackward, faPlayCircle, faPauseCircle, faStepForward)
export default {
  name: 'ImagesViewerVue',
  components: {
    FontAwesomeIcon
  },
  props: {
    autoplay: {
      type: Boolean,
      default: false
    },
    backgroundColor: String,
    images: Array,
    showButtons: {
      type: Boolean,
      default: true
    },
  },
  data: function() {
    return {
      activeColor: 'green',
      currentImage: null,
      currentIndex: 0,
      isPlaying: false,
      interval: '',
      loaded: false,
      total: 0
    }
  },
  created: function() {
    this.total = this.images.length;
    this.currentImage = this.images[this.currentIndex].url;
    
    if (this.autoplay) {
      this.play();
    }
  },
  mounted: function () {
    this.loaded = true;
  },
  methods: {
    stepBackward: function() {
      clearInterval(this.interval);

      if (this.isPlaying) {
        this.isPlaying = !this.isPlaying
      }
      
      this.getImg(false);
    },
    stepForward: function() {
      clearInterval(this.interval);
      if (this.isPlaying) {
        this.isPlaying = !this.isPlaying
      }
      this.getImg()
    },
    getImg: function (forward = true) {

        if (forward) {
          this.currentIndex++;
        } else {
          this.currentIndex--;
        }
        
        if (this.currentIndex < 0) {
          this.currentIndex = this.total - 1;
        } else if (this.currentIndex >= this.total) {
          this.currentIndex = 0;
        }
        
        this.currentImage = this.images[this.currentIndex].url;
    },
    play: function () {
      this.isPlaying = !this.isPlaying
      this.activeColor = 'orangered'
      
      var self = this
      this.interval = setInterval(function () {
          self.getImg()
      }, 2000)
    },
    pause: function () {
      clearInterval(this.interval);
      this.isPlaying = !this.isPlaying
      this.activeColor = 'green'
    }
  }
};
</script>
<style lang="scss" scoped>
.viewer {
  padding: 12px;
  background-color: #222326;
  color: #f6a623;
  text-align: left;
  position: fixed;
  z-index: 2;
  &__player {
    text-align: center;
    margin-top: .5rem;
  }
  &__player-action {
    color: #f8f8f8;
    margin: auto .75rem;
    cursor: pointer;
    vertical-align: baseline;
    &--bigger {
      font-size: 1.5rem;
      vertical-align: sub;
    }
  }
}
</style>