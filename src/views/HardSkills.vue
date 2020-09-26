<template>
  <v-container>
    <v-row align="center" class="carousel">
      <v-btn depressed fab left small @click="showPrevious()"
        ><v-icon>keyboard_arrow_left</v-icon></v-btn
      >

      <transition-group
        @leave="leave"
        class="d-flex flex-grow-1"
        name="charts"
        tag="div"
      >
        <v-col v-if="slide === 0 && currentSlide === 0" key="0">
          <h5 class="text-h5 text-center mb-2">Development</h5>

          <v-card class="mx-auto pa-4 text-center">
            <v-card-title
              >{{
                Math.max(...Object.values(skills.development.specific))
              }}
              years of experience</v-card-title
            >

            <v-sheet class="mb-4" color="rgba(0, 0, 0, .02)">
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
        </v-col>

        <v-col v-if="slide === 1 && currentSlide === 1" key="1">
          <h5 class="text-h5 text-center mb-2">Art and Design</h5>

          <v-card class="mx-auto pa-4 text-center">
            <v-card-title
              >{{ Math.max(...Object.values(skills.design)) }} years of
              experience</v-card-title
            >

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
        </v-col>

        <v-col v-if="slide === 2 && currentSlide === 2" key="2">
          <h5 class="text-h5 text-center mb-2">Digital Media</h5>

          <v-card class="mx-auto pa-4 text-center">
            <v-card-title
              >{{
                Math.max(
                  ...Object.values(skills.digitalMedia.audio),
                  ...Object.values(skills.digitalMedia.film)
                )
              }}
              years of experience</v-card-title
            >

            <v-sheet class="mb-4" color="rgba(0, 0, 0, .02)">
              <v-sparkline
                :auto-draw-duration="graphSettings.autoDrawDuration"
                :color="graphSettings.color"
                :gradient="graphSettings.gradient"
                :height="graphSettings.height"
                :label-size="graphSettings.labelSize"
                :labels="Object.keys(skills.digitalMedia.audio)"
                :padding="graphSettings.padding"
                :value="Object.values(skills.digitalMedia.audio)"
                auto-draw
                show-labels
                smooth
                stroke-linecap="round"
              ></v-sparkline>
            </v-sheet>

            <v-sheet class="mb-4" color="rgba(0, 0, 0, .02)">
              <v-sparkline
                :auto-draw-duration="graphSettings.autoDrawDuration"
                :color="graphSettings.color"
                :gradient="graphSettings.gradient"
                :height="graphSettings.height"
                :label-size="graphSettings.labelSize"
                :labels="Object.keys(skills.digitalMedia.film)"
                :padding="graphSettings.padding"
                :value="Object.values(skills.digitalMedia.film)"
                auto-draw
                show-labels
                smooth
                stroke-linecap="round"
              ></v-sparkline>
            </v-sheet>
          </v-card>
        </v-col>
      </transition-group>

      <v-btn depressed fab small right @click="showNext"
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
      gradient: ['#c76ae6', '#f5f05e'],
      padding: '24',
      height: 100,
      labelSize: '5',
    },
    skills: {
      digitalMedia: {
        audio: {
          ['AuditionCC']: 4,
          ['FLStudio']: 2,
          ['ProTools']: 5,
        },
        film: {
          ['After Effects']: 4,
          ['Cinematography']: 5,
          ['Premiere Pro']: 8,
        },
      },
      design: {
        ['Illustrator']: 10,
        ['InDesign']: 4,
        ['Photography']: 8,
        ['Photoshop']: 9,
        ['Traditional Media']: 18,
      },
      development: {
        specific: {
          ['AngularJS']: 3,
          ['Git']: 4,
          ['Laravel']: 2,
          ['LitElement']: 1,
          ['MySQL']: 2,
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
          ['MongoDB']: 1,
          ['PHP']: 4,
          ['Ruby']: 0.5,
          ['SCSS']: 4,
          ['SQL']: 3,
        },
      },
    },
    currentSlide: 0,
    slide: 0,
  }),
  methods: {
    showNext() {
      this.slide =
        this.currentSlide === this.slidesLength ? 0 : this.currentSlide + 1;
    },
    showPrevious() {
      this.slide =
        this.currentSlide === 0 ? this.slidesLength : this.currentSlide - 1;
    },
    leave(el) {
      const transitionEnd = () => {
        this.currentSlide = this.slide;
      };

      if (!el.ontransitionend) {
        el.addEventListener('transitionend', transitionEnd);
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.carousel {
  position: relative;
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
