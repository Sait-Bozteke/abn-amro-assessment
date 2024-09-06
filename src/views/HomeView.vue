<template>
  <div class="container my-4">
    <h1 class="text-center mb-4">Select a Genre</h1>
    <div class="row">
      <CategoryCard
        v-for="genre in genres"
        :key="genre"
        :genre="genre"
        class="col-md-6 col-lg-4 mb-4"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CategoryCard from "../components/CategoryCard.vue";
import { useGenreStore } from "../store/genreStore";

export default defineComponent({
  components: {
    CategoryCard,
  },
  setup() {
    const genreStore = useGenreStore();
    return {
      genres: genreStore.genres,
    };
  },
});
</script>

<style scoped>
.card {
  text-decoration: none;
  color: inherit;
  transition: transform 0.3s;
}
.card:hover {
  transform: scale(1.05);
}
</style>
