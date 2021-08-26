<template>
  <div class="post-info-side-bar">
    <img
      src="https://pbs.twimg.com/profile_images/1187052983860826113/7XSFLZls.jpg"
      alt="Post Author Profile Image"
      class="post-author-profile-image"
    />
    <icon
      icon="ant-design:heart-filled"
      class="icon post-like"
      :class="isLiked && 'active'"
      @click="isLiked = !isLiked"
    />
    <icon icon="uis:comment-dots" class="icon comment-icon" />
    <span class="share">
      <icon icon="bx:bxl-whatsapp" class="icon icon-share" />
      <small>Share</small>
    </span>
    <icon icon="bi:three-dots" class="icon three-dots" />
    <div class="music-disc">
      <img
        src="https://pbs.twimg.com/profile_images/1187052983860826113/7XSFLZls.jpg"
        alt="Music disc"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { ref } from "@vue/reactivity";

const isLiked = ref(false);
</script>

<style lang="scss" scoped>
.post-info-side-bar {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 12px;
  margin-bottom: 10vh;
}
.music-disc {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: #666;
  padding: 12px;
  display: grid;
  place-items: center;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
}
.post-like {
  transition: all ease 0.4s;
  border-radius: 50%;
  &.active {
    fill: #fd3e3e;
    color: #fd3e3e;
  }
}
.post-author-profile-image {
  width: 52px;
  height: 52px;
  object-fit: cover;
  border-radius: 50%;
  border: 2px solid #fff;
}
.icon {
  cursor: pointer;
  width: 50px;
  height: 50px;
  color: #fff;
  fill: #fff;
}
.share {
  display: grid;
  place-items: center;
  gap: 6px;
  .icon-share {
    width: 46px;
    height: 46px;
    background: #25d366;
    border-radius: 50%;
    object-fit: cover;
    padding: 5px;
  }
  display: grid;
  place-items: center;
  color: #fff;
  font-weight: 500;
}
</style>
