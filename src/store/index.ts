import Vue from 'vue';
import Vuex from 'vuex';

import Pet from '@/store/modules/pet/pet.store';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Pet,
  },
});
