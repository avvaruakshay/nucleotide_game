<template>
  <div>
    <div style="display:flex; flex-direction: column; flex-wrap: wrap; overflow-inline: hidden; white-space: nowrap;">
      <nucleotide v-for="(b, index) in presentNucs" :key="index" :base="b" class="nucleotide"></nucleotide>
    </div>
  </div>
</template>

<script>
import Nucleotide from './Nucleotide.vue'
import { store } from '../scripts/store.js'

const _ = require('lodash')

export default {
  name: 'PlayerLane',
  components: { Nucleotide },
  data() {
    return {  }
  },
  computed: {
    presentNucs() {
      return store.playerNucleotides
    }
  },
  methods: {
    
  }
}
</script>
<style scoped>
.nucleotide {
  /* display: inline; */
  margin: 0.5rem 0;
  position: relative
}
</style>