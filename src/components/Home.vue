<template>
  <div>
    <el-row style="margin: 20px 0px">
      <el-col>
        <el-button class="key-button" id="start" type="info" @click="startGame()">START</el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <span style="margin-right: 30px">Time: {{ (store.timer/1000).toFixed(1) }}</span>
        <span>Score: {{ store.score }}</span>
      </el-col>
    </el-row>

    <div id="lanes-panel">
      <div style="display: inline-block; margin: 1rem">
        <reference-lane ref="referenceStrand" :sequence="store.sequence"></reference-lane>
      </div>
      <div style="display: inline-block; margin: 1rem">
        <player-lane ref="playerStrand"></player-lane>
      </div>
    </div>

    <el-row :gutter="30" style="margin: 20px 0px">
      <el-col>
        <el-button :disabled="store.inputEnabled" class="key-button" id="key-A" type="primary" @click="buttonClick('key-A', 'button')">A</el-button>
        <el-button :disabled="store.inputEnabled" class="key-button" id="key-C" type="success" @click="buttonClick('key-C', 'button')">C</el-button>
        <el-button :disabled="store.inputEnabled" class="key-button" id="key-G" type="danger" @click="buttonClick('key-G', 'button')">G</el-button>
        <el-button :disabled="store.inputEnabled" class="key-button" id="key-T" type="warning" @click="buttonClick('key-T', 'button')">T</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { store } from '../scripts/store.js'
import ReferenceLane from './ReferenceLane.vue'
import PlayerLane from './PlayerLane.vue'

export default {
  name: 'Home',
  components: {
    ReferenceLane, PlayerLane
  },
  data() {
    return { 
      store: store,
    }
  }, 
  mounted() {
    
  },
  methods: {
    startGame() {
      const context = this
      const elem = document.getElementById('start')
      elem.style.cssText = "box-shadow: none; top: 5px; left: -10px"
      window.setTimeout(function() {
        const elem2 = document.getElementById('start')
        elem2.style.cssText = "box-shadow: -5px 5px #03B2C9, -4px 4px #03B2C9, -3px 3px #03B2C9, -2px 2px #03B2C9, -1px 1px #03B2C9; top: 0px; left: -5px"
      }, 150)

      context.$refs.referenceStrand.startAnimation()
    },
    buttonClick(id) {
      const context = this
      const nuc = id.slice(-1)
      const colors = { A: '#8490cf', C: '#84be87', G: '#f38d88', T: '#ffb861'}
      const color = colors[nuc]
      const elem = document.getElementById(id)
      elem.style.cssText = "box-shadow: none; top: 5px; left: -5px"
      window.setTimeout(function() {
        const elem2 = document.getElementById(id)
        elem2.style.cssText = `box-shadow: -5px 5px ${color}, -4px 4px ${color}, -3px 3px ${color}, -2px 2px ${color}, -1px 1px ${color}; top: 0px; left: 0px`
      }, 150)
      context.inputNucleotide(nuc)
    },
    keyPressed(input){
      const char = input.slice(-1).toUpperCase()
      const nucs = ['A', 'C', 'G', 'T']
      if (nucs.indexOf(char) !== -1) {
        this.buttonClick(`key-${char}`)
      }
    },
    inputNucleotide(nuc) {
      const context = this
      const sequence = store.sequence
      const n = sequence.length
      const i = store.currentNucIndex
      const refNuc = store.sequence[n-i-2]
      store.currPlayerNuc = nuc
      if (nuc != store.complement[refNuc]) { store.currPlayerNuc = 'X'; store.playerNucleotides = ['B', 'B', 'X', store.prevPlayerNuc] }
      else { store.playerNucleotides = ['B', 'B', nuc, store.prevPlayerNuc] }
    }
  },
  computed: {
    
  }
}
</script>

<style>

#lanes-panel {
  width: 10.4rem;
  border: 1px solid #dedede;
  border-radius: 10px;
  padding: 10px;
  margin: 0 auto; 
}
.key-button {
    font-weight: bold;
    font-size: 1.5em;
    position: relative;
}
#key-A {
  box-shadow: -5px 5px #8490cf, -4px 4px #8490cf, -3px 3px #8490cf, -2px 2px #8490cf, -1px 1px #8490cf;
  border: 1px solid #8490cf;
}
#key-C {
  box-shadow: -5px 5px #84be87, -4px 4px #84be87, -3px 3px #84be87, -2px 2px #84be87, -1px 1px #84be87;
  border: 1px solid #84be87;
}
#key-G {
  box-shadow: -5px 5px #f38d88, -4px 4px #f38d88, -3px 3px #f38d88, -2px 2px #f38d88, -1px 1px #f38d88;
  border: 1px solid #f38d88;
}
#key-T {
  box-shadow: -5px 5px #ffb861, -4px 4px #ffb861, -3px 3px #ffb861, -2px 2px #ffb861, -1px 1px #ffb861;
  border: 1px solid #ffb861;
}
#key-A:focus {
  background-color: #3F51B6;
}
#key-A:hover {
  background-color: #3F51B6;
}
#key-C:focus {
  background-color: #43A047;
}
#key-C:hover {
  background-color: #43A047;
}
#key-G:focus {
  background-color: #E54138;
}
#key-G:hover {
  background-color: #E54138;
}
#key-T:focus {
  background-color: #FD910B;
}
#key-T:hover {
  background-color: #FD910B;
}
#start {
  background-color: #2693A1;
  box-shadow: -5px 5px #03B2C9, -4px 4px #03B2C9, -3px 3px #03B2C9, -2px 2px #03B2C9, -1px 1px #03B2C9;
  border: 1px solid #03B2C9;
}
#start:focus {
  background-color: #2693A1;
}
#start:hover {
  background-color: #2693A1;
}
</style>