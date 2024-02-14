<template>
  <h1>Counter - Vuex</h1>
  <h2>Direct Access: {{ $store.state.counter.count }}</h2>
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
  <h2>Direct Getter {{ $store.getters["counter/squareCount"] }}</h2>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  // computed: mapState(["count"]),

  computed: {
    countComputed() {
      return this.$store.state.counter.count;
    },
    ...mapState("counter", ["count", "lastMutation", "isLoading"]),
    // renamed
    ...mapState({
      counter: (state) => state.counter.count,
      lastMutacion: (state) => state.counter.lastMutation,
    }),
  },
  methods: {
    increment() {
      this.$store.commit("counter/increment");
    },
    decrement() {
      this.$store.commit("counter/decrement");
    },
    incrementBy(value) {
      this.$store.commit("counter/incrementBy", value);
      // this.randomInt()
    },
    ...mapActions("counter", ["incrementRandomInt"]),
    // renamed
    ...mapActions("counter", {
      randomInt: "incrementRandomInt",
    }),
  },
};
</script>
