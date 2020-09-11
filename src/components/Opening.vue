<template>
  <div class="opening-wrapper" id="openingWrapper">
    <div class="opening opening--a">
      <v-btn light text rounded v-on:click="skipAnimation">skip</v-btn>
    </div>

    <div class="opening opening--b"></div>
    <div class="opening opening--c"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Opening',
  computed: {},
  components: {},
  data: () => ({}),
  methods: {
    onWrapperSkipEnd() {
      const wrapper = document.getElementById('openingWrapper');

      if (wrapper) {
        wrapper.style.display = 'none';
      }
    },
    skipAnimation() {
      const wrapper = document.getElementById('openingWrapper');

      if (wrapper) {
        wrapper.classList.add('opening-wrapper--skipping');
        wrapper.addEventListener('transitionend', this.onWrapperSkipEnd);
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.opening-wrapper {
  bottom: 0;
  left: 0;
  opacity: 1;
  position: fixed;
  right: 0;
  top: 0;
  transition: opacity 3s ease;
  z-index: 200;

  &--skipping {
    opacity: 0;
  }
}

.opening-wrapper .opening {
  bottom: 0;
  position: absolute;
  top: 0;
}

.opening--a {
  animation: openingAnimation1 5s ease 1 normal;
  background-color: #f5f05e;
  left: 0;
  right: 66%;
  z-index: 2;
}

.opening--b {
  animation: openingAnimation2 7.5s ease 3.75s 1 normal;
  background-color: #36e8c7;
  left: 33%;
  right: 33%;
  z-index: 1;
}

.opening--c {
  animation: openingAnimation3 10s ease 5s 1 normal;
  background-color: #c76ae6;
  left: 33%;
  right: 0;
  z-index: 0;
}

@keyframes openingAnimation1 {
  0% {
    background-color: #000000;
    right: 0;
  }
  75% {
    background-color: #f5f05e;
    right: 0;
  }
  100% {
    right: 66%;
  }
}

@keyframes openingAnimation2 {
  0% {
    background-color: #000000;
    right: 0;
  }
  75% {
    background-color: #36e8c7;
    right: 0;
  }
  100% {
    right: 33%;
  }
}

@keyframes openingAnimation3 {
  0% {
    background-color: #000000;
  }
  50% {
    background-color: #000000;
  }
  75% {
    background-color: #c76ae6;
  }
  100% {
  }
}
</style>
