const store = {
  sequence: "AAGATCGCAATC",
  currentNucIndex: 0,
  increaseCurrentIndex() {
    const sequence = store.sequence
    const n = sequence.length
    const i = store.currentNucIndex
    const refNuc = store.sequence[n-i-2]
    if (store.currPlayerNuc == store.complement[refNuc]) { store.score += 50 }
    store.currentNucIndex += 1
    store.prevPlayerNuc = store.currPlayerNuc
    store.playerNucleotides = ['B', 'B', '_', store.prevPlayerNuc]
  },
  enableInput() {
    store.inputEnabled = false
  },
  updateTimer(value) {
    store.timer = value
  },
  gameSpeed: 5000,
  complement: { 'A': 'T', 'C': 'G', 'G': 'C', 'T': 'A' },
  prevPlayerNuc: '',
  currPlayerNuc: '_',
  playerNucleotides: [],
  score: 0,
  timer: 5000,
  inputEnabled: true,
}

store.prevPlayerNuc = store.complement[store.sequence[store.sequence.length-1]]
store.playerNucleotides = ['B', 'B', '_', store.prevPlayerNuc]

export { store };