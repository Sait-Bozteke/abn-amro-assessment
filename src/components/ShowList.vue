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
import { defineComponent, onMounted, ref } from "vue";
import ShowCard from "./ShowCard.vue";
import { Show } from "../types/Show";
import { getAllShows, searchShowByName } from "../utils/apiUtils";

export default defineComponent({
  components: {
    ShowCard,
  },

  setup() {
    const shows = ref<Show[]>([]);
    const searchQuery = ref("");
    const isLoading = ref(true);
    const error = ref<string | null>(null);

    const fetchShows = async () => {
      isLoading.value = true;
      try {
        const data = await getAllShows();
        shows.value = data;
      } catch (e) {
        error.value = "Failed to load shows. Please try again later";
      } finally {
        isLoading.value = false;
      }
    };

    const handleSearch = async () => {
      if (!searchQuery.value.trim()) {
        fetchShows();
        return;
      }
      isLoading.value = true;
      try {
        const data = await searchShowByName(searchQuery.value);
        shows.value = data;

        if (data.length === 0) {
          error.value = `No shows found for "${searchQuery.value}"`;
        } else {
          error.value = null;
        }
      } catch {
        error.value = "Failed to search shows. Please try again later";
      } finally {
        isLoading.value = false;
      }
    };

    onMounted(async () => {
      fetchShows();
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
