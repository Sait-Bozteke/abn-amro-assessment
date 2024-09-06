<template>
  <div class="input-group mb-3">
    <input
      v-model="searchQuery"
      @input="handleSearch"
      type="text"
      class="form-control"
      placeholder="Search for TV shows"
    />
    <button @click="handleSearch" class="btn btn-primary">Search</button>
  </div>
  <div v-if="isLoading" class="spinner-border text-primary" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div v-if="error" class="alert alert-danger">
    {{ error }}
  </div>
  <div class="row">
    <ShowCard
      v-for="show in shows"
      :key="show.id"
      :show="show"
      class="col-md-4 mb-4"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted } from 'vue';
import { useShowStore } from '../store/showStore';
import ShowCard from './ShowCard.vue';

export default defineComponent({
  components: {
    ShowCard,
  },

  setup() {
    const showStore = useShowStore();
    const searchQuery = ref('');
    
    // Computed properties for easier access to store state
    const shows = computed(() => showStore.shows);
    const isLoading = computed(() => showStore.loading);
    const error = computed(() => showStore.error);
    
    const fetchShows = async () => {
      await showStore.fetchAllShows();
    };

    const handleSearch = async () => {
      if (!searchQuery.value.trim()) {
        // If search query is empty, fetch all shows
        await fetchShows();
        return;
      }
      await showStore.searchShows(searchQuery.value);
    };

    onMounted(async () => {
      await fetchShows();
    });

    return {
      shows,
      searchQuery,
      isLoading,
      error,
      handleSearch,
    };
  },
});
</script>

<style scoped>
/* Add any additional styles if needed */
</style>
