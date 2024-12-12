<template>
  <h1>Bem-vindo à aplicação de busca por CEP</h1>
  <span>Neste site você pode buscar por um CEP para obter informações de um local</span>
  <router-link to="/search">Clique aqui para buscar um CEP</router-link>
</template>

<script>
  export default {
    name: "Banner",
  };
</script>

<style lang="scss" scoped>

h1 {
  margin-bottom: .875rem
}

span {
  text-transform: uppercase;
  font-weight: 700;
  color: rgb(117, 126, 126);
  margin-bottom: 2rem;
}

a {
  text-decoration: none;
  background-color: transparent;
  color: green;
  font-weight: 700;
  transition: background-color .2s ease-in-out;
  width: fit-content;
  box-shadow: none;
  padding: 12px 10px;
  border-radius: 4px;

  &:hover {
    background-color: rgb(232, 248, 232);
  }
}

</style>
