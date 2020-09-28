<template>
  <v-col cols="12" sm="10">
    <!-- <v-row justify="center">
      <form method="get" action="/AlisdairFrostResume.pdf" target="_blank">
        <v-btn raised rounded color="cyan" type="submit" small dark
          >Download PDF Resume</v-btn
        >
      </form>
    </v-row>

    <v-row justify="center">
      <div class="pa-4">or</div>
    </v-row> -->

    <v-row justify="center">
      <h4 class="text-h4 text-center mb-4">Digital Resume</h4>
    </v-row>

    <p-education></p-education>
    <p-employment></p-employment>
    <p-hard-skills></p-hard-skills>
  </v-col>
</template>

<script lang="ts">
import Vue from 'vue';

import Education from '@/components/Education.vue';
import Employment from '@/components/Employment.vue';
import HardSkills from '@/components/HardSkills.vue';

export default Vue.extend({
  name: 'Resume',
  components: {
    'p-education': Education,
    'p-employment': Employment,
    'p-hard-skills': HardSkills,
  },
});
</script>
