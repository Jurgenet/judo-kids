<template>

<div class="appFooter">
  <div class="topSection">
  </div>
  <div class="middleSection">
    <img class="pictureGerb" alt="gerb of russia" src="~/assets/images/ru-gerb.png" />
    <div class="contacts">
      <div class="phoneText">подробно по телефону:</div>
      <div class="phoneNumber">+7 920 267 96 12</div>
      <div class="social">
        <a href="https://ok.ru/profile/561837567437" target="_blank">
          <img class="okPicture" alt="ok icon" src="~/assets/images/ok.png" />
        </a>
        <a href="https://vk.com/id41078417" target="_blank">
          <img class="vkPicture" alt="vk icon" src="~/assets/images/vk.png" />
        </a>
        <a href="https://www.youtube.com/channel/UClynBflVWcOSgt_auYnNrJQ" target="_blank">
          <img class="ytPicture" alt="youtube icon" src="~/assets/images/youtube.png" />
        </a>
      </div>
    </div>
    <img class="pictureGerb" alt="gerb of kursk" src="~/assets/images/gerb-kursk.png" />
  </div>
  <div class="bottomSection">@2023</div>
</div>

</template>

<script setup lang="ts">


</script>

<style lang="sass">

.appFooter
  display: flex
  padding: 12px 0

  flex-direction: column
  align-items: center
  justify-content: center

  font-family: 'Suez One', serif

.middleSection
  display: flex

  justify-content: space-between

.bottomSection
  display: flex

  justify-content: center
  align-items: center

.contacts
  display: flex
  padding: 0 32px

  flex-direction: column
  justify-content: center
  align-items: center

.phoneText
  font-family: 'PT Serif', serif
  font-size: 1.2rem
  font-weight: bold

.phoneNumber
  font-size: 2.4rem
  text-align: center

.social
  display: flex

  align-items: center

.pictureGerb
  padding: 12px
  height: 120px

.okPicture
  width: 26px

.vkPicture
  margin: 0 16px
  width: 40px

.ytPicture
  width: 40px

</style>
