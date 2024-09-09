import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useGenreStore = defineStore('genreStore', () => {
  const genres = ref(['Drama', 'Comedy', 'Action']);

  return { genres };
});
