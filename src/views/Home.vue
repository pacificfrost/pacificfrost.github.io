<template>
  <v-container fluid fill-height>
    <v-row justify="space-between" align="center">
      <v-col>
        <h2 class="d-inline-block text-h2">Keep your friends close</h2>
        <br />
        <h4 class="d-inline-block text-h4">Keep your fur-iends closer</h4>
        <br />
        <v-btn class="mt-12" dark color="deep-purple" elevation="12" raised
          >Get a Tag</v-btn
        >
      </v-col>
      <v-card rounded elevation="4">
        <v-img max-width="480" src="@/assets/dog-hero.jpg"></v-img>
      </v-card>
    </v-row>

    <h3 class="text-h3 text-center">What is Mapet?</h3>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Home',
  components: {},
  data: () => ({}),
});
</script>
