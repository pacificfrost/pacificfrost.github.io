<template>
  <v-container>
    <v-row class="d-none d-sm-flex" align="center" justify="center">
      <v-btn class="mx-2" color="cyan" dark rounded depressed to="/#resume"
        >Resume</v-btn
      >

      <v-btn class="mx-2" color="cyan" dark rounded depressed to="/#about"
        >About</v-btn
      >

      <v-btn class="mx-2" color="cyan" dark rounded depressed to="/#projects"
        >Projects</v-btn
      >

      <v-btn class="mx-2" color="cyan" dark rounded depressed to="/#"
        >Motivations</v-btn
      >

      <v-btn class="mx-2" color="cyan" dark rounded depressed to="/#"
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
          <v-list-item to="/#resume">
            <v-list-item-title>Resume</v-list-item-title>
          </v-list-item>

          <v-list-item to="/#">
            <v-list-item-title>About</v-list-item-title>
          </v-list-item>

          <v-list-item to="/#Projects">
            <v-list-item-title>Projects</v-list-item-title>
          </v-list-item>

          <v-list-item to="/#">
            <v-list-item-title>Motivations</v-list-item-title>
          </v-list-item>

          <v-list-item to="/#">
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
