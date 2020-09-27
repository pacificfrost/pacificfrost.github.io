<template>
  <div>
    <h5 class="text-h5 text-center mb-4">Education</h5>

    <v-timeline :dense="$vuetify.breakpoint.smAndDown" align-top>
      <v-timeline-item :key="index" small v-for="(education, index) in history">
        <v-card :color="getStatusColour(education.status, 'card')">
          <v-card-title>
            <v-col class="pt-0 mr-2">
              <v-row>
                <p class="mb-0 timeline-card__title">
                  {{ education.institution }}
                </p>
              </v-row>

              <v-row>
                <p class="mb-0">
                  <small>{{ education.certification }}</small>
                </p>
              </v-row>
            </v-col>

            <v-chip
              :color="getStatusColour(education.status, 'chip')"
              dark
              small
              >{{ education.status }}</v-chip
            >
          </v-card-title>

          <v-card-subtitle>
            <span class="font-weight-bold">{{ education.location }}</span>

            <br />

            {{ formatDate(education.startDate) }} -
            {{ formatDate(education.endDate) }}
          </v-card-subtitle>

          <v-card-text>
            {{ education.details }}
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
  name: 'Education',
  data: () => ({
    history: [
      {
        certification: 'Full-Stack Development',
        details:
          'FreeCodeCamp is an in-depth, free resource that goes deep into learning full-stack engineering',
        endDate: 'N/A',
        location: 'Online',
        institution: 'FreeCodeCamp',
        startDate: '2016/06',
        status: 'On-Going',
      },
      {
        certification: 'Bachelor of Fine Arts: New Media',
        details:
          'BFA: New Media is a degree that covers many different facets of current media technologies such as, web, design, 3D, film, and audio.',
        endDate: '2019/05',
        location: 'Lethbridge AB, Canada',
        institution: 'University of Lethbridge',
        startDate: '2012/09',
        status: 'Graduated',
      },
      {
        certification: 'Audio Production Certification',
        details: 'A hands-on audio engineering certification program',
        endDate: '2011/12',
        location: 'Calgary AB, Canada',
        institution: 'APRA - The Academy of Producation & Recording Arts',
        startDate: '2010/09',
        status: 'Graduated',
      },
      {
        certification: 'Open Studies',
        details:
          'After immigrating to Canada, I needed to get some credits to apply for higher education.',
        endDate: '2008/09',
        location: 'Calgary AB, Canada',
        institution: 'Mount Royal College',
        startDate: '2009/06',
        status: 'Complete',
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
    getStatusColour(status, component) {
      switch (status) {
        case 'Graduated':
        case 'Complete':
          return component === 'chip' ? 'green' : 'green lighten-5';
        case 'On-Going':
          return component === 'chip' ? 'orange' : 'orange lighten-5';
        default:
          return '';
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.timeline-card__title {
  word-break: break-word;
}
</style>
