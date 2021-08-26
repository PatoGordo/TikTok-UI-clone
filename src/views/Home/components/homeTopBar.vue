<template>
  <nav class="home-top-bar">
    <icon icon="ic:round-live-tv" />

    <span
      ><p class="active">Following</p>
      |
      <p>For You</p></span
    >

    <icon icon="ant-design:search-outlined" />
  </nav>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
</script>

<style lang="scss" scoped>
.home-top-bar {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  > span {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    p {
      &.active {
        color: #fff;
      }
    }
  }
  svg {
    color: #fff;
    fill: #fff;
    width: 28px;
    height: 28px;
  }
}
</style>
