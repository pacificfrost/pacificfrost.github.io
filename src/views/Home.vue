<template>
  <v-row>
    <v-col class="hero pt-0" cols="12">
      <v-row
        align="center"
        class="hero__row hero__row--gradient pa-8"
        justify="space-between"
      >
        <div>
          <h2 class="d-inline-block text-h2 mb-4 font-weight-bold">
            Keep your friends close
          </h2>

          <br />

          <h4 class="d-inline-block text-h6">Keep your fur-iends closer</h4>

          <br />

          <v-btn class="mt-8" dark color="deep-purple" elevation="12" raised
            >Get a Tag</v-btn
          >
        </div>

        <v-card rounded elevation="4">
          <v-img max-width="480" src="@/assets/dog-hero.jpg"></v-img>
        </v-card>
      </v-row>

      <v-row class="hero__row pa-8" align="center">
        <v-card rounded elevation="4">
          <v-img max-width="480" src="@/assets/nfc.png"></v-img>
        </v-card>

        <v-col>
          <v-row class="pa-6" align="start" justify="start">
            <v-icon class="mt-6" x-large>nfc</v-icon>

            <v-col>
              <h2 class="d-inline-block text-h2 mb-4 font-weight-bold">
                Tap Technology
              </h2>

              <br />

              <p class="d-inline-block text-body-1">
                Pets are traditionally micro-chipped by their vet, but that
                information is inaccessible by you; the owner! Mapet looks to
                change that. Mapet tags give you access to as much or as little
                information about your pet as you see fit. Simply tap your smart
                device and your pets location gets updated, and you can view
                their information instantly.
              </p>

              <br />

              <v-btn class="mt-8" color="deep-purple" dark elevation="12" raised
                >Learn More</v-btn
              >
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Home',
  components: {},
  data: () => ({}),
});
</script>

<style lang="scss">
$gradientList: #f44336, #9c27b0;

.hero {
  box-sizing: border-box;
  height: calc(100vh - 56px - 24px);

  &__row {
    min-height: 65%;

    &--gradient {
      @include gradient(45deg, $gradientList);
    }
  }

  @media screen and (min-width: 960px) {
    .hero {
      height: calc(100vh - 64px - 24px);
    }
  }
}
</style>
