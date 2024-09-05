<template>
  <div v-if="show" class="container my-4">
    <div class="row">
      <div class="col-md-4">
        <img
          :src="show.image?.medium"
          class="img-fluid rounded"
          alt="Show Image "
        />
      </div>
      <div class="card-body">
        <h5 class="card-title">{{ show.name }}</h5>
        <p class="card-text" v-html="show.summary"></p>
        <p><strong>Genres:</strong>{{ show.genres.join(", ") }}</p>
        <p><strong>Rating:</strong>{{ show.rating.average }}</p>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { Show } from "../types/Show";
import { getShowById } from "../utils/apiUtils";

export default defineComponent({
  setup() {
    const route = useRoute();
    const show = ref<Show | null>(null);

    onMounted(async () => {
      const id = Number(route.params.id);
      show.value = await getShowById(id);
    });

    return {
      show,
    };
  },
});
</script>
<style scoped>
.img-fluid {
  max-height: 500px;
  object-fit: cover;
}
</style>
