<template>
  <div id="app" class="home">
    <div class="right">
      <img src="@/assets/search-engines-bro.svg" alt="imagem de busca" width="512">
    </div>

    <div class="left">
      <h1>Bem-vindo à aplicação de busca de CEP</h1>
      <span>Neste site você pode buscar por um CEP para obter informações de um local</span>
      <router-link to="/search">Clique aqui para buscar um CEP</router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home {
  height: 100vh;
  width: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  .left {
    display: flex;
    flex-direction: column;

    h1 {
      margin-bottom: 2rem
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
      transition: box-shadow .2s ease-in-out;
      width: fit-content;
      box-shadow: none;
      border-radius: 0;

      &:hover {
        background-color: transparent;
        border-radius: 12px;

        box-shadow: 0px 0px 0px 12px rgb(209, 231, 209);
      }
    }
  }
}
</style>
