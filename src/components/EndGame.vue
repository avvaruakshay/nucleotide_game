<template>
  <div style="font-weight: bold; font-size: 1rem; width: 90%; position: relative; margin: auto; top: 4rem">
    <div class="game-info" style="padding: 0.5rem 0px; margin: 0px auto; border-top-right-radius: 5px; border-top-left-radius: 5px;">
      Well Done! <i style="color: #DEEA00" class="fas icon-fa-grin-beam"></i>
    </div>
    <!-- <div class="game-info" style="padding: 0px; margin: 0px auto;">----------------</div> -->
    <div class="game-info" style="padding: 0.4rem 0px">
      Time: {{ store.playerTime }}s
    </div>
    <div class="game-info" style="padding: 0.4rem 0px">
      Score: {{ store.playerScore }}
    </div>
    <div class="game-info" style="padding: 0.4rem 0px">
      Nucleotides: {{ store.totalNucleotides }}
    </div>
    <div class="game-info" style="padding: 0.5rem 0px; border-bottom-right-radius: 5px; border-bottom-left-radius: 5px; display: flex; flex-direction: row; justify-content: space-evenly">
      <div style="width: 45%; display: flex; flex-direction: column">
        <div>Correct</div>
        <div>{{ store.correctNucleotides }}</div>
      </div>
      <div style="width: 45%; display: flex; flex-direction: column">
        <div>Wrong</div>
        <div>{{ store.wrongNucleotides }}</div>
      </div>
    </div>
  </div>  
</template>

<script>
import { store } from '../scripts/store.js'

export default {
  name: 'EndGame',
  data() {
    return {
      store: store
    }
  }
}
</script>

<style scoped>
.game-info {
  background-color: #69ad8c;
  color: #04374b;
}
</style>