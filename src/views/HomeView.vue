<template>
  <div class="container">
    <h1 class="my-4">TV Shows</h1>
    <ShowList />
  </div>
</template>
<script>
import ShowList from '../components/ShowList.vue';

export default {
  components: {
    ShowList
  },
};
</script>
