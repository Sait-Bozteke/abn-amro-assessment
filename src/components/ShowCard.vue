<template>
  <div class="card">
    <img :src="show.image?.medium" class="card-img-top" alt="Show Image" />
    <div class="card-body">
      <h5 class="card-title">{{ show.name }}</h5>
      <p class="card-text">Genres: {{ show.genres.join(", ") }}</p>

      <p class="card-text">
        <strong>Rating:</strong>
        <span :class="ratingClass" class="badge rounded-pill">{{
          show.rating.average 
        }}</span>
      </p>

      <router-link
        :to="{ name: 'ShowDetails', params: { id: show.id } }"
        class="btn btn-primary"
        >Details</router-link
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from "vue";
import { Show } from "../types/Show";

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
      if (rating === null || rating === undefined) return "bg-secondary";
      if (rating < 6) return "bg-danger";
      if (rating >= 6 && rating <= 8) return "bg-warning text-dark";
      if (rating > 8) return "bg-success";
    });

    return {
      ratingClass,
    };
  },
});
</script>

<style scoped>
.card-img-top {
  object-fit: cover;
  height: 200px;
  width: 100%;
}
</style>
