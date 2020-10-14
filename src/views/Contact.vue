<template>
  <v-container>
    <v-col>
      <v-row justify="center">
        <v-col cols="12" sm="10">
          <h4 class="text-h4 text-center mb-2">Contact</h4>

          <p class="text-body-2 text-center">
            Want to know more? Perhaps we can meet over tea! You can contact me
            in any of the following ways.
          </p>
        </v-col>
      </v-row>

      <v-row justify="center" align="center">
        <a class="link text-subtitle-1 black--text ma-4" href="tel:14034657695">
          <v-avatar class="ma-2" color="teal" small>
            <v-icon dark>phone</v-icon> </v-avatar
          >Call me!</a
        >

        <a
          class="link text-subtitle-1 black--text ma-4"
          href="mailto:alisdair.frost@gmail.com"
        >
          <v-avatar class="ma-2" color="teal" small>
            <v-icon dark>email</v-icon> </v-avatar
          >Email me!</a
        >

        <a
          class="link text-subtitle-1 black--text ma-4"
          href="https://www.linkedin.com/in/pacificfrost/"
          target="_blank"
        >
          <v-avatar class="ma-2" color="teal" small>
            <v-icon dark>link</v-icon> </v-avatar
          >Connect via linkedIn</a
        >
      </v-row>
    </v-col>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Contact',
});
</script>

<style lang="scss" scoped>
.link {
  text-decoration: none;
}
</style>
