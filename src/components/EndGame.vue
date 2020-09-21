<template>
  <div style="font-weight: bold">
    <el-row style="top: 5rem; font-weight: bold">
      GAME END!
    </el-row>
    <el-row style="top: 5.6rem">
      Time Taken: {{ store.playerTime }}s
    </el-row>
    <el-row style="top: 6.2rem">
      Score: {{ store.playerScore }}
    </el-row>
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