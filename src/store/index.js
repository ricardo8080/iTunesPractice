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
  mutations: {},
  actions: {},
  modules: {}
});
