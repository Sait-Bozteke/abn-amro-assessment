<template>
  <div>
    <ShowCard />
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import ShowCard from './ShowCard.vue'
import {Show} from '../types/Show'
import {getAllShows} from '../utils/apiUtils'

export default defineComponent({
    components: {
        ShowCard
    },
 
    setup() {
     const shows = ref<Show[]>([])
     onMounted(async () => {
shows.value = await getAllShows()
     })

     return {
        shows
     }
    }

})
</script>

