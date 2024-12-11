<template>
  <div>
    <h1>Buscar CEP</h1>
    <form @submit.prevent="searchCep">
      <input v-model="cep" placeholder="Digite o CEP" />
      <button type="submit">Buscar</button>
    </form>
    <ul>
      <li v-for="(cep, index) in ceps" :key="index">
        {{ cep.cep }} - {{ cep.logradouro }}, {{ cep.localidade }}
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
