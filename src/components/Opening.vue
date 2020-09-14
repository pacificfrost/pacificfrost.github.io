<template>
  <div class="opening-wrapper" id="openingWrapper">
    <div class="opening opening--a">
      <v-row
        align="center"
        class="opening__row"
        justify="center"
        style="background-image: url(/static/coding.jpg)"
      >
        <h4 class="text-h3 opening__text">Development</h4>
      </v-row>
    </div>

    <div class="opening opening--b">
      <v-row
        align="center"
        class="opening__row"
        justify="center"
        style="background-image: url(/static/design.jpg)"
      >
        <h4 class="text-h3 opening__text">Design</h4>
      </v-row>
    </div>

    <div class="opening opening--c">
      <v-row
        align="center"
        class="opening__row"
        justify="center"
        style="background-image: url(/static/digital-media.jpg)"
      >
        <h4 class="text-h3 opening__text">Digital Media</h4>
      </v-row>
    </div>

    <v-btn
      class="opening-wrapper__button ma-4"
      color="#36e8c7"
      rounded
      v-on:click="skipAnimation()"
      >skip</v-btn
    >
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
    onWrapperSkipEnd(event: TransitionEvent) {
      const target = event.target as HTMLElement;

      if (target.id === 'openingWrapper') {
        target.style.display = 'none';
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
$lavender: #c76ae6;
$teal: #36e8c7;
$yellow: #f5f05e;

.opening-wrapper {
  bottom: 0;
  height: 100%;
  left: 0;
  opacity: 1;
  position: fixed;
  right: 0;
  top: 0;
  transition: opacity 0.5s ease;
  z-index: 200;

  &--skipping {
    opacity: 0;
  }

  &__button {
    background-color: $teal;
    bottom: 0;
    position: absolute;
    right: 0;
    z-index: 20;
  }
}

.opening {
  bottom: 0;
  position: absolute;
  top: 0;

  &__row {
    background-position: center center;
    background-size: cover;
    height: 100%;
  }
}

.opening--a {
  animation: openingAnimation1 5s ease 1 normal;
  background-color: $yellow;
  left: 0;
  right: 66.66%;
  z-index: 2;

  & .opening__text {
    color: $yellow;
    text-shadow: #ffffff 0 0 4px;
  }
}

.opening--b {
  animation: openingAnimation2 7.5s ease 3.75s 1 normal;
  background-color: $teal;
  left: 33.33%;
  right: 33.33%;
  z-index: 1;

  & .opening__text {
    color: $teal;
    text-shadow: #000000 0 0 10px;
  }
}

.opening--c {
  animation: openingAnimation3 10s ease 5s 1 normal;
  background-color: $lavender;
  left: 66.66%;
  right: 0;
  z-index: 0;

  & .opening__text {
    color: $lavender;
    text-shadow: #000000 0 0 10px;
  }
}

@keyframes openingAnimation1 {
  0% {
    background-color: #000000;
    right: 0;
  }
  75% {
    background-color: $yellow;
    right: 0;
  }
  100% {
    right: 66.66%;
  }
}

@keyframes openingAnimation2 {
  0% {
    background-color: #000000;
    right: 0;
  }
  75% {
    background-color: $teal;
    right: 0;
  }
  100% {
    right: 33.33%;
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
    background-color: $lavender;
  }
  100% {
  }
}
</style>
