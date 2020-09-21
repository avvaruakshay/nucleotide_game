<template>
  <div :title="titles[base]">
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
      colors: { A: '#3F51B6', C: '#43A047', G: '#E54138', T: '#FD910B', U: '#FD910B', X: 'black', B: 'white', '_': '#4e4e4e'},
      titles: { A: 'Adenine', C: 'Cytosine', G: 'Guanine', T: 'Thymine', U: 'Uracil'}
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
  font-size: 2.8rem;
  width: 3.2rem;
  height: 3.2rem;
  color: white;
  border-radius: 3px; 
  display: inline-block;
}
</style>