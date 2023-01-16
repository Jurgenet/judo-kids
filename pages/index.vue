<template>
  <div class="mainPage">
    <div class="mainHeader">
      <AppHeader />
    </div>
    <div class="mainWrapper">
      <div class="mainSidebar hidden">Sidebar</div>
      <div class="mainContent">
        <RecruitmentAnnouncement />
      </div>
    </div>
    <div class="mainFooter">
      <AppFooter />
    </div>
  </div>
</template>

<script setup lang="ts">

import AppHeader from '~~/components/AppHeader/index.vue'
import AppFooter from '~~/components/AppFooter/index.vue'
import RecruitmentAnnouncement from '~~/components/RecruitmentAnnouncement/index.vue'

</script>

<style lang="sass">

.mainPage
  display: flex
  flex-direction: column
  flex: 1

.mainWrapper
  display: flex
  flex: 1

.mainContent
  margin: 24px 0
  width: 100%

.mainSidebar
  width: 300px
  background-color: yellow

.container
  margin: 0 auto
  min-height: 100vh
  display: flex
  justify-content: center
  align-items: center

</style>