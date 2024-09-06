<template>
  <div class="container my-4">
    <h2 class="mb-4">{{ genre }} Shows</h2>
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
import { defineComponent, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import ShowCard from "../components/ShowCard.vue";
import { useShowStore } from "../store/showStore";

export default defineComponent({
  components: {
    ShowCard,
  },
  setup() {
    const showStore = useShowStore();
    const route = useRoute();
    const genre = route.params.genre as string;
    const filteredShows = ref(
      showStore.shows.filter((show) => show.genres.includes(genre))
    );

    onMounted(showStore.fetchAllShows);

    return {
      genre,
      filteredShows,
      loading: showStore.loading,
      error: showStore.error,
    };
  },
});
</script>
