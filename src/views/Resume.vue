<template>
  <div>
    <v-col class="mx-auto" cols="12" sm="10">
      <h4 class="text-h4 text-center mb-4">Digital Resume</h4>

      <v-row>
        <p class="text-body-2">
          This digital resume covers my print resume in greater detail. I feel
          like oftentimes, print resumes have a lot of valuable information, but
          for those viewing, they may not be able get the full picture. My idea
          for this digital resume, is to make sure that more information is
          accessible should someone need it, but is still short and easy for
          those just wanting to take a quick glance.
        </p>
      </v-row>

      <v-row justify="end">
        <v-btn raised rounded color="cyan" small dark>View PDF Resume</v-btn>
      </v-row>
    </v-col>

    <p-education></p-education>
    <p-employment></p-employment>
    <p-hard-skills></p-hard-skills>
  </div>
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
