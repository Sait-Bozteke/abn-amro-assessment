<template>
  <div class="container my-4">
    <h1 class="mb-4">Categories</h1>
    <div class="row">
      <div class="col-md-4 mb-3" v-for="category in categories" :key="category">
        <router-link :to="{ name: 'GenreView', params: { genre: category } }" class="card text-center h-100">
          <div class="card-body">
            <h5 class="card-title">{{ category }}</h5>
            <p class="card-text">Explore {{ category }} TV shows</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    const categories = ['Drama', 'Comedy', 'Action', 'Thriller', 'Sci-Fi'];

    return {
      categories
    };
  }
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
