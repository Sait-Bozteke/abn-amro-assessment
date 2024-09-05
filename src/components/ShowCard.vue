<template>
  <div class="card">
    <img :src="show.image?.medium" class="card-img-top" alt="Show Image">
    <div class="card-body">
      <h5 class="card-title">{{ show.name }}</h5>
      <p class="card-text">{{ show.genres.join(', ') }}</p>
      <router-link :to="{ name: 'ShowDetails', params: { id: show.id } }" class="btn btn-primary">Details</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Show } from '../types/Show';

export default defineComponent({
  props: {
    show: {
      type: Object as PropType<Show>,
      required: true,
    },
  },
});
</script>

<style scoped>
.card {
  text-decoration: none;
  color: inherit;
}
.card-img-top {
  height: 200px;
  object-fit: cover;
}
</style>
