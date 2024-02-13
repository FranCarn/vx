import { createStore } from "vuex";

const store = createStore({
  state: {
    count: 1,
    lastMutation: "none",
  },

  mutations: {
    increment(state) {
      state.count++;
    },
  },
});

export default store;
