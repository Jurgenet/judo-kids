<template>

<div class="boundBar">
  <div class="round"></div>
  <div class="line"></div>
  <div class="line"></div>
  <div class="round"></div>
</div>

</template>

<style lang="sass">

.boundBar
  display: flex
  margin: 12px 0

  justify-content: center
  align-items: center

.line
  border-bottom: 2px solid black
  height: 2px
  width: 260px

.round
  margin: 0 8px
  border: 2px solid black
  border-radius: 50%

</style>