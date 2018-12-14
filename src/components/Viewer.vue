<template>
  <div class="viewer">
    <div class="viewer__image">
      <img :src="currentImage">
    </div>
    <div class="viewer__player">
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
  components: {
    FontAwesomeIcon
  },
  props: {
    images: Array
  },
  data: function() {
    return {
      isPlaying: false,
      activeColor: 'green',
      interval: '',
      currentImage: "https://loremflickr.com/320/240/cars?random"
    }
  },
  methods: {
    stepBackward: function() {
      clearInterval(this.interval);
      
      if (this.isPlaying) {
        this.isPlaying = !this.isPlaying
      }
      
      this.getImg()
    },
    stepForward: function() {
      clearInterval(this.interval);
      if (this.isPlaying) {
        this.isPlaying = !this.isPlaying
      }
      this.getImg()
    },
    getImg: function () {
        this.currentImage = "https://loremflickr.com/320/240/cars?random=" + Math.floor(Math.random()*1000)
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