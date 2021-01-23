import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    search_list: []
  },
  getters: {
    getSearchItemsList(state) {
      return state.search_list;
    }
  },
  mutations: {
    mutateSearchList(state, item) {
      state.search_list.push(item);
    },
    mutateDeleteItems(state) {
      if (state.search_list.length > 0) {
        state.search_list.length = 0;
      } else {
        console.log("Can't delete empty list");
      }
    }
  },
  actions: {
    addItem({ commit }, item) {
      commit("mutateSearchList", item);
    },
    deleteItems({ commit }) {
      commit("mutateDeleteItems");
    }
  },
  modules: {}
});
