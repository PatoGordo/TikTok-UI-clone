<template>
  <div class="home">
    <home-top-bar />
    <post-infos-side-bar />
  </div>
</template>

<script setup lang="ts">
import homeTopBar from "./components/homeTopBar.vue";
import postInfosSideBar from "./components/postInfos1.vue";
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 90vh;
  color: #cdd9e5;
  margin-bottom: 60px;
  border-radius: 15px;
}
</style>
