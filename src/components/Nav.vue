<template>
  <v-row class="px-2" justify="space-between" align="center">
    <v-btn fab text to="/"><v-icon x-large>$vuetify.icons.mapet</v-icon></v-btn>

    <v-row justify="center">
      <v-btn rounded text to="about">About</v-btn>
      <v-btn rounded text to="how-it-works">How it Works</v-btn>
      <v-btn rounded text to="locate">Locate Pet</v-btn>
    </v-row>

    <v-menu
      :close-on-click="false"
      :close-on-content-click="false"
      offset-y
      v-model="loginMenu"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="mr-2" outlined rounded v-bind="attrs" v-on="on">
          <v-icon left small>lock</v-icon> Login
        </v-btn>
      </template>

      <v-card min-width="280">
        <v-card-title>Login</v-card-title>
        <v-form ref="login" v-model="login.valid">
          <v-card-text>
            <v-text-field
              :rules="[formRules.required]"
              filled
              label="Username"
            ></v-text-field>
            <v-text-field
              filled
              :rules="[formRules.required]"
              label="Password"
              type="password"
            ></v-text-field>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn class="pr-3" @click="loginMenu = false" text rounded>
              <v-icon left small>close</v-icon> Cancel
            </v-btn>

            <v-btn
              :disabled="!login.valid"
              class="pr-3"
              :dark="login.valid"
              color="deep-purple"
              rounded
            >
              <v-icon left small>check</v-icon> Login
            </v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-menu>

    <v-menu
      :close-on-click="false"
      :close-on-content-click="false"
      offset-y
      v-model="signUpMenu"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="deep-purple" dark rounded v-bind="attrs" v-on="on">
          Sign Up
        </v-btn>
      </template>

      <v-card min-width="280">
        <v-card-title>Sign Up</v-card-title>
        <v-form ref="signUp" v-model="signUp.valid">
          <v-card-text>
            <v-text-field
              filled
              :rules="[formRules.required, formRules.minLength]"
              label="Username"
              v-model="signUp.username"
            ></v-text-field>
            <v-text-field
              filled
              :rules="[
                formRules.required,
                formRules.password,
                formRules.minLength,
              ]"
              label="Password"
              type="password"
              v-model="signUp.password"
            ></v-text-field>
            <v-text-field
              filled
              :rules="[
                formRules.required,
                formRules.password,
                formRules.minLength,
                confirmPasswordRules,
              ]"
              label="Confirm Password"
              type="password"
              v-model="signUp.confirmPassword"
            ></v-text-field>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn class="pr-3" @click="signUpMenu = false" text rounded>
              <v-icon left small>close</v-icon> Cancel
            </v-btn>

            <v-btn
              :disabled="!signUp.valid"
              class="pr-3"
              :dark="signUp.valid"
              color="deep-purple"
              rounded
            >
              <v-icon left small>check</v-icon> Sign Up
            </v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-menu>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Nav',
  components: {},
  computed: {
    confirmPasswordRules() {
      return () =>
        this.signUp.username === this.signUp.confirmPassword ||
        'Password must match';
    },
  },
  data: () => ({
    formRules: {
      required: (value: string) => !!value || 'Required',
      minLength: (value: string) =>
        value.length >= 8 || 'Must be at least 8 characters long',
      password: (value: string) =>
        new RegExp(/^/).test(value) ||
        'Must have uppercase, lowercase, number and symbols',
    },
    login: {
      username: '',
      password: '',
      valid: false,
    },
    loginMenu: false,
    signUp: {
      username: '',
      password: '',
      confirmPassword: '',
      valid: false,
    },
    signUpMenu: false,
  }),
});
</script>
