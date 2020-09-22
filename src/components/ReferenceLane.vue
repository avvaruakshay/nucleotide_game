<template>
  <div>
    <div style="display:flex; flex-direction: column; flex-wrap: wrap; overflow-inline: hidden; white-space: nowrap;">
      <nucleotide v-for="(b, index) in nucleotides" :key="index" :base="b" class="nucleotide"></nucleotide>
    </div>
  </div>
</template>

<script>
import { store } from '../scripts/store.js'
import Nucleotide from './Nucleotide.vue'


export default {
  name: 'ReferenceLane',
  components: { Nucleotide },
  props: {
    nucleotides: Array,
  },
}
</script>
<style scoped>
.nucleotide {
  /* display: inline; */
  margin: 0.5rem 0;
  position: relative
}
</style>