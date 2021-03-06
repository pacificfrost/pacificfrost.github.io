<template>
  <v-container class="pt-4">
    <h5 class="text-h5 text-center mb-4">Skills</h5>

    <v-row align="center" class="carousel">
      <v-btn
        @click="showPrevious()"
        class="carousel__nav carousel__nav--left mr-4"
        depressed
        fab
        left
        small
        ><v-icon>keyboard_arrow_left</v-icon></v-btn
      >

      <transition-group
        @after-leave="afterLeave"
        @after-enter="afterEnter"
        class="d-flex flex-grow-1"
        name="charts"
        tag="div"
      >
        <v-card
          class="pa-2 pa-md-4 mx-auto carousel__card"
          key="0"
          max-width="800"
          v-if="slide === 0 && currentSlide === 0"
        >
          <v-card-title class="pt-0">Development</v-card-title>

          <v-sheet class="mb-4" color="rgba(0, 0, 0, .02)">
            <v-card-subtitle>
              <v-icon color="#c76ae6">arrow_upward</v-icon
              >{{ Math.max(...Object.values(skills.development.specific)) }}
              years
              <br />
              <v-icon color="#36e8c7">arrow_downward</v-icon
              >{{
                Math.min(...Object.values(skills.development.specific))
              }}
              year{{
                Math.min(...Object.values(skills.development.specific)) > 1
                  ? 's'
                  : ''
              }}
              or less
            </v-card-subtitle>

            <v-sparkline
              :auto-draw-duration="graphSettings.autoDrawDuration"
              :color="graphSettings.color"
              :gradient="graphSettings.gradient"
              :height="graphSettings.height"
              :label-size="graphSettings.labelSize"
              :labels="Object.keys(skills.development.specific)"
              :padding="graphSettings.padding"
              :value="Object.values(skills.development.specific)"
              auto-draw
              show-labels
              smooth
              stroke-linecap="round"
            ></v-sparkline>
          </v-sheet>

          <v-sheet color="rgba(0, 0, 0, .02)">
            <v-card-subtitle>
              <v-icon color="#c76ae6">arrow_upward</v-icon
              >{{ Math.max(...Object.values(skills.development.languages)) }}
              years
              <br />
              <v-icon color="#36e8c7">arrow_downward</v-icon
              >{{ Math.min(...Object.values(skills.development.languages)) }}
              year or less
            </v-card-subtitle>

            <v-sparkline
              :auto-draw-duration="graphSettings.autoDrawDuration"
              :color="graphSettings.color"
              :gradient="graphSettings.gradient"
              :label-size="graphSettings.labelSize"
              :labels="Object.keys(skills.development.languages)"
              :padding="graphSettings.padding"
              :value="Object.values(skills.development.languages)"
              auto-draw
              show-labels
              smooth
              stroke-linecap="round"
            ></v-sparkline>
          </v-sheet>
        </v-card>

        <v-card
          class="mx-auto pa-4 carousel__card"
          key="1"
          max-width="800"
          v-if="slide === 1 && currentSlide === 1"
        >
          <v-card-title class="pt-0">Design</v-card-title>

          <v-card-subtitle>
            <v-icon color="#c76ae6">arrow_upward</v-icon
            >{{ Math.max(...Object.values(skills.design)) }}
            years
            <br />
            <v-icon color="#36e8c7">arrow_downward</v-icon
            >{{ Math.min(...Object.values(skills.design)) }} year{{
              Math.min(...Object.values(skills.design)) > 1 ? 's' : ''
            }}
            or less
          </v-card-subtitle>

          <v-sheet class="mb-4" color="rgba(0, 0, 0, .02)">
            <v-sparkline
              :auto-draw-duration="graphSettings.autoDrawDuration"
              :color="graphSettings.color"
              :gradient="graphSettings.gradient"
              :height="graphSettings.height"
              :label-size="graphSettings.labelSize"
              :labels="Object.keys(skills.design)"
              :padding="graphSettings.padding"
              :value="Object.values(skills.design)"
              auto-draw
              show-labels
              smooth
              stroke-linecap="round"
            ></v-sparkline>
          </v-sheet>
        </v-card>

        <v-card
          class="mx-auto pa-4 carousel__card"
          key="2"
          max-width="800"
          v-if="slide === 2 && currentSlide === 2"
        >
          <v-card-title class="pt-0">Digital Media</v-card-title>

          <v-card-subtitle>
            <v-icon color="#c76ae6">arrow_upward</v-icon
            >{{ Math.max(...Object.values(skills.digitalMedia)) }}
            years
            <br />
            <v-icon color="#36e8c7">arrow_downward</v-icon
            >{{ Math.min(...Object.values(skills.digitalMedia)) }} year{{
              Math.min(...Object.values(skills.digitalMedia)) > 1 ? 's' : ''
            }}
            or less
          </v-card-subtitle>

          <v-sheet class="mb-4" color="rgba(0, 0, 0, .02)">
            <v-sparkline
              :auto-draw-duration="graphSettings.autoDrawDuration"
              :color="graphSettings.color"
              :gradient="graphSettings.gradient"
              :height="graphSettings.height"
              :label-size="graphSettings.labelSize"
              :labels="Object.keys(skills.digitalMedia)"
              :padding="graphSettings.padding"
              :value="Object.values(skills.digitalMedia)"
              auto-draw
              show-labels
              smooth
              stroke-linecap="round"
            ></v-sparkline>
          </v-sheet>
        </v-card>
      </transition-group>

      <v-btn
        @click="showNext"
        class="carousel__nav carousel__nav--right ml-4"
        depressed
        fab
        right
        small
        ><v-icon>keyboard_arrow_right</v-icon></v-btn
      >
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'HardSkills',
  computed: {
    slidesLength() {
      return Object.keys(this.skills).length - 1;
    },
  },
  data: () => ({
    graphSettings: {
      autoDrawDuration: 600,
      color: '#c76ae6',
      gradient: ['#c76ae6', '#36e8c7'],
      padding: '24',
      height: 100,
      labelSize: '5',
    },
    skills: {
      design: {
        ['Figma']: 2,
        ['Illustrator']: 10,
        ['InDesign']: 4,
        ['Photography']: 8,
        ['Photoshop']: 9,
        ['Traditional Media']: 8,
      },
      development: {
        specific: {
          ['AngularJS']: 4,
          ['Git']: 4,
          ['Laravel']: 2,
          ['Lit']: 1,
          ['MongoDB']: 1,
          ['MySQL']: 3,
          ['NodeJS']: 3,
          ['Polymer']: 2.5,
          ['Postgres']: 2,
          ['React']: 1,
          ['Typescript']: 1,
          ['Vue']: 1.5,
        },
        languages: {
          ['C++']: 2,
          ['CSS']: 6,
          ['HTML']: 6,
          ['Javascript']: 5,
          ['NoSQL']: 1,
          ['PHP']: 4,
          ['Ruby']: 0.5,
          ['SCSS']: 4,
          ['SQL']: 3,
        },
      },
      digitalMedia: {
        ['After Effects']: 4,
        ['AuditionCC']: 4,
        ['Cinematography']: 5,
        ['FLStudio']: 2,
        ['Premiere Pro']: 8,
        ['ProTools']: 3,
      },
    },
    currentSlide: 0,
    canTransitionNext: true,
    slide: 0,
  }),
  methods: {
    afterLeave() {
      this.currentSlide = this.slide;
    },
    afterEnter() {
      this.canTransitionNext = true;
    },
    showNext() {
      if (!this.canTransitionNext) {
        return;
      }

      this.canTransitionNext = false;

      this.slide =
        this.currentSlide === this.slidesLength ? 0 : this.currentSlide + 1;
    },
    showPrevious() {
      if (!this.canTransitionNext) {
        return;
      }

      this.canTransitionNext = false;

      this.slide =
        this.currentSlide === 0 ? this.slidesLength : this.currentSlide - 1;
    },
  },
});
</script>

<style lang="scss" scoped>
@import '~vuetify/src/styles/styles.sass';

.carousel {
  position: relative;

  &__card {
    width: 100%;
  }

  &__nav {
    background-color: transparent !important;
    border-radius: 0;
    height: auto;
    top: 0;
    bottom: 0;
    position: absolute;
    z-index: 2;

    &--left {
      left: 0;
    }

    &--right {
      right: 0;
    }

    @media screen and (min-width: map-deep-get($grid-breakpoints, 'sm')) {
      position: relative;
      z-index: 0;
      height: 40px;
      border-radius: 50%;
    }
  }
}

.charts {
  &-enter-active,
  &-leave-active {
    transition: opacity 0.3s ease;
  }

  &-enter,
  &-leave-to {
    opacity: 0;
  }

  &-enter-to {
    opacity: 1;
  }
}
</style>
