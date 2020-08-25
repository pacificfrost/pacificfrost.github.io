<template>
  <v-app>
    <v-app-bar
      app
      color="white"
      elevate-on-scroll
      prominent
      shrink-on-scroll
      shaped
    >
      <pa-nav></pa-nav>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app></v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Nav from '@/components/Nav/Nav.vue';

export default Vue.extend({
  name: 'App',
  components: {
    'pa-nav': Nav,
  },
  data: () => ({}),
});
</script>
