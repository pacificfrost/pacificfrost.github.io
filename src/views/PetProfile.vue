<template>
  <v-container fluid fill-height>
    <v-card elevation="24" class="mx-auto">
      <v-carousel
        :continuous="false"
        :show-arrows="false"
        delimiter-icon="mdi-minus"
        height="300"
        hide-delimiter-background
      >
        <v-carousel-item
          :key="i"
          :src="image"
          reverse-transition="fade-transition"
          transition="fade-transition"
          v-for="(image, i) in pet.images"
        ></v-carousel-item>
      </v-carousel>

      <v-col cols="12">
        <h2 class="text-h4">{{ pet.name }}</h2>

        <v-flex>
          <v-row justify="space-between" class="ma-0 my-4">
            <v-card tile class="flex-grow-1 pa-2" elevation="0">
              Breed:
              <h2 class="text-h5">{{ pet.breed }}</h2>
            </v-card>

            <v-card tile class="flex-grow-1 pa-2" elevation="0">
              Weight:
              <h2 class="text-h5">{{ pet.weight }}</h2>
            </v-card>

            <v-card tile class="flex-grow-1 pa-2" elevation="0">
              Age:
              <h2 class="text-h5">{{ pet.age }}</h2>
            </v-card>

            <v-card tile class="flex-grow-1 pa-2" elevation="0">
              Friendly:
              <h2 class="text-h5">
                <v-icon color="green" v-if="pet.social">check</v-icon>
                <v-icon color="red" v-else>cross</v-icon>
              </h2>
            </v-card>
          </v-row>
        </v-flex>

        <v-flex>
          <v-row class="mx-0" align="center" justify="space-between">
            <v-avatar>
              <v-img
                src="https://myesadoctor.com/wp-content/uploads/2020/04/client-1y.webp"
              ></v-img>
            </v-avatar>

            <v-col class="pa-0">
              <v-card-title>{{ pet.contact.name }}</v-card-title>
              <v-card-subtitle>{{ pet.contact.phone }}</v-card-subtitle>
            </v-col>

            <v-btn color="ml-12 green" fab small
              ><v-icon class="white--text">phone</v-icon></v-btn
            >

            <v-btn color="ml-4 blue" fab small
              ><v-icon class="white--text">mail</v-icon></v-btn
            >
          </v-row>
        </v-flex>

        <v-flex>
          <v-row class="mx-0" align="center" justify="space-between">
            <v-avatar color="blue">
              <v-icon class="white--text">local_hospital</v-icon>
            </v-avatar>

            <v-col class="pa-0">
              <v-card-title>Vetinary Contact</v-card-title>
              <v-card-subtitle>
                <span>{{ pet.contact.vetContact.address }}</span>
                <br />
                <span>{{ pet.contact.vetContact.phone }}</span>
              </v-card-subtitle>
            </v-col>

            <v-btn color="ml-12 green" fab small
              ><v-icon class="white--text">phone</v-icon></v-btn
            >
          </v-row>
        </v-flex>

        <h5 class="text-h6">Description</h5>
        <p class="text-body1">{{ pet.description }}</p>

        <h5 class="text-h6">Location</h5>
      </v-col>

      <google-map></google-map>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { differenceInYears, parse } from 'date-fns';

import Pet from '@/models/Pet';
import { ActionTypes as PetActions } from '@/store/modules/pet/actions';

import GoogleMap from '@/components/GoogleMap.vue';

export default Vue.extend({
  components: {
    'google-map': GoogleMap,
  },
  beforeMount: function() {
    this._getPets();
  },
  data: () => ({
    loading: true,
    pet: new Pet(),
  }),
  name: 'PetProfile',
  methods: {
    async _getPets() {
      this.loading = true;

      try {
        await this.$store.dispatch(PetActions.REQUEST_PETS).then(() => {
          this.pet = this.$store.getters.getPet(this.$route.params.id);

          this._getPetAge();

          this.loading = false;
        });
      } catch (e) {
        this.loading = false;
      }
    },
    _getPetAge() {
      const dateOfBirth = parse(this.pet.dob, 'MM/yy', new Date());
      const today = new Date();
      const diff = differenceInYears(today, dateOfBirth);

      this.$set(this.pet, 'age', diff);
    },
  },
});
</script>
