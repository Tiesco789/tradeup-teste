<script setup lang="ts">
import BannerView from './BannerView.vue';
</script>

<template>
  <div id="app" class="home">
    <div class="right">
      <img src="@/assets/search-engines-bro.svg" alt="imagem de busca" width="512">
    </div>

    <div class="left">
      <BannerView />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  .left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center;
    width: 25%;
  }
}
</style>
