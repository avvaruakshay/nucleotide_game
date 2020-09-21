const store = {
  sequence: "AAGATCGCAATC",
  currentNucIndex: 0,
  inputNucleotide(nuc) {
    const context = this
    const sequence = store.sequence
    const n = sequence.length
    const i = store.currentNucIndex
    const refNuc = store.sequence[n-i-2]
    store.currPlayerNuc = nuc
    const complement = (store.gameMode === 'RNA') ? store.RNAcomplement : store.DNAcomplement
    if (nuc != complement[refNuc]) {
      store.playerScore += store.negativeScore
      store.playerNucleotides = ['B', 'B', '_', 'X']
    }
    else { 
      store.playerScore += store.positiveScore
      store.playerNucleotides = ['B', 'B', '_', nuc]
    }
    if (i === n-2) { store.endGame() }

    store.currentNucIndex += 1
    store.referenceNucleotides = ("BBB" + sequence).toUpperCase().split('').slice(-1*(store.currentNucIndex + 4), n - store.currentNucIndex)
  },
  startGame() {
    store.currentNucIndex = 0
    store.playerScore = 0
    store.gameStatus = 'start'
    store.gameModeChange = true
  },
  endGame() {
    store.playerNucleotides[2] = 'B'
    store.gameModeChange = false
    store.disableInput()
    for(let t in store.timeOuts) {
      window.clearTimeout(store.timeOuts[t])
    }
    store.playerTime = ((store.totalTime - store.timer)/1000).toFixed(1)
    store.gameStatus = 'end'
  },
  enableInput() {
    store.inputEnabled = false
  },
  disableInput() {
    store.inputEnabled = true
  },
  updateTimer(value) {
    store.timer = value
  },
  setTimeOuts() {
    for (let i=0; i < store.totalTime/100; i++) {
      store.timeOuts.push(window.setTimeout(() => { store.updateTimer(store.totalTime-((i+1)*100)) }, (i+1)*100))
    }
    store.timeOuts.push(window.setTimeout(() => { 
      store.gameStatus = 'end'
      store.disableInput()
      store.playerTime = (store.totalTime/1000).toFixed(1)
    }, store.totalTime))
  },
  gameMode: 'DNA',
  gameStatus: 'enter',
  gameModeChange: false,
  timeOuts: [],
  gameSpeed: 5000,
  positiveScore: 100,
  negativeScore: -50,
  DNAcomplement: { 'A': 'T', 'C': 'G', 'G': 'C', 'T': 'A' },
  RNAcomplement: { 'A': 'U', 'C': 'G', 'G': 'C', 'T': 'A' },
  prevPlayerNuc: '',
  currPlayerNuc: '_',
  referenceNucleotides: [],
  playerNucleotides: [],
  playerScore: 0,
  totalTime: 10000,
  playerTime: 0,
  timer: 0,
  inputEnabled: true,
}

store.prevPlayerNuc = store.DNAcomplement[store.sequence[store.sequence.length-1]]
store.playerNucleotides = ['B', 'B', '_', store.prevPlayerNuc]
store.referenceNucleotides = store.sequence.slice(-4).split('')
store.timer = store.totalTime

export { store };