<template>
  <transition
    @after-enter="showOpening = false"
    leave-active-class="opening-wrapper--end-active"
    leave-class="opening-wrapper--end"
    leave-to-class="opening-wrapper--end-to"
    name="opening-wrapper"
  >
    <div class="opening-wrapper" v-show="showOpening" ref="openingWrapper">
      <div class="opening opening--a">
        <v-img
          :gradient="gradient"
          class="opening__row"
          lazy-src="/img/lazy-img.png"
          src="/static/coding.png"
        >
          <v-row align="center" class="opening__row" justify="center">
            <h4 class="text-h4 opening__text">Development</h4>
          </v-row>
        </v-img>
      </div>

      <div class="opening opening--b">
        <v-img
          :gradient="gradient"
          class="opening__row"
          lazy-src="/img/lazy-img.png"
          src="/static/design.png"
        >
          <v-row align="center" class="opening__row" justify="center">
            <h4 class="text-h4 opening__text">Design</h4>
          </v-row>
        </v-img>
      </div>

      <div class="opening opening--c">
        <v-img
          :gradient="gradient"
          class="opening__row"
          lazy-src="/img/lazy-img.png"
          src="/static/digital-media.png"
        >
          <v-row align="center" class="opening__row" justify="center">
            <h4 class="text-h4 opening__text">Digital Media</h4>
          </v-row>
        </v-img>
      </div>

      <v-btn
        class="opening-wrapper__button ma-4"
        color="teal"
        rounded
        dark
        @click="skipAnimation()"
        >skip</v-btn
      >
    </div>
  </transition>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Opening',
  computed: {},
  components: {},
  data: () => ({
    animationCount: 0,
    gradient:
      'to top right, rgba(54, 232, 199, 0.24), rgba(156, 73, 183, 0.33)',
    showOpening: true,
  }),
  methods: {
    checkAnimation() {
      this.animationCount += 1;

      if (this.animationCount === 3) {
        this.showOpening = false;
        document.body.style.display = 'initial';
      }
    },
    skipAnimation() {
      this.showOpening = false;
      document.body.style.display = 'initial';
    },
  },
  mounted() {
    this.$nextTick(() => {
      const wrapper = this.$refs.openingWrapper as HTMLElement;

      wrapper.addEventListener('animationend', this.checkAnimation);
      document.body.style.display = 'fixed';
    });
  },
});
</script>

<style lang="scss">
@import '~vuetify/src/styles/styles.sass';

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

  &--end {
    opacity: 1;

    &-active {
      opacity: 0;
    }
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
  left: 0;
  position: absolute;
  right: 0;
  top: 0;

  &__row {
    background-position: center center;
    background-size: cover;
    height: 100%;
  }

  .text-h4 {
    font-size: 28px !important;
    font-weight: 300 !important;

    @media screen and (min-width: map-deep-get($grid-breakpoints, 'sm')) {
      font-size: 36px !important;
      font-weight: 400 !important;
    }

    @media screen and (min-width: map-deep-get($grid-breakpoints, 'md')) {
      font-size: 48px !important;
    }
  }
}

.opening--a {
  animation: openingAnimation1 3s ease 1 normal forwards;
  background-color: $yellow;
  z-index: 2;
  font-size: 14px;

  & .opening__text {
    color: $yellow;
    text-shadow: #ffffff 0 0 4px;
  }

  @media screen and (min-width: map-deep-get($grid-breakpoints, 'md')) {
    top: 0;
  }
}

.opening--b {
  animation: openingAnimation2 4s ease 2s 1 normal forwards;
  background-color: $teal;
  top: 33.33%;
  z-index: 1;

  & .opening__text {
    color: $teal;
    text-shadow: #000000 0 0 10px;
  }

  @media screen and (min-width: map-deep-get($grid-breakpoints, 'md')) {
    left: 33.33%;
    top: 0;
  }
}

.opening--c {
  animation: openingAnimation3 6s ease 4s 1 normal forwards;
  background-color: $lavender;
  top: 66.66%;
  z-index: 0;

  & .opening__text {
    color: $lavender;
    text-shadow: #000000 0 0 10px;
  }

  @media screen and (min-width: map-deep-get($grid-breakpoints, 'md')) {
    left: 66.66%;
    top: 0;
  }
}

@keyframes openingAnimation1 {
  0% {
    background-color: #000000;
  }
  75% {
    background-color: $yellow;
    bottom: 0;
  }
  100% {
    bottom: 66.66%;
  }
}

@keyframes openingAnimation2 {
  0% {
    background-color: #000000;
    bottom: 0;
  }
  75% {
    background-color: $teal;
    bottom: 0;
  }
  100% {
    bottom: 33.33%;
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
}

@media screen and (min-width: map-deep-get($grid-breakpoints, 'md')) {
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
  }
}
</style>
