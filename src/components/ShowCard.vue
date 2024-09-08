<template>
  <div :class="ratingClass">
    <img :src="show.image.original" alt="Show Image" />
    <h2 class="card-title">{{ show.name }}</h2>
    <p class="card-text">Genres: {{ show.genres.join(', ') }}</p>
    <p class="card-text">{{ show.summary }}</p>
    <p class="card-text">Rating: {{ show.rating.average }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue';
import { Show } from '../types/Show';

export default defineComponent({
  props: {
    show: {
      type: Object as PropType<Show>,
      required: true,
    },
  },

  setup(props) {
    const ratingClass = computed(() => {
      const rating = props.show.rating.average;
      if (rating === null || rating === undefined) return 'bg-secondary';
      if (rating < 6) return 'bg-danger';
      if (rating >= 6 && rating <= 8) return 'bg-warning text-dark';
      if (rating > 8) return 'bg-success';
      return 'bg-secondary';
    });

    return {
      ratingClass,
    };
  },
});
</script>

<style scoped>
/* Add your styles here */
</style>
