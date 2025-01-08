import { createStore } from "vuex";
import data from "../data.json";

const store = createStore({
  state() {
    return {
      data: data,
    };
  },
  getters: {
    getMissionById: (state) => (id) => {
      return state.data.find((mission) => mission.id === parseInt(id));
    },
  },
});

export default store;
