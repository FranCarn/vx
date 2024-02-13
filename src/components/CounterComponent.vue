<template>
  <h1>Counter - Vuex</h1>
  <h2>Direct Access: {{ $store.state.count }}</h2>
  <h2>Computed: {{ countComputed }}</h2>
  <h1>MapState</h1>
  <h2>MapState: {{ count }}</h2>
  <h2>MapState: {{ counter }}</h2>
  <h2>lastMutation: {{ lastMutation }}</h2>
  <h2>lastMutation: {{ lastMutacion }}</h2>
</template>

<script>
import { mapState } from "vuex";

export default {
  // computed: mapState(["count"]),

  computed: {
    countComputed() {
      return this.$store.state.count;
    },
    ...mapState(["count", "lastMutation"]),
    // renamed
    ...mapState({
      counter: (state) => state.count,
      lastMutacion: (state) => state.lastMutation,
    }),
  },
};
</script>
