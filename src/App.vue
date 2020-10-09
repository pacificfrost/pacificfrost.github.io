<template>
  <v-app>
    <p-opening></p-opening>

    <v-app-bar app color="white" elevate-on-scroll>
      <p-nav></p-nav>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>

    <v-btn
      @click.native="forceScroll()"
      bottom
      class="ma-4"
      color="cyan"
      dark
      fab
      fixed
      right
      small
      to="/"
      transition=""
      v-scroll="setScrollPosition"
      v-show="scrollPosition > 40"
      ><v-icon>keyboard_arrow_up</v-icon></v-btn
    >
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Nav from '@/components/Nav.vue';
import Opening from '@/components/Opening.vue';

export default Vue.extend({
  name: 'App',
  components: {
    'p-nav': Nav,
    'p-opening': Opening,
  },
  data: () => ({
    scrollPosition: 0,
  }),
  methods: {
    forceScroll() {
      if (this.scrollPosition !== 0) {
        window.scroll({
          behavior: 'smooth',
          left: 0,
          top: 0,
        });
      }
    },
    setScrollPosition(event) {
      const top = window.pageYOffset || event.target.scrollTop || 0;

      this.scrollPosition = top;
    },
  },
});
</script>

<style lang="scss">
@import '~vuetify/src/styles/styles.sass';
</style>
