<template>
  <v-row class="px-2" justify="space-between" align="center">
    <v-row justify="center">
      <v-btn class="mx-2" color="cyan" dark rounded depressed to="/#section1"
        >About</v-btn
      >

      <v-btn class="mx-2" color="cyan" dark rounded depressed to="/#section2"
        >Goals</v-btn
      >

      <v-btn class="mx-2" color="cyan" dark rounded depressed to="/#section3"
        >Motivations</v-btn
      >

      <v-btn class="mx-2" color="cyan" dark rounded depressed to="/#section4"
        >Achievements</v-btn
      >
    </v-row>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Nav',
  components: {},
  computed: {},
  data: () => ({}),
});
</script>
