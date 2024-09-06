<template>
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
import { defineComponent, computed, onMounted } from 'vue';
import { useShowStore } from '../store/showStore';
import ShowCard from './ShowCard.vue';

export default defineComponent({
  components: {
    ShowCard,
  },

  setup() {
    const showStore = useShowStore();
    
    // Computed properties for easier access to store state
    const shows = computed(() => showStore.shows);
    const isLoading = computed(() => showStore.loading);
    const error = computed(() => showStore.error);
    
    const fetchShows = async () => {
      await showStore.fetchAllShows();
    };

    onMounted(async () => {
      await fetchShows();
    });

    return {
      shows,
      isLoading,
      error,
    };
  },
});
</script>

