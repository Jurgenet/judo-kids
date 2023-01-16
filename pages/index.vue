<template>

<div class="mainPage flex flex-column flex-1">
  <div class="mainHeader">
    <AppHeader />
  </div>
  <div class="mainWrapper flex flex-1">
    <div class="mainContent flex-1">
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
