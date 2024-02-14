import { createStore } from "vuex";
import counterStore from "./Counter";

const store = createStore({
  modules: {
    counter: counterStore,
  },
});

export default store;
