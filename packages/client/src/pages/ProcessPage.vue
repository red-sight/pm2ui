<template>
  <div>Process</div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {};
  },

  computed: {
    id() {
      return this.$route.params.id;
    },
  },

  mounted() {
    console.log(this.id);
  },
});
</script>
