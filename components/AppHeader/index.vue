<template>

<div class="appHeader">
  <BoundBar />
  <div class="main">
    <img class="picture picture-1" alt="judo kids" src="~/assets/images/judo-kids-1.png" />
    <img class="picture picture-2" alt="judo kids" src="~/assets/images/judo-kids-2.png" />
    <div class="title">JUDO</div>
    <img class="judoSignPicture" alt="judo sign" src="~/assets/images/judo-sign.png" />
    <div class="title">KIDS</div>
    <img class="picture picture-3" alt="judo-kids" src="~/assets/images/judo-kids-3.png" />
    <img class="picture picture-4" alt="judo-kids" src="~/assets/images/judo-kids-4.png" />
  </div>
  <BoundBar />
  <div>Russia, Kursk.</div>
</div>

</template>

<script setup lang="ts">

import BoundBar from './BoundBar.vue'

</script>

<style lang="sass" scoped>

.appHeader
  display: flex

  justify-content: center
  align-items: center
  flex-direction: column

  font-family: 'Suez One', serif

.main
  display: flex

  align-items: center
.title
  margin: 4px 20px
  font-size: 2.5rem
  font-weight: bold

.judoSignPicture
  margin: 0 12px 0
  height: 50px

.pictures
  margin-top: 12px

.picture
  margin: 0 10px 0
  height: 60px

</style>