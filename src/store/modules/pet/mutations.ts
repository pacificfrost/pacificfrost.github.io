import { MutationTree } from 'vuex';

import Pet from '@/models/Pet';
import { State } from '@/store/modules/pet/state';

export enum MutationTypes {
  UPDATE_PETS = 'UPDATE_PETS',
}

export type Mutations<S = State> = {
  [MutationTypes.UPDATE_PETS](state: S, payload: Array<Pet>): void;
};

export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.UPDATE_PETS](state, payload: Array<Pet>) {
    state.pets = [...payload];
  },
};
