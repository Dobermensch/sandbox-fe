<template>
  <div class="leaderboard-container">
    <h4>Top 100 players</h4>
    <div class="score-item" v-for="(s, idx) in topScores" :key="idx">
      <div class="score-rank">{{ s.rank }}.</div>

      <div class="score-name">{{ s.player_name }}</div>

      <div class="score-number">{{ s.score }}</div>
    </div>
  </div>
</template>

<script setup>
import { io } from "socket.io-client"
import { ref } from "vue"

const runtimeConfig = useRuntimeConfig()
const wsApiBase = runtimeConfig.public.wsApiBase 

const topScores = ref([])

const socket = io(wsApiBase, { 
  transports: ['websocket']
});

const onTopScoresReceived = (data) => {
  topScores.value = data.scores
}

socket.on("sendTop100Scores", onTopScoresReceived)

onBeforeUnmount(() => {
  socket.off("sendTop100Scores", onTopScoresReceived);
});
</script>

<style scoped>
.leaderboard-container {
  background-color: #f7f7f7;
  border-radius: 20px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  min-height: 90%;
  max-height: 90%;
  overflow-y: auto;
  padding: 20px;
  width: 500px;
  font-family: 'Arial', sans-serif;
}

.leaderboard-container h4 {
  align-self: center;
}

.score-item {
  align-items: center;
  border-bottom: 1px solid #e1e1e1;
  display: flex;
  padding: 10px 0;
  transition: background-color 0.3s;
  width: 100%;
}
.score-item:hover {
  background-color: #e9e9e9;
}

.score-rank {
  color: #333;
  font-size: 16px;
  font-weight: bold;
  width: 10%;
}

.score-name {
  color: #555;
  font-size: 14px;
  overflow: hidden;
  padding-left: 10px;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 50%;
}

.score-number {
  color: #333;
  font-size: 14px;
  font-weight: bold;
  padding-right: 10px;
  text-align: right;
  width: 40%;
}

@media only screen and (max-width: 500px) {
  .leaderboard-container {
    width: 300px;
  }
}
</style>