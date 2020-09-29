<template>
  <div class="hero">
    <v-img
      class="fill-height"
      transition="fade"
      lazy-src="/img/media/field-lazy.png"
      src="/img/media/field-full.png"
    >
      <v-row class="fill-height"> </v-row>
    </v-img>
  </div>
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
  height: calc(100vh - 56px);

  @media screen and (min-width: 960px) {
    .hero {
      height: calc(100vh - 64px);
    }
  }
}
</style>
