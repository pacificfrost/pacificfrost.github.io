<template>
  <v-col class="pa-0">
    <p-hero></p-hero>

    <v-col>
      <v-row id="section1" justify="space-between" align="center">
        <p-about></p-about>
      </v-row>

      <v-row id="section2" justify="space-between" align="center">
        <v-col>
          <h4 class="text-h4 text-center">Goals</h4>
        </v-col>
      </v-row>

      <v-row id="section3" justify="space-between" align="center">
        <v-col>
          <h4 class="text-h4 text-center">Motiviations</h4>
        </v-col>
      </v-row>

      <v-row id="section4" justify="space-between" align="center">
        <v-col>
          <h4 class="text-h4 text-center">Achievements</h4>
        </v-col>
      </v-row>
    </v-col>
  </v-col>
</template>

<script lang="ts">
import Vue from 'vue';
import About from '@/views/About.vue';
import Hero from '@/views/Hero.vue';

export default Vue.extend({
  name: 'Home',
  components: {
    'p-about': About,
    'p-hero': Hero,
  },
  data: () => ({}),
});
</script>
