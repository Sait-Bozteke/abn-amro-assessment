import { defineStore } from 'pinia';

export const useGenreStore = defineStore('genreStore', {
  state: () => ({
    genres: ['Drama', 'Comedy', 'Action'],
  }),
});
