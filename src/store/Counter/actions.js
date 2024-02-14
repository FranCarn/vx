import getRandomInt from "@/helpers/getRandomInt";

export default {
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
};
