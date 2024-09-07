<template>
  <div v-if="isLoading" class="spinner-border text-primary" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div v-if="error" class="alert alert-danger">
    {{ error }}
  </div>
  <div class="row">
    <ShowCard
      v-for="show in sortedShows"
      :key="show.id"
      :show="show"
      class="col-md-4 mb-4"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted } from 'vue';
import { useShowStore } from '../store/showStore';
import ShowCard from './ShowCard.vue';

export default defineComponent({
  components: {
    ShowCard,
  },

  setup() {
    const showStore = useShowStore();

    const shows = computed(() => showStore.shows);
    const isLoading = computed(() => showStore.loading);
    const error = computed(() => showStore.error);

    const sortedShows = computed(() => {
      return shows.value
        .filter(show => show.rating && show.rating.average !== null) // Filter out shows with no rating
        .sort((a, b) => (b.rating.average || 0) - (a.rating.average || 0));
    });

    const fetchShows = async () => {
      await showStore.fetchAllShows();
    };

    onMounted(async () => {
      await fetchShows();
    });

    return {
      sortedShows,
      isLoading,
      error,
    };
  },
});
</script>
