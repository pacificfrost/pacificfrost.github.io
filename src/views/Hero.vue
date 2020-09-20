<template>
  <div class="hero"></div>
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
$yellow: #f5f05e;

.hero {
  background-color: $yellow;
  height: calc(100vh - 56px);

  @media screen and (min-width: 960px) {
    .hero {
      height: calc(100vh - 64px);
    }
  }
}
</style>
