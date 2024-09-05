<template>
    <div v-if="show" class="container my-4">
      <div class="row">
        <div class="col-md-4 mb-4">
          <img :src="show.image?.original" class="img-fluid rounded" alt="Show Image" />
        </div>
        <div class="col-md-8">
          <h2>{{ show.name }}</h2>
          <p v-html="show.summary" class="mb-3"></p>
          <p><strong>Genres:</strong> {{ show.genres.join(', ') }}</p>
          <p><strong>Rating:</strong> {{ show.rating.average }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, onMounted, ref } from 'vue';
  import { useRoute } from 'vue-router';
  import { Show } from '../types/Show';
  import { getShowById } from '../utils/apiUtils';
  
  export default defineComponent({
    setup() {
      const route = useRoute();
      const show = ref<Show | null>(null);
  
      onMounted(async () => {
        const id = Number(route.params.id);
        try {
          show.value = await getShowById(id);
        } catch {
        throw new Error('Failed to fetch to data')
        }
      });
  
      return {
        show
      };
    },
  });
  </script>
  