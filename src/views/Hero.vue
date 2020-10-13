<template>
  <v-container class="pa-0 fill-height">
    <v-row align="center">
      <v-col cols="6">
        <v-img
          class="hero"
          contain
          transition="fade"
          lazy-src="/img/media/hero-small.png"
          src="/img/media/hero.png"
        ></v-img>
      </v-col>

      <v-col cols="6">
        <h4 class="text-h5 text-sm-h5">Alisdair Frost</h4>
        <h5 class="text-subtitle-1">Portfolio</h5>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Hero',
  components: {},
  data: () => ({}),
});
</script>

<style lang="scss">
.hero {
  height: calc(50vh - 56px);

  @media screen and (min-width: 960px) {
    .hero {
      height: calc(50vh - 64px);
    }
  }
}
</style>
