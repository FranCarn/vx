import { createStore } from "vuex";

const store = createStore({
  state: {
    count: 1,
    lastMutation: "none",
  },

  mutations: {
    increment(state) {
      state.lastMutation = "Increment";
      state.count++;
    },
    incrementBy(state, value) {
      state.lastMutation = "Increment By";
      state.count += value;
    },
    decrement(state) {
      if (state.count) {
        state.lastMutation = "Decrement";
        state.count--;
      }
      return;
    },
  },
});

export default store;
