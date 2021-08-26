<template>
  <main>
    <router-view />
    <app-bottom-bar />
  </main>
</template>

<script setup lang="ts">
import appBottomBar from "@/components/appBottomBar.vue";
</script>
