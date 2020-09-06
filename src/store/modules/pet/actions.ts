import { ActionTree, ActionContext } from 'vuex';

import Pet from '@/models/Pet';
import { State } from '@/store/modules/pet/state';
import { Mutations, MutationTypes } from '@/store/modules/pet/mutations';

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, State>, 'commit'>;

export enum ActionTypes {
  REQUEST_PETS = 'REQUEST_PETS',
}

export interface Actions {
  [ActionTypes.REQUEST_PETS](
    { commit }: AugmentedActionContext,
    payload: Array<Pet>
  ): void;
}

export const actions: ActionTree<State, State> & Actions = {
  async [ActionTypes.REQUEST_PETS]({ commit }) {
    return fetch('/static/pets.json').then(async response => {
      const payload = await response.json();

      commit(MutationTypes.UPDATE_PETS, payload);
    });
  },
};
