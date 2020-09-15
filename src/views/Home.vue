<template>
  <v-container fluid fill-height>
    <p-hero></p-hero>

    <v-row justify="space-between" align="center">
      <v-col>
        <h4 class="text-h4 text-center">About</h4>
      </v-col>
    </v-row>

    <v-row justify="space-between" align="center">
      <v-col>
        <h4 class="text-h4 text-center">About</h4>
      </v-col>
    </v-row>

    <v-row justify="space-between" align="center">
      <v-col>
        <h4 class="text-h4 text-center">About</h4>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import Hero from '@/views/Hero.vue';

export default Vue.extend({
  name: 'Home',
  components: {
    'p-hero': Hero,
  },
  data: () => ({}),
});
</script>
