<template>
  <div>
    <div style="display:flex; flex-direction: column; flex-wrap: wrap; overflow-inline: hidden; white-space: nowrap;">
      <nucleotide v-for="(b, index) in currentNucs" :key="index" :base="b" class="nucleotide"></nucleotide>
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
    sequence: String
  },
  // data() {
  //   return {
  //     currentNucIndex: 0,
  //   }
  // },
  computed: {
    currentNucs() { 
      const context = this
      const sequence = context.sequence
      const n = sequence.length + 3
      const subSeq = ("BBB" + sequence).toUpperCase().split('').slice(-1*(store.currentNucIndex + 4), n - store.currentNucIndex)
      return subSeq
    }
  },
  methods: {
    async startAnimation() {
      const context = this
      const sequence = context.sequence
      const n = sequence.length
      store.enableInput()
      for (let i=0;  i < 49; i++) {
        window.setTimeout(() => { store.updateTimer(5000-((i+1)*100)) }, i*100)
      }
      if (n - store.currentNucIndex > 2) {
        let promise = new Promise((resolve, reject) => {
          window.setTimeout(() => { 
            store.updateTimer(store.gameSpeed)
            store.increaseCurrentIndex(); 
            resolve("Done!") 
          }, store.gameSpeed)
        });
        let result = await promise; // wait until the promise resolves (*)
        context.startAnimation()
      }
    }
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