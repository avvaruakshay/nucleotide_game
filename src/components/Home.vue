<template>
  <div id="main-home" @keyup.A="keyPressed('A')" @keyup.C="keyPressed('C')" @keyup.G="keyPressed('G')" @keyup.T="keyPressed('T')" @keyup.U="keyPressed('U')" tabindex="0">

    <audio id="correct_audio" src="../../public/files/button_correct.wav" autoplay="false" ></audio>
    <audio id="wrong_audio" src="../../public/files/button_wrong.wav" autoplay="false" ></audio>

    <el-row id="header">
      <el-col :offset="2" :span="20" align="left" style="padding: 15px">
        Sequencing Game
        <span style="float: right">
          <el-button type="primary" icon="fas icon-fa-info-circle" size="mini" circle style="background-color: black; border: none; font-size: 1.5rem; padding: 0px" @click="openInfo"></el-button>
        </span>
        <span style="float: right">
          <el-button type="info" icon="fas icon-fa-cog" size="mini" circle style="background-color: black; font-size: 1.5rem; padding: 0px; margin-right: 20px; border: none" @click="openSettings"></el-button>
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
        <el-button id="start" :disabled="!(store.inputEnabled)" type="info" @click="startClicked()" size="mini">START</el-button>
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
        <el-button :disabled="store.inputEnabled" class="key-button" title="Adenine" id="key-A" type="primary" @click="buttonClick('key-A', 'button')">A</el-button>
        <el-button :disabled="store.inputEnabled" class="key-button" title="Cytosine" id="key-C" type="success" @click="buttonClick('key-C', 'button')">C</el-button>
        <el-button :disabled="store.inputEnabled" class="key-button" title="Guanine" id="key-G" type="danger" @click="buttonClick('key-G', 'button')">G</el-button>
        <el-button :disabled="store.inputEnabled" class="key-button" title="Thymine" v-if="store.gameMode==='DNA'" id="key-T" type="warning" @click="buttonClick('key-T', 'button')">T</el-button>
        <el-button :disabled="store.inputEnabled" class="key-button" title="Uracil" v-if="store.gameMode==='RNA'" id="key-U" type="warning" @click="buttonClick('key-U', 'button')">U</el-button>
      </el-col>
    </el-row>

    <el-dialog :visible.sync="store.settingsVisible" @closed="settingsClosed()" style="width: 96vw; max-width: 1000px; margin: auto">
      <template slot="title">
        <div style="font-size: 1.2rem; font-weight: bold">Game Settings</div>
      </template>
      <el-row>
        <el-col :offset="2" :span="20">
          <span style="color: white; font-weight: bold; font-size: 1rem; margin-bottom: 20px">Game Time</span>
          <el-slider v-model="store.totalTime" @change="store.changeTotalTime()" :format-tooltip="timerFormat" :step="30000" :min="30000" :max="300000" :marks="store.times"></el-slider>
        </el-col>
      </el-row>
    </el-dialog>

    <el-dialog :visible.sync="store.infoVisible">
      <template slot="title">
        <div style="font-size: 1.2rem; font-weight: bold">Game Info</div>
      </template>
      <div style="font-size: 1rem; font-weight: bold; word-break: keep-all; color: #aeaeae; margin-top: 0px">
        <el-row v-if="store.infoPage === 1">
          <el-col :offset="0" :span="24">
            <p> 
              Hi Everyone! 
              <i class="fas icon-fa-smile" style="color: yellow; background-color: black; border-radius: 15px"></i> <br>
              This is a simple game to understand sequencing by synthesis.
              As you start the game you get a sequence to which you have to generate 
              the complementary strand. 
            </p>
          </el-col>
        </el-row>

        <el-row v-else-if="store.infoPage === 2">
          <el-row style="font-size: 1.4rem; margin-bottom: 20px">DNA complementarity</el-row>
          <el-row>
            <el-col :offset="6" :span="4">
              <nucleotide base='A'></nucleotide>
              Adenine
            </el-col>  
            <el-col :span="4">
              <i class="fas icon-fa-chevron-left icon-fa-2x" style="margin-top: 6px"></i>
              <i class="fas icon-fa-chevron-right icon-fa-2x" style="margin-top: 6px"></i>
            </el-col>  
            <el-col :span="4">
              <nucleotide base='T'></nucleotide>
              Thymine
            </el-col>  
          </el-row>
          <el-row style="margin-top: 20px">
            <el-col :offset="6" :span="4">
              <nucleotide base='C'></nucleotide>
              Cytosine
            </el-col>  
            <el-col :span="4">
              <i class="fas icon-fa-chevron-left icon-fa-2x" style="margin-top: 6px"></i>
              <i class="fas icon-fa-chevron-right icon-fa-2x" style="margin-top: 6px"></i>
            </el-col>  
            <el-col :span="4">
              <nucleotide base='G'></nucleotide>
              Guanine
            </el-col>  
          </el-row>

          <el-row style="font-size: 1.4rem; margin: 20px 0px">RNA complementarity</el-row>
          <el-row>
            <el-col :offset="6" :span="4">
              <nucleotide base='U'></nucleotide>
              Uracil
            </el-col>  
            <el-col :span="4">
              <i class="fas icon-fa-chevron-left icon-fa-2x" style="margin-top: 6px"></i>
              <i class="fas icon-fa-chevron-right icon-fa-2x" style="margin-top: 6px"></i>
            </el-col>  
            <el-col :span="4">
              <nucleotide base='A'></nucleotide>
              Adenine
            </el-col>  
          </el-row>
        </el-row>

        <el-row v-else-if="store.infoPage === 3">
           <video width="320" height="560" controls>
            <source src="../../public/files/Tutorial.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video> 
        </el-row>
      </div>

      <el-row style="margin-top: 20px">
        <el-col align="right">
          <el-button size="mini" :disabled="store.infoPrevDisabled" type="primary" style="margin-right: 2px" @click="infoNav('P')"><i class="fas icon-fa-angle-left"></i></el-button>
          <el-button size="mini" :disabled="store.infoNextDisabled" type="primary" @click="infoNav('N')"><i class="fas icon-fa-angle-right"></i></el-button>
        </el-col>
      </el-row>
    </el-dialog>
  </div>
