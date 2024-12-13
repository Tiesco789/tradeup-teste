<template>
  <div class="search-container">
    <a href="/" class="back">🡐 Página Principal</a>

    <h1>Digite um CEP</h1>
    <form @submit.prevent="searchCep" class="form">
      <input v-model="formattedCep" placeholder="Digite um CEP" maxlength="9" pattern="[0-9]{5}-[0-9]{3}" />
      <button type="submit">Buscar</button>
    </form>

    <!-- Exibe mensagem de erro -->
    <div v-if="errorMessage" class="error-message">
      {{ errorMessage }}
    </div>

    <!-- Exibe tabela apenas se não houver erro -->
    <div v-else class="cep-container">
      <table v-for="(cep, index) in ceps" :key="index">
        <thead>
          <tr>
            <th>CEP</th>
            <th>DDD</th>
            <th>Estado</th>
            <th>Cidade</th>
            <th>Bairro</th>
            <th>Logradouro</th>
            <th>Complemento</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{ cep.cep }}</td>
            <td>{{ cep.ddd }}</td>
            <td>{{ cep.uf }}</td>
            <td>{{ cep.localidade }}</td>
            <td>{{ cep.bairro }}</td>
            <td>{{ cep.logradouro }}</td>
            <td>{{ cep.complemento || "N/A" }}</td>
          </tr>
        </tbody>
      </table>
    </div>
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
    ...mapState(["ceps", "errorMessage"]), // Inclui o erro no estado
    formattedCep: {
      get() {
        if (!this.cep) return "";
        const value = this.cep.replace(/\D/g, "");
        if (value.length > 5) {
          return `${value.slice(0, 5)}-${value.slice(5, 8)}`;
        }
        return value;
      },
      set(value) {
        this.cep = value.replace(/\D/g, "");
      },
    },
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
  background-color: transparent;
  background-image: url('../assets/bg.svg');

  .back {
    position: absolute;
    top: 32px;
    left: 32px;
    font-size: 16px;
    text-decoration: none;
    color: #007bff;
    font-weight: bold;
    padding: 12px 16px;
    transition: background-color .2s ease-in-out;
    border-radius: 4px;

    &:hover {
      background-color: #76b8ff2a;
      padding: 12px 16px;
    }
  }

  .form {
    display: flex;
    padding: 32px 64px;
    flex-direction: row;
    justify-content: center;
    align-self: center;
    width: 100%;

    input,
    button {
      padding: 16px 20px;
      border: none;
      outline: none;
      cursor: pointer;
      font-size: 16px;
    }

    button {
      background-color: #75ff85;
      border-radius: 0 8px 8px 0;
      font-weight: 600;
      color: #075f12;
      transition: background-color .2s ease-in-out;

      &:hover {
        background-color: #57df67e6
      }
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
      transition: box-shadow .2s ease-in-out;

      &:focus {
        box-shadow: 0 0 0 4px rgb(212, 255, 217);
        border-radius: 8px 0 0 8px;
      }
    }
  }

  .cep-container {
    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 20px;
    }

    th,
    td {
      border: 1px solid #ccc;
      padding: 8px;
      text-align: left;
    }

    th {
      background-color: #f4f4f4;
    }
  }

  .error-message {
    background-color: #fee2e2;
    padding: 16px 20px;
    border: 1px solid #dc2626;
    border-radius: 8px;
    font-weight: bold;
    color: #dc2626;
  }
}
</style>
