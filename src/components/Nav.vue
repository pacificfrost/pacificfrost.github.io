<template>
  <v-container>
    <v-row class="d-none d-sm-flex" align="center" justify="center">
      <v-btn class="mx-2" color="cyan" dark rounded depressed to="/#section1"
        >About</v-btn
      >

      <v-btn class="mx-2" color="cyan" dark rounded depressed to="/#section2"
        >Goals</v-btn
      >

      <v-btn class="mx-2" color="cyan" dark rounded depressed to="/#section3"
        >Motivations</v-btn
      >

      <v-btn class="mx-2" color="cyan" dark rounded depressed to="/#section4"
        >Achievements</v-btn
      >
    </v-row>

    <v-spacer class="d-sm-none"></v-spacer>

    <v-row class="d-sm-none" justify="end" align="center">
      <v-menu bottom left>
        <template v-slot:activator="{ on, attrs }">
          <v-btn light icon v-bind="attrs" v-on="on">
            <v-icon>menu</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item to="/#section1">
            <v-list-item-title>About</v-list-item-title>
          </v-list-item>

          <v-list-item to="/#section2">
            <v-list-item-title>Goals</v-list-item-title>
          </v-list-item>

          <v-list-item to="/#section3">
            <v-list-item-title>Motivations</v-list-item-title>
          </v-list-item>

          <v-list-item to="/#section4">
            <v-list-item-title>Achievements</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-spacer></v-spacer>

      <h2>Alisdair Frost</h2>

      <v-spacer></v-spacer>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Nav',
  components: {},
  computed: {},
  data: () => ({}),
});
</script>
