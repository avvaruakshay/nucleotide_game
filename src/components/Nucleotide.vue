<template>
  <div>
    <span class="tag" :style="tagStyle">{{ base }}</span>
  </div>
</template>

<script>
import { store } from '../scripts/store.js'

export default {
  name: 'Nucleotide',
  props: {
    base: String
  },
  data () {
    return {
      colors: { A: '#3F51B6', C: '#43A047', G: '#E54138', T: '#FD910B', X: 'black', B: 'white', '_': '#4e4e4e'}
    }
  },
  computed: {
    tagStyle() {
      const context = this
      return { backgroundColor: context.colors[context.base] }
    }
  }
}
</script>

<style scoped>
.tag {
  font-weight: bold;
  font-size: 3rem;
  width: 3.2rem;
  height: 3.2rem;
  color: white;
  font-family: 'Ubuntu Mono', Ubuntu, monospace;
  border-radius: 3px; 
  display: inline-block;
}
</style>