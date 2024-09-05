<template>
    <div class="container my-4">
      <h2 class="mb-4">{{ genre }} Shows</h2>
      <div v-if="isLoading" class="d-flex justify-content-center mb-4">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
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
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, onMounted, ref } from 'vue';
  import { useRoute } from 'vue-router';
  import ShowCard from '../components/ShowCard.vue';
  import { Show } from '../types/Show';
  import { searchShowByName } from '../utils/apiUtils';
  
  export default defineComponent({
    components: {
      ShowCard,
    },
    setup() {
      const route = useRoute();
      const genre = route.params.genre as string;
      const shows = ref<Show[]>([]);
      const isLoading = ref(true);
      const error = ref<string | null>(null);
  
      onMounted(async () => {
        isLoading.value = true;
        error.value = null;
        try {
          const data = await searchShowByName(genre); // Modify to filter by genre
          shows.value = data;
          if (data.length === 0) {
            error.value = `No shows found for "${genre}"`;
          }
        } catch {
          error.value = 'Failed to load shows. Please try again later';
        } finally {
          isLoading.value = false;
        }
      });
  
      return {
        genre,
        shows,
        isLoading,
        error,
      };
    },
  });
  </script>
  