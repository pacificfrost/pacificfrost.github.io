<template>
  <v-col class="pa-0">
    <p-hero></p-hero>

    <v-container class="px-0 px-sm-4">
      <v-col>
        <v-row class="page" id="resume" justify="center" align="center">
          <p-resume></p-resume>
        </v-row>

        <v-row class="page" id="about" justify="center" align="center">
          <p-about></p-about>
        </v-row>

        <v-row class="page" id="projects" justify="center" align="center">
          <p-projects></p-projects>
        </v-row>

        <v-row class="page" id="contact" justify="center" align="center">
          <p-contact></p-contact>
        </v-row>
      </v-col>
    </v-container>
  </v-col>
</template>

<script lang="ts">
import Vue from 'vue';

import About from '@/views/About.vue';
import Contact from '@/views/Contact.vue';
import Hero from '@/views/Hero.vue';
import Projects from '@/views/Projects.vue';
import Resume from '@/views/Resume.vue';

export default Vue.extend({
  name: 'Home',
  components: {
    'p-about': About,
    'p-contact': Contact,
    'p-resume': Resume,
    'p-projects': Projects,
    'p-hero': Hero,
  },
  data: () => ({}),
});
</script>

<style lang="scss">
.page {
  margin-top: -50px;
  padding-top: 50px;
}
</style>
