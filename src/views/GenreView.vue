<template>
  <div class="container my-4">
    <h2 class="mb-4">{{ genre }} Shows</h2>

    <div class="input-group mb-4">
      <input
        v-model="searchQuery"
        type="text"
        class="form-control"
        placeholder="Search for shows"
      />
      <button class="btn btn-primary">Search</button>
    </div>

    <div v-if="loading" class="d-flex justify-content-center mb-4">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>

    <div v-if="error" class="alert alert-danger">
      {{ error }}
    </div>

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

    const searchQuery = ref('');

    const filteredShows = computed(() => {
      const query = searchQuery.value.toLowerCase();
      return showStore.shows.filter(
        (show) =>
          show.genres.includes(genre) &&
          show.name.toLowerCase().includes(query),
      );
    });

    onMounted(() => {
      showStore.fetchAllShows();
    });

    return {
      genre,
      searchQuery,
      filteredShows,
      loading: showStore.loading,
      error: showStore.error,
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
  border-radius: 0.25rem 0 0 0.25rem;
}

.input-group button {
  border-radius: 0 0.25rem 0.25rem 0;
}
</style>
