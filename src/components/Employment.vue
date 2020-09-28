<template>
  <div class="mx-auto">
    <h5 class="text-h5 text-center my-4">Work History</h5>

    <v-timeline :dense="$vuetify.breakpoint.smAndDown" align-top>
      <v-timeline-item
        :key="index"
        small
        v-for="(employment, index) in history"
      >
        <v-card>
          <v-card-title>
            <v-col class="pt-0">
              <v-row>
                <p class="mb-0 timeline-card__title">
                  {{ employment.company }}
                </p>
              </v-row>

              <v-row>
                <p class="mb-0 timeline-card__title">
                  <small>{{ employment.role }}</small>
                </p>
              </v-row>
            </v-col>
          </v-card-title>

          <v-card-subtitle class="pb-0">
            <span class="font-weight-bold">{{ employment.location }}</span>

            <br />

            {{ formatDate(employment.startDate) }} -
            {{ formatDate(employment.endDate) }}
          </v-card-subtitle>

          <v-card-text>
            <v-col class="py-0">
              <v-row align="center">
                <v-col>
                  <v-row>
                    {{ employment.description }}
                  </v-row>
                </v-col>

                <v-btn
                  @click="employment.expanded = !employment.expanded"
                  light
                  fab
                  rounded
                  small
                  text
                  v-if="
                    employment.responsibilities.length ||
                      employment.technologies.length ||
                      employment.achievements.length
                  "
                >
                  <v-icon
                    :class="
                      `timeline-card__expand ${
                        employment.expanded
                          ? 'timeline-card__expand--rotate'
                          : ''
                      }`
                    "
                    >keyboard_arrow_down</v-icon
                  >
                </v-btn>
              </v-row>
            </v-col>

            <v-expand-transition>
              <v-col class="pa-0" v-show="employment.expanded">
                <div v-if="employment.responsibilities.length">
                  <h5 class="text-subtitle-2 font-weight-bold mb-4">
                    Responsibilities
                  </h5>

                  <ul class="text-body-2 mb-4 shrink">
                    <li
                      v-for="(value,
                      responsibilitiesIndex) in employment.responsibilities"
                      :key="responsibilitiesIndex"
                    >
                      {{ value }}
                    </li>
                  </ul>
                </div>

                <div v-if="employment.achievements.length">
                  <h5 class="text-subtitle-2 font-weight-bold mb-4">
                    Achievements
                  </h5>

                  <ul class="text-body-2 mb-4 shrink">
                    <li
                      v-for="(value,
                      achievementsIndex) in employment.achievements"
                      :key="achievementsIndex"
                    >
                      {{ value }}
                    </li>
                  </ul>
                </div>

                <div v-if="employment.technologies.length">
                  <h5 class="text-subtitle-2 font-weight-bold mb-4">
                    Technologies Used
                  </h5>

                  <ul class="text-body-2 mb-4 shrink">
                    <li
                      v-for="(value, techIndex) in employment.technologies"
                      :key="techIndex"
                    >
                      {{ value }}
                    </li>
                  </ul>
                </div>
              </v-col>
            </v-expand-transition>
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script lang="ts">
import { format, parse } from 'date-fns';
import Vue from 'vue';

const dateFormat = 'yyyy/MM';

export default Vue.extend({
  name: 'Employment',
  data: () => ({
    history: [
      {
        achievements: [
          'Improved database queries to decrease frontend load times',
          'Helped with implementation and design of payment gateway flows',
          'Designed new UX/UI with clear information for parent recurring payment system',
        ],
        company: 'TransACT Communications, LLC',
        description:
          'Designs and builds both frontend and backend web applications, handles UX/UI designs, assists in database architecture.',
        endDate: 'N/A',
        expanded: false,
        location: 'Remote',
        responsibilities: [
          'Worked with both frontend and backend',
          'Created and documented workflow processes',
          'Some database architecture',
          'UX/UI Design',
        ],
        technologies: [
          'AngularJS/Gulp',
          'Laravel',
          'MongoDB',
          'GitLab/GitHub',
          'Docker',
          'SASS',
          'Visual Studio Code',
          'MySQL',
          'NodeJS',
          'Adobe Illustrator',
          'Draw.io',
          'Figma',
        ],
        role: 'Software Engineer II',
        startDate: '2020/02',
      },
      {
        achievements: [
          'Led the team into use with new frameworks and helped teach those within the team',
          'Reduced time spent in review by implementing various tools to workflow',
          'Wrote several server scripts for data management to reduce manual data entry',
        ],
        company: 'Stet Solutions',
        description:
          'Designs and builds both frontend and backend web applications, handles UX/UI designs, assists in database architecture.',
        endDate: '2020/02',
        expanded: false,
        location: 'Remote',
        responsibilities: [
          'Aided in familiarizing new developers with coding practices',
          'Took on more abstract tasks and researched simple solutions',
          'Helped in implementing linting and strong code quality practices',
          'Responsible for guiding UX/UI decisions',
        ],
        technologies: [
          'Polymer',
          'LitElement',
          'React',
          'Typescript',
          'AVA',
          'SASS',
          'GitHub',
          'Python',
          'Visual Studio Code',
          'NodeJS',
          'Postgres',
          'Adobe Illustrator',
          'Adobe Photoshop',
          'Figma',
        ],
        role: 'Lead Developer',
        startDate: '2019/05',
      },
      {
        achievements: [
          'Cleaned up Wordpress custom theme to include unique features and speed enhancements',
          'Implemented version 1 of payment gateways - a major feature of the application.',
        ],
        company: 'RightLabs inc.',
        description: 'Frontend/Backend web developer and UX/UI designer.',
        endDate: '2018/05',
        expanded: false,
        location: 'Edmonton AB, Canada',
        responsibilities: [
          'Frontend and backend development for website and products',
          'Provided UX/UI designs for products',
          'Create and maintain marketing materials',
        ],
        technologies: [
          'AngularJS/Gulp',
          'Laravel',
          'MySQL',
          'Vagrant',
          'SASS',
          'Wordpress',
          'Unfuddle/GitLab',
          "Jetbrains IDE's",
          'Adobe Illustrator',
          'Adobe Photoshop',
          'Adobe InDesign',
        ],
        role: 'Web Application Developer',
        startDate: '2016/09',
      },
    ],
  }),
  methods: {
    formatDate(dateToFormat) {
      if (dateToFormat === 'N/A') {
        return 'Present';
      }

      return format(parse(dateToFormat, dateFormat, new Date()), 'MMM, yyyy');
    },
  },
});
</script>

<style lang="scss" scoped>
.timeline-card {
  &__title {
    word-break: break-word;
  }

  &__expand {
    transition: transform 0.3s ease;

    &--rotate {
      transform: rotate(-180deg);
    }
  }
}
</style>
