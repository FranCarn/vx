export default {
  increment(state) {
    state.lastMutation = "Increment";
    state.count++;
  },
  incrementBy(state, value) {
    state.lastMutation = "Increment By " + value;
    state.count += value;
  },
  decrement(state) {
    if (state.count) {
      state.lastMutation = "Decrement";
      state.count--;
    }
    return;
  },
  changeLoading(state) {
    state.isLoading = !state.isLoading;
  },
};
