<template>
  <div class="container my-4">
    <h2 class="mb-4">{{ genre }} Shows</h2>

    <!-- Search Bar -->
    <div class="input-group mb-4">
      <input
        v-model="searchQuery"
        @input="handleSearch"
        type="text"
        class="form-control"
        placeholder="Search for shows"
      />
      <button @click="handleSearch" class="btn btn-primary">Search</button>
    </div>

    <!-- Loading Spinner -->
    <div v-if="loading" class="d-flex justify-content-center mb-4">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>

    <!-- Error Message -->
    <div v-if="error" class="alert alert-danger">
      {{ error }}
    </div>

    <!-- Show Cards -->
    <div class="row">
      <ShowCard
        v-for="show in filteredShows"
        :key="show.id"
        :show="show"
        class="col-md-4 mb-4"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import ShowCard from '../components/ShowCard.vue';
import { useShowStore } from '../store/showStore';

export default defineComponent({
  components: {
    ShowCard,
  },
  setup() {
    const showStore = useShowStore();
    const route = useRoute();
    const genre = route.params.genre as string;

    // Search query state
    const searchQuery = ref('');

    // Computed property to filter shows based on search query and genre
    const filteredShows = computed(() => {
      const query = searchQuery.value.toLowerCase();
      return showStore.shows.filter(show => 
        show.genres.includes(genre) &&
        show.name.toLowerCase().includes(query)
      );
    });

    // Fetch shows when component mounts
    onMounted(() => {
      showStore.fetchAllShows();
    });

    // Handle search input changes
    const handleSearch = () => {
      // The filteredShows computed property updates automatically
    };

    return {
      genre,
      searchQuery,
      filteredShows,
      loading: showStore.loading,
      error: showStore.error,
      handleSearch,
    };
  },
});
</script>

<style scoped>
.container {
  margin-top: 20px;
}

.input-group {
  max-width: 500px;
  margin: 0 auto 20px auto;
}

.input-group input {
  border-radius: 0.25rem 0 0 0.25rem; /* Rounded corners for the input */
}

.input-group button {
  border-radius: 0 0.25rem 0.25rem 0; /* Rounded corners for the button */
}
</style>
