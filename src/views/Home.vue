<template>
  <v-col class="pa-0">
    <p-hero></p-hero>

    <v-container>
      <v-col>
        <v-row id="resume" justify="center" align="center">
          <p-resume></p-resume>
        </v-row>

        <v-row id="about" justify="center" align="center">
          <p-about></p-about>
        </v-row>

        <v-row id="projects" justify="center" align="center">
          <p-projects></p-projects>
        </v-row>
      </v-col>
    </v-container>
  </v-col>
</template>

<script lang="ts">
import Vue from 'vue';

import About from '@/views/About.vue';
import Hero from '@/views/Hero.vue';
import Projects from '@/views/Projects.vue';
import Resume from '@/views/Resume.vue';

export default Vue.extend({
  name: 'Home',
  components: {
    'p-about': About,
    'p-resume': Resume,
    'p-projects': Projects,
    'p-hero': Hero,
  },
  data: () => ({}),
});
</script>
