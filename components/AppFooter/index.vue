<template>

<div class="appFooter p-3 flex flex-column justify-content-center align-items-center">
  <div class="flex justify-content-between">
    <div class="flex flex-column justify-content-center align-items-center">
      <div class="text-2xl font-bold">подробно по телефону:</div>
      <div class="phoneNumber text-6xl">+7 920 267 66 12</div>
      <div class="flex align-items-center">
        <a href="https://ok.ru/profile/561837567437" target="_blank" rel="nofollow">
          <img class="okPicture" alt="ok icon" src="~/assets/images/ok.png" />
        </a>
        <a href="https://vk.com/id41078417" target="_blank" rel="nofollow">
          <img class="vkPicture" alt="vk icon" src="~/assets/images/vk.png" />
        </a>
        <a href="https://www.youtube.com/channel/UClynBflVWcOSgt_auYnNrJQ" target="_blank" rel="nofollow">
          <img class="ytPicture" alt="youtube icon" src="~/assets/images/youtube.png" />
        </a>
      </div>
    </div>
  </div>
</div>

</template>

<script setup lang="ts">


</script>

<style lang="sass">
.phoneNumber
  font-family: var(--decor-font)

.okPicture
  width: 26px

.vkPicture
  margin: 0 16px
  width: 40px

.ytPicture
  width: 40px

</style>
