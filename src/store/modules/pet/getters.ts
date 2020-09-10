import { GetterTree } from 'vuex';

import Pet from '@/models/Pet';
import { State } from '@/store/modules/pet/state';

export type Getters = {
  getPet: (state: State) => (id: string) => Pet;
};

export const getters: GetterTree<State, State> & Getters = {
  getPet: state => id => {
    return state.pets.find(pet => pet.id === id) || new Pet();
  },
};
