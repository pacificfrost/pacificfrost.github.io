<template>
  <v-row class="px-2" justify="space-between" align="center">
    <v-row justify="center">
      <v-btn class="mx-2" color="cyan" dark rounded depressed to="/#section1"
        >About Me</v-btn
      >

      <v-btn class="mx-2" color="cyan" dark rounded depressed to="/#section2"
        >Section2</v-btn
      >

      <v-btn class="mx-2" color="cyan" dark rounded depressed to="/#section3"
        >Section3</v-btn
      >

      <v-btn class="mx-2" color="cyan" dark rounded depressed to="/#section4"
        >Section1</v-btn
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
