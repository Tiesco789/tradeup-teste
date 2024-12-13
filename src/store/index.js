import Vuex from "vuex";
import axios from "axios";

export default new Vuex.Store({
  state: {
    ceps: [],
    errorMessage: "",
  },
  mutations: {
    SET_CEPS(state, ceps) {
      state.ceps = ceps;
    },
    SET_ERROR(state, message) {
      state.errorMessage = message;
    }
  },
  actions: {
    async fetchCep({ commit }, cep) {
      try {
        // Requisição direta à API do ViaCEP
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
       if (response.data.erro) {
          commit("SET_ERROR", "⛒ CEP não encontrado ou inválido. ⛒");
          commit("SET_CEPS", []); // Limpa os CEPs anteriores
        } else {
          commit("SET_ERROR", ""); // Limpa a mensagem de erro
          commit("SET_CEPS", [response.data]); // Atualiza os CEPs
        }
      } catch (error) {
        commit("SET_ERROR", "⛒ Erro ao buscar CEP. Tente novamente. ⛒");
        commit("SET_CEPS", []); // Limpa os CEPs anteriores
      }
    },
  },
});
