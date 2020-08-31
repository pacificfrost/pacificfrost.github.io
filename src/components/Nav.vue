<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-row justify="space-between" align="center">
          <v-btn fab text to="/"
            ><v-icon x-large>$vuetify.icons.mapet</v-icon></v-btn
          >
          <v-row justify="center">
            <v-btn rounded text to="locate">Locate</v-btn>
            <v-btn rounded text to="about">About</v-btn>
            <v-btn rounded text to="how-it-works">How it Works</v-btn>
          </v-row>
          <v-btn icon to="login">
            <v-icon>account_circle</v-icon>
          </v-btn>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Nav',
  components: {},
  data: () => ({}),
});
</script>
