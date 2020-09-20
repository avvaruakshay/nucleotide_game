<template>
  <div style="height: 90vh; margin-top: 50px">

    <el-row>
      <el-col :offset="2" :span="20" style="overflow-inline: hidden; white-space: nowrap;">
        <nucleotide v-for="(b, index) in sequence.toUpperCase().split('')" :key="index" :base="b" class="nucleotide stay"></nucleotide>
      </el-col>
    </el-row>

    <el-row style="margin-top: 10px">
      <el-col :offset="1" :span="10" style="overflow-inline: hidden; white-space: nowrap;">
        <nucleotide v-for="(b, index) in convertedInput.toUpperCase().split('')" :key="index" :base="b" style="display: inline; margin-right: 10px; position: relative; left: 0px" class="nucleotide stay"></nucleotide>
      </el-col>
    </el-row>

    <el-row style="margin-top: 50px">
      <el-col :offset="1" :span="20">
        <input v-model="value" 
          @keyup.A="buttonClick('key-A')" 
          @keyup.C="buttonClick('key-C')" 
          @keyup.G="buttonClick('key-G')" 
          @keyup.T="buttonClick('key-T')">
      </el-col>
    </el-row>
    <el-row :gutter="30" style="margin-top: 20px">
      <el-col :offset="1" :span="20">
        <el-button class="key-button" id="key-A" type="primary" @click="buttonClick('key-A', 'button')">A</el-button>
        <el-button class="key-button" id="key-C" type="success" @click="buttonClick('key-C', 'button')">C</el-button>
        <el-button class="key-button" id="key-G" type="danger" @click="buttonClick('key-G', 'button')">G</el-button>
        <el-button class="key-button" id="key-T" type="warning" @click="buttonClick('key-T', 'button')">T</el-button>
      </el-col>
    </el-row>
    <el-row style="margin-top: 20px">
      <el-col :offset="1">
        <el-button class="key-button" id="start" type="info" @click="startGame()">START</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Nucleotide from '@/components/Nucleotide'

export default {
  name: "NucleotideTyping",
  components: { Nucleotide },
  data() {
    return { 
      sequence: 'CATTGGCATGGTACTATCGCATTGCATCGACGACTAGCAGCATGCGGGTTTGGCAAAGCT',
      value: 'GTA',
      start: false
    }
  },
  methods: {
    buttonClick(id, type='input') {
      const nuc = id.slice(-1)
      const colors = { A: '#8490cf', C: '#84be87', G: '#f38d88', T: '#ffb861'}
      const color = colors[nuc]
      const elem = document.getElementById(id)
      elem.style.cssText = "box-shadow: none; top: 5px; left: -5px"
      window.setTimeout(function() {
        const elem2 = document.getElementById(id)
        elem2.style.cssText = `box-shadow: -5px 5px ${color}, -4px 4px ${color}, -3px 3px ${color}, -2px 2px ${color}, -1px 1px ${color}; top: 0px; left: 0px`
      }, 150)
      if (type !== 'input') { this.value += nuc; }
    },
    keyPressed(input){
      const char = input.slice(-1).toUpperCase()
      const nucs = ['A', 'C', 'G', 'T']
      if (nucs.indexOf(char) !== -1) {
        this.buttonClick(`key-${char}`)
      }
    },
    startGame() {
      const context = this
      const elem = document.getElementById('start')
      elem.style.cssText = "box-shadow: none; top: 5px; left: -5px"
      window.setTimeout(function() {
        const elem2 = document.getElementById('start')
        elem2.style.cssText = `box-shadow: -5px 5px #03B2C9, -4px 4px #03B2C9, -3px 3px #03B2C9, -2px 2px #03B2C9, -1px 1px #03B2C9; top: 0px; left: 0px`
      }, 150)
      document.getElementsByClassName('nucleotide').forEach(e => { e.classList.remove('stay') })
      document.getElementsByClassName('nucleotide').forEach(e => { e.classList.add('shift') })
      const iters = context.sequence.length
      for (let i=0; i < iters-3; i++) {
        window.setTimeout(function(){
          const shiftValue = -1 * ((i+2)*42)
          document.getElementsByClassName('shift').forEach(e => { e.style.left = `${shiftValue}px` })
        }, (i+1)*2000)
      }
    }
  },
  computed: {
    convertedInput() {
      const context = this
      const complement = { 'A': 'T', 'C': 'G', 'G': 'C', 'T': 'A' }
      const lastBase = context.value.toUpperCase().slice(-1)
      if (lastBase === complement[context.sequence[context.value.length-1]]) {
        return context.value
      } else {
        context.value = context.value.slice(0,-1) + 'X'
      }
      return context.value
    }
  }
}
</script>
<style scoped>
  .key-button {
    font-weight: bold;
    font-size: 1.2em;
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
  .nucleotide.shift {
    left: -42px;
    -webkit-transition-property: left;
    -webkit-transition-duration: 1s;
    -webkit-transition-timing-function: ease-in;
    transition-property: left;
    transition-duration: 1s;
    transition-timing-function: ease-in;
  }
  .nucleotide.stay {
    left: 0px;
    -webkit-transition-property: left;
    -webkit-transition-duration: 1s;
    -webkit-transition-timing-function: ease-in;
    transition-property: left;
    transition-duration: 1s;
    transition-timing-function: ease-in;
  }
  .nucleotide {
    display: inline;
    margin-right: 10px;
    position: relative
  }
</style>