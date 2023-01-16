<template>

<div class="appHeader pt-3 flex flex-column justify-content-center align-items-center">

  <div class="mainTopic flex align-items-center">
    <img class="judoKidPic" alt="judo kids" src="~/assets/images/judo-kids-1.png" />
    <img class="judoKidPic" alt="judo kids" src="~/assets/images/judo-kids-2.png" />
    <div class="mx-4 text-5xl font-bold">JUDO</div>
    <img class="h-3rem" alt="judo sign" src="~/assets/images/judo-sign.png" />
    <div class="mx-4 text-5xl font-bold">KIDS</div>
    <img class="judoKidPic" alt="judo-kids" src="~/assets/images/judo-kids-3.png" />
    <img class="judoKidPic" alt="judo-kids" src="~/assets/images/judo-kids-4.png" />
  </div>

  <Divider class="mt-0" align="center">
    <div class="inline-flex align-items-center">
      <img class="gerbPic" alt="gerb of russia" src="~/assets/images/ru-gerb.png" />
      <img class="gerbPic" alt="gerb of kursk" src="~/assets/images/gerb-kursk.png" />
    </div>
  </Divider>

</div>

</template>

<script setup lang="ts">

import Divider from 'primevue/divider'

</script>

<style lang="sass" scoped>

.appHeader
  font-family: var(--decor-font)

.mainTopic
  margin-right: -22px

.judoKidPic
  margin: 0 10px 0
  height: 62px

.gerbPic
  padding: 4px
  height: 45px

</style>