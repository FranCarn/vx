import getRandomInt from "@/helpers/getRandomInt";
import { createStore } from "vuex";

const store = createStore({
  state: {
    count: 1,
    lastMutation: "none",
    isLoading: false,
  },

  mutations: {
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
  },
  actions: {
    async incrementRandomInt({ commit }) {
      try {
        commit("changeLoading");
        const randomInt = await getRandomInt();
        commit("incrementBy", randomInt);
      } catch (error) {
        console.log(error);
      } finally {
        commit("changeLoading");
      }
    },
  },
  getters: {
    squareCount(state) {
      return state.count * state.count;
    },
  },
});

export default store;
