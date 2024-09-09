import { defineStore } from 'pinia';
import { ref } from 'vue';
import {
  getAllShows,
  getShowById,
  searchShowByName,
} from '../services/showService';
import { Show } from '../types/Show';

export const useShowStore = defineStore('showStore', () => {
  const shows = ref<Show[]>([]);
  const selectedShow = ref<Show | null>(null);
  const loading = ref(false);
  const error = ref<string | null>(null);

  const fetchAllShows = async () => {
    loading.value = true;
    error.value = null;
    try {
      shows.value = await getAllShows();
    } catch {
      error.value = 'Failed to fetch shows';
    } finally {
      loading.value = false;
    }
  };

  const fetchShowById = async (id: number) => {
    loading.value = true;
    error.value = null;
    try {
      selectedShow.value = await getShowById(id);
    } catch (err) {
      console.error(err);
      error.value = 'Failed to fetch show details';
    } finally {
      loading.value = false;
    }
  };

  const searchShows = async (query: string) => {
    loading.value = true;
    error.value = null;
    try {
      shows.value = await searchShowByName(query);
    } catch {
      error.value = 'Failed to search shows';
    } finally {
      loading.value = false;
    }
  };

  return {
    shows,
    selectedShow,
    loading,
    error,
    fetchAllShows,
    fetchShowById,
    searchShows,
  };
});
