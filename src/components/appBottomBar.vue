<template>
  <nav class="bottom-bar">
    <div class="nav-item active">
      <!-- outlined below -->
      <icon v-if="null" icon="clarity:home-line" />
      <!-- filled below -->
      <icon icon="clarity:home-solid" />
      Home
    </div>
    <div class="nav-item">
      <icon icon="ant-design:search-outlined" />
      Discover
    </div>
    <div class="nav-item tik-tok-add-button">
      <div class="outside">
        <div class="inside">
          <icon icon="carbon:add" />
        </div>
      </div>
    </div>
    <div class="nav-item">
      <!-- outlined below -->
      <icon icon="majesticons:inbox-in-line" />
      <!-- filled below -->
      <icon v-if="null" icon="majesticons:inbox-in" />
      Inbox
    </div>
    <div class="nav-item">
      <!-- outlined below -->
      <icon icon="ant-design:user-outlined" />
      <!-- filled below -->
      <icon v-if="null" icon="bx:bxs-user" />
      Profile
    </div>
  </nav>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
</script>

<style lang="scss" scoped>
.tik-tok-add-button {
  display: grid;
  place-items: center;
  .outside {
    display: flex;
    justify-content: center;
    background: linear-gradient(
      90deg,
      rgba(77, 232, 244, 1) 50%,
      rgba(253, 62, 62, 1) 50%
    );
    padding: 0 5px;
    border-radius: 10px;
    .inside {
      display: grid;
      place-items: center;
      background: #fff;
      padding: 0 6px;
      border-radius: 10px;
      > svg {
        width: 32px;
        height: 32px;
        color: #000;
        fill: #000;
      }
    }
  }
}
.bottom-bar {
  border-top: 0.5px solid #333;
  height: 10vh;
  width: 100%;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  padding: 12px 32px;
  .nav-item {
    display: grid;
    place-items: center;
    gap: 4px;
    font-size: small;
    &.active {
      color: #fff;
      svg {
        width: 24px;
        height: 24px;
        color: #fff;
        fill: #fff;
      }
    }
  }
}
svg {
  width: 24px;
  height: 24px;
  color: #cdd9e5;
  fill: #cdd9e5;
}
</style>
