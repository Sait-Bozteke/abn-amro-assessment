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
