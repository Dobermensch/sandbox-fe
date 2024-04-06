<template>
  <div class="main-container">
    <LeaderBoard />
  </div>
</template>

<script setup>
useHead({
  title: 'Leaderboard',
  meta: [
    { name: 'Leaderboard', content: 'Leaderboard for sandbox take home test' }
  ]
})
</script>

<style scoped>
.main-container {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("@/public/bg2.png");
}
</style>