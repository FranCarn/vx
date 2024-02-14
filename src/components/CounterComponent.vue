<template>
  <h1>Counter - Vuex</h1>
  <h2>Direct Access: {{ $store.state.count }}</h2>
  <h2>Computed: {{ countComputed }}</h2>
  <button @click="increment" :disabled="isLoading">Increment +1</button>
  <button @click="incrementBy(5)" :disabled="isLoading">Increment +5</button>
  <button @click="incrementRandomInt" :disabled="isLoading">Random</button>
  <button @click="randomInt" :disabled="isLoading">Random renamed</button>
  <button @click="decrement" :disabled="isLoading">Decrement -1</button>
  <h1>MapState</h1>
  <h2>MapState: {{ count }}</h2>
  <h2>MapState: {{ counter }}</h2>
  <h2>lastMutation: {{ lastMutation }}</h2>
  <h2>lastMutation: {{ lastMutacion }}</h2>
  <h2>Direct Getter {{ $store.getters.squareCount }}</h2>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  // computed: mapState(["count"]),

  computed: {
    countComputed() {
      return this.$store.state.count;
    },
    ...mapState(["count", "lastMutation", "isLoading"]),
    // renamed
    ...mapState({
      counter: (state) => state.count,
      lastMutacion: (state) => state.lastMutation,
    }),
  },
  methods: {
    increment() {
      this.$store.commit("increment");
    },
    decrement() {
      this.$store.commit("decrement");
    },
    incrementBy(value) {
      this.$store.commit("incrementBy", value);
      // this.randomInt()
    },
    ...mapActions(["incrementRandomInt"]),
    // renamed
    ...mapActions({
      randomInt: "incrementRandomInt",
    }),
  },
};
</script>
