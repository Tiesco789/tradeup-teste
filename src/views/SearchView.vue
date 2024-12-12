<template>
  <div>
    <h1>Buscar CEP</h1>
    <form @submit.prevent="searchCep">
      <input v-model="cep" placeholder="Digite o CEP" />
      <button type="submit">Buscar</button>
    </form>
    <ul>
      <li v-for="(cep, index) in ceps" :key="index">
        <!-- CEP: 89.218-000 -->
        <!-- UF, Localidade -->
        <!-- Bairro, Logradouro - Complemento -->
        <h4>{{ cep.cep }}</h4>
        <p>{{ cep.uf }}, {{ cep.localidade }}</p>
        <span>{{ cep.bairro }}, {{ cep.logradouro }} - {{ cep.complemento }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      cep: "",
    };
  },
  computed: {
    ...mapState(["ceps"]),
  },
  methods: {
    ...mapActions(["fetchCep"]),
    searchCep() {
      this.fetchCep(this.cep);
      this.cep = "";
    },
  },
};
</script>
