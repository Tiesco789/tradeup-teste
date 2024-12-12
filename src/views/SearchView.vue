<template>
  <div class="search-container">
    <h1>Digite um CEP</h1>
    <form @submit.prevent="searchCep" class="form">
      <input v-model="cep" placeholder="Digite um CEP" type="number" maxlength="8" step="1" pattern="[0-9]{4}"/>
      <button type="submit">Buscar</button>
    </form>
    <ul>
      <li v-for="(cep, index) in ceps" :key="index">
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

<style lang="scss" scoped>
.search-container {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .form {
    display: flex;
    padding: 32px 64px;
    flex-direction: row;
    justify-content: center;
    align-self: center;
    width: 50%;

    input, button {
      padding: 16px 20px;
      border: none;
      outline: none;
      cursor: pointer;
      font-size: 16px;
    }

    button {
      background-color: rgb(117, 255, 133);
      border-radius: 0 8px 8px 0;
      font-weight: 600;
      color: rgb(7, 95, 18);
    }

    input[type=number]::-webkit-inner-spin-button,
    input[type=number]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        margin: 0;
    }

    input {
      width: 50%;
      background-color: rgb(255, 255, 255);
      border: 1px solid rgb(117, 255, 133);
      border-radius: 8px 0 0 8px;
      color: rgb(7, 95, 18);

      &:focus {
        box-shadow: 0 0 0 4px rgb(212, 255, 217);
        border-radius: 8px 0 0 8px;
      }
    }
  }
}
</style>