</template>

<script>
import { store } from '../scripts/store.js'
import ReferenceLane from './ReferenceLane.vue'
import PlayerLane from './PlayerLane.vue'
import EndGame from './EndGame.vue'
import Nucleotide from './Nucleotide.vue'

const gsap = require('gsap')

export default {
  name: 'Home',
  components: {
    ReferenceLane, PlayerLane, EndGame, Nucleotide
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

      document.getElementById('main-home').focus()

      store.startGame()
    },
    buttonClick(id) {
      const context = this
      const nuc = id.slice(-1)
      const colors = { A: '#8490cf', C: '#84be87', G: '#f38d88', T: '#ffb861', U: '#ffb861'}
      const color = colors[nuc]
      const elem = document.getElementById(id)
      elem.style.cssText = "box-shadow: none; top: 5px; left: -5px"
      window.setTimeout(function() {
        const elem2 = document.getElementById(id)
        elem2.style.cssText = `box-shadow: -5px 5px ${color}, -4px 4px ${color}, -3px 3px ${color}, -2px 2px ${color}, -1px 1px ${color}; top: 0px; left: 0px`
      }, 150)
      const wrong_sound = document.getElementById("wrong_audio");
      const correct_sound = document.getElementById("correct_audio");
      store.inputNucleotide(nuc, correct_sound, wrong_sound)
    },
    keyPressed(nuc){ this.buttonClick(`key-${nuc}`) },
    openSettings() { 
      document.getElementsByClassName('el-tooltip__popper').forEach( (elem) => {
        elem.style.opacity = 1
      })
      store.openSettings() 
    },
    openInfo() { store.openInfo() },
    timerFormat(val) { return `${(val/1000).toFixed(0)}s` },
    infoNav(dir) { store.infoNav(dir) },
    settingsClosed() {
      document.getElementsByClassName('el-tooltip__popper').forEach( (elem) => {
        elem.style.opacity = 0
      })
    }
    // openInfo() {
    //   this.$alert(
    //     '<p style="font-size: 1rem; font-weight: bold"> Hi Everyone! <i class="fas icon-fa-smile" style="color: yellow; background-color: black; border-radius: 15px"></i> <br> \
    //       This is a simple game to understand sequencing by synthesis.\
    //       As you start the game you get a sequence to which you have to generate \
    //       the complementary strand. \
    //      </p>',
    //     'Welcome!', 
    //     {
    //       confirmButtonText: 'Got it!',
    //       dangerouslyUseHTMLString: true,
    //     }
    //   );
    // }
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

.el-dialog {
  background-color: black !important;
  color: white !important;
  width: 94vw !important;
  max-width: 600px !important;
  /* white-space: normal !important; */
  /* hyphens: auto !important; */
  /* word-break: keep-all !important; */
}

.el-slider__marks-text {
  width: 50px;
  color: white;
  font-size: 1.5rem;
}

.el-tooltip__popper {
  font-family: 'Ubuntu Mono', monospace;
  font-size: 1.5rem;
}
</style>

