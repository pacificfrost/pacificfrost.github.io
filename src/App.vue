<template>
  <v-app>
    <v-navigation-drawer app> </v-navigation-drawer>

    <v-app-bar app> </v-app-bar>

    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app> </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',

  components: {},

  data: () => ({}),
});
</script>
