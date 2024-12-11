import Vuex from "vuex";
import axios from "axios";

export default new Vuex.Store({
  state: {
    ceps: [],
  },
  mutations: {
    SET_CEPS(state, ceps) {
      state.ceps = ceps;
    },
  },
  actions: {
    async fetchCep({ commit }, cep) {
      try {
        // Requisição direta à API do ViaCEP
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        commit("SET_CEPS", [...this.state.ceps, response.data]);
      } catch (error) {
        console.error("Erro ao buscar CEP:", error);
      }
    },
  }
});
