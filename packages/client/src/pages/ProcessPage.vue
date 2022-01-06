<template>
  <div>
    <pre>{{ process }}</pre>
  </div>
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
    process() {
      return this.$store.state.processes.list
        ? this.$store.state.processes.list[this.id]
        : {};
    },
  },

  methods: {},

  mounted() {
    console.log(this.id);
  },
});
</script>
