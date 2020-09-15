<template>
  <v-app>
    <!-- <p-opening></p-opening> -->

    <v-app-bar app color="white" elevate-on-scroll>
      <p-nav></p-nav>
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
import Nav from '@/components/Nav.vue';
// import Opening from '@/components/Opening.vue';

export default Vue.extend({
  name: 'App',
  components: {
    'p-nav': Nav,
    // 'p-opening': Opening,
  },
  data: () => ({}),
});
</script>
