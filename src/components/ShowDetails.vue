<template>
  <div v-if="show" class="container my-4">
    <div class="row">
      <div class="col-md-4 mb-4">
        <img
          :src="show.image?.medium"
          class="img-fluid rounded show-image"
          alt="Show Image"
        />
      </div>
      <div class="col-md-8">
        <h2>{{ show.name }}</h2>
        <p v-html="show.summary" class="mb-3"></p>
        <p><strong>Genres:</strong> {{ show.genres.join(", ") }}</p>
        <p><strong>Rating:</strong> {{ show.rating.average }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { useShowStore } from "../store/showStore";

export default defineComponent({
  setup() {
    const showStore = useShowStore();
    const route = useRoute();
    const showId = ref(Number(route.params.id));

    onMounted(async () => {
      await showStore.fetchShowById(showId.value);
    });

    return {
      show: showStore.selectedShow,
      loading: showStore.loading,
      error: showStore.error,
    };
  },
});
</script>

<style scoped>
.show-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
