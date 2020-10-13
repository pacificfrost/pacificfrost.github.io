<template>
  <v-container>
    <v-row class="d-none d-sm-flex" align="center" justify="center">
      <v-btn
        :to="{ hash: '#resume' }"
        @click.native="forceScroll('resume')"
        class="mx-2"
        color="teal"
        dark
        rounded
        depressed
        >Resume</v-btn
      >

      <v-btn
        :to="{ hash: '#about' }"
        @click.native="forceScroll('about')"
        class="mx-2"
        color="teal"
        dark
        rounded
        depressed
        >About</v-btn
      >

      <v-btn
        :to="{ hash: '#projects' }"
        @click.native="forceScroll('projects')"
        class="mx-2"
        color="teal"
        dark
        rounded
        depressed
        >Projects</v-btn
      >
    </v-row>

    <v-spacer class="d-sm-none"></v-spacer>

    <v-row class="d-sm-none" justify="space-between" align="center">
      <v-col class="pl-0">
        <v-menu bottom left>
          <template v-slot:activator="{ on, attrs }">
            <v-btn light icon v-bind="attrs" v-on="on">
              <v-icon color="teal">menu</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item
              :to="{ hash: '#resume' }"
              @click.native="forceScroll('resume')"
            >
              <v-list-item-title>Resume</v-list-item-title>
            </v-list-item>

            <v-list-item
              :to="{ hash: '#about' }"
              @click.native="forceScroll('about')"
            >
              <v-list-item-title>About</v-list-item-title>
            </v-list-item>

            <v-list-item
              :to="{ hash: '#projects' }"
              @click.native="forceScroll('projects')"
            >
              <v-list-item-title>Projects</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-col>

      <v-col cols="8"></v-col>

      <v-col>
        <v-row justify="end">
          <v-img
            contain
            lazy-src="/img/icons/favicon-16x16.png"
            max-height="32"
            max-width="32"
            src="/img/icons/favicon-32x32.png"
          ></v-img>
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
  computed: {},
  data: () => ({}),
  methods: {
    forceScroll(hash) {
      if (`#${hash}` !== window.location.hash) {
        return;
      }

      const element = document.getElementById(hash);

      if (element) {
        element.scrollIntoView();
      }
    },
  },
});
</script>
