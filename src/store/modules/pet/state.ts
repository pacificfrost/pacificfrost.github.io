import Pet from '@/models/Pet';

export const state = {
  pets: [new Pet()],
};

export type State = typeof state;
