<template>
  <div @keyup.A="keyPressed('A')" @keyup.C="keyPressed('C')" @keyup.G="keyPressed('G')" @keyup.T="keyPressed('T')" @keyup.U="keyPressed('U')">
    <audio id="audio" src="../../public/files/button.wav" autoplay="false" ></audio>
    
    <el-row id="header">
      <el-col :offset="2" :span="20" align="left" style="padding: 15px">
        Sequencing Game
        <span style="float: right">
          <el-button type="primary" icon="fas icon-fa-info-circle" size="mini" circle style="font-size: 1.5rem; padding: 0px" @click="openInfo"></el-button>
        </span>
      </el-col>
    </el-row>
    
    <el-row style="margin: 30px 0px" :gutter="20">
      <el-col :offset="2" :span="10">
        <el-radio-group :disabled="store.gameModeChange" v-model="store.gameMode" size="mini" style="width: 100%">
          <el-radio-button label="DNA"></el-radio-button>
          <el-radio-button label="RNA"></el-radio-button>
        </el-radio-group>
      </el-col>
      <el-col :span="10">
        <el-button id="start" type="info" @click="startClicked()" size="mini">START</el-button>
      </el-col>
    </el-row>

    <el-row style="margin-bottom: 10px">
      <el-col style="font-weight: bold; font-size: 1.2rem">
        <span style="margin-right: 30px">Time: {{ (store.timer/1000).toFixed(1) }}</span>
        <span>Score: {{ store.playerScore }}</span>
      </el-col>
    </el-row>

    <div style="height: 20rem">
      <div id="lanes-panel">
        <div style="display: inline-block; margin: 1rem">
          <reference-lane ref="referenceStrand" :nucleotides="store.referenceNucleotides" :sequence="store.sequence"></reference-lane>
        </div>
        <div style="display: inline-block; margin: 1rem">
          <player-lane ref="playerStrand"></player-lane>
        </div>
      </div>
      <div id="endgame-panel" v-if="store.gameStatus==='end'">
        <end-game></end-game>
      </div>
    </div>

    <el-row :gutter="30" style="margin: 20px 0px">
      <el-col>
        <el-button :disabled="store.inputEnabled" class="key-button" id="key-A" type="primary" @click="buttonClick('key-A', 'button')">A</el-button>
        <el-button :disabled="store.inputEnabled" class="key-button" id="key-C" type="success" @click="buttonClick('key-C', 'button')">C</el-button>
        <el-button :disabled="store.inputEnabled" class="key-button" id="key-G" type="danger" @click="buttonClick('key-G', 'button')">G</el-button>
        <el-button :disabled="store.inputEnabled" class="key-button" v-if="store.gameMode==='DNA'" id="key-T" type="warning" @click="buttonClick('key-T', 'button')">T</el-button>
        <el-button :disabled="store.inputEnabled" class="key-button" v-if="store.gameMode==='RNA'" id="key-U" type="warning" @click="buttonClick('key-U', 'button')">U</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { store } from '../scripts/store.js'
import ReferenceLane from './ReferenceLane.vue'
import PlayerLane from './PlayerLane.vue'
import EndGame from './EndGame.vue'

const gsap = require('gsap')

export default {
  name: 'Home',
  components: {
    ReferenceLane, PlayerLane, EndGame
  },
  data() {
    return { 
      store: store,
    }
  }, 
  mounted() {
    this.openInfo()
  },
  methods: {
    startClicked() {
      const context = this
      const elem = document.getElementById('start')
      elem.style.cssText = "box-shadow: none; top: 5px; left: -5px"
      window.setTimeout(function() {
        const elem2 = document.getElementById('start')
        elem2.style.cssText = "box-shadow: -5px 5px #03B2C9, -4px 4px #03B2C9, -3px 3px #03B2C9, -2px 2px #03B2C9, -1px 1px #03B2C9; top: 0px; left: 0px"
      }, 75)

      store.startGame()
    },
    buttonClick(id) {
      const context = this
      const sound = document.getElementById("audio");
      sound.play();
      const nuc = id.slice(-1)
      const colors = { A: '#8490cf', C: '#84be87', G: '#f38d88', T: '#ffb861', U: '#ffb861'}
      const color = colors[nuc]
      const elem = document.getElementById(id)
      elem.style.cssText = "box-shadow: none; top: 5px; left: -5px"
      window.setTimeout(function() {
        const elem2 = document.getElementById(id)
        elem2.style.cssText = `box-shadow: -5px 5px ${color}, -4px 4px ${color}, -3px 3px ${color}, -2px 2px ${color}, -1px 1px ${color}; top: 0px; left: 0px`
      }, 150)
      store.inputNucleotide(nuc)
    },
    keyPressed(nuc){ this.buttonClick(`key-${nuc}`) },
    openInfo() {
      this.$alert(
        '<p style="font-size: 1rem; font-weight: bold"> Hi Everyone! <i class="fas icon-fa-smile" style="color: yellow; background-color: black; border-radius: 15px"></i> <br> \
          This is a simple game to understand sequencing by synthesis.\
          As you start the game you get a sequence to which you have to generate \
          the complementary strand. \
         </p>',
        'Welcome!', 
        {
          confirmButtonText: 'Got it!',
          dangerouslyUseHTMLString: true,
        }
      );
    }
  },
  computed: {
    
  }
}
</script>

<style>
#header {
  background-color: black;
  margin: 0px;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
}

#lanes-panel {
  width: 10.8rem;
  height: 19.6rem;
  border: 1px solid #808080;
  border-radius: 10px;
  margin: 0 auto; 
}

#endgame-panel {
  position: relative;
  display: block;
  top: -19.7rem;
  width: 10.8rem;
  height: 19.7rem;
  margin: 0 auto;
  border-radius: 10px;
  background-color: rgba(222, 222, 222, 0.8);
}

.key-button {
  font-weight: bold !important;
  font-size: 1.6rem !important;
  padding: 8px 15px !important;
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
#key-U {
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
#key-U:focus {
  background-color: #FD910B;
}
#key-U:hover {
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

