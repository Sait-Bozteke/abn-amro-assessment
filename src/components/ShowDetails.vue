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
        <p><strong>Genres:</strong> {{ show.genres?.join(", ") || "N/A" }}</p>
        <p><strong>Rating:</strong> {{ show.rating?.average || "N/A" }}</p>
      </div>
    </div>
  </div>
  <div v-else>
    <p v-if="loading">Loading...</p>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, computed } from "vue";
import { useRoute } from "vue-router";
import { useShowStore } from "../store/showStore";

export default defineComponent({
  setup() {
    const showStore = useShowStore();
    const route = useRoute();
    const showId = ref(Number(route.params.id));
    const error = ref<string | null>(null);
    const loading = ref(true);

    const fetchShowId = async () => {
      try {
        await showStore.fetchShowById(showId.value);
      } catch (err) {
        error.value = "Error fetching show data";
      } finally {
        loading.value = false;
      }
    };

    onMounted(async () => {
      await fetchShowId();
    });

    const show = computed(() => showStore.selectedShow);

    return {
      show,
      loading,
      error,
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
