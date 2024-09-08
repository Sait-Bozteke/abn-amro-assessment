<template lang="">
  <router-link
    :to="{ name: 'GenreView', params: { genre } }"
    class="card text-decoration-none shadow-lg"
    style="height: 200px"
  >
    <div class="card-body">
      <h5 class="card-title">{{ genre }}</h5>
      <p class="card-text">Explore the best {{ genre }} shows.</p>
    </div>
  </router-link>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  props: {
    genre: {
      type: String as PropType<string>,
      required: true,
    },
  },
});
</script>
