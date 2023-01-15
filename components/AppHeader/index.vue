<template>

<div class="appHeader">
  <BoundBar />
  <div class="main">
    <div class="title">JUDO</div>
    <img class="judoSignPicture" alt="judo sign" src="~/assets/images/judo-sign.png" />
    <div class="title">KIDS</div>
  </div>
  <BoundBar />
  <div class="pictures">
    <AppPictures />
  </div>
</div>

</template>

<script setup lang="ts">

import BoundBar from './BoundBar.vue'
import AppPictures from './AppPictures.vue'

</script>

<style lang="sass" scoped>

.appHeader
  display: flex

  justify-content: center
  align-items: center
  flex-direction: column

.main
  display: flex

  align-items: center
.title
  margin: 4px 26px

  font-family: 'Suez One', serif
  font-size: 4rem
  font-weight: bold

.judoSignPicture
  margin: 0 12px 0
  height: 80px

.pictures
  margin-top: 12px

</style>