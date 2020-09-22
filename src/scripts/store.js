const store = {
  inputNucleotide(nuc) {
    const context = this
    const sequence = store.sequence
    const refNuc = store.referenceNucleotides[2]
    store.currPlayerNuc = nuc
    const complement = (store.gameMode === 'RNA') ? store.RNAcomplement : store.DNAcomplement
    if (nuc != complement[refNuc]) {
      store.playerScore += store.negativeScore
      store.wrongNucleotides += 1
      store.playerNucleotides = ['B', 'B', '_', 'X']
    }
    else { 
      store.playerScore += store.positiveScore
      store.correctNucleotides += 1
      store.playerNucleotides = ['B', 'B', '_', nuc]
    }
    
    store.totalNucleotides += 1
    store.referenceNucleotides = [ store.randomNucGenerator() ].concat(store.referenceNucleotides.slice(0,3))
  },
  startGame() {
    store.totalNucleotides = 0
    store.playerScore = 0
    store.wrongNucleotides = 0
    store.correctNucleotides = 0
    store.gameStatus = 'start'
    store.gameModeChange = true
    store.enableInput()
    store.setTimeOuts()
  },
  endGame() {
    store.disableInput()
    for(let t in store.timeOuts) {
      window.clearTimeout(store.timeOuts[t])
    }
    store.playerTime = ((store.totalTime - store.timer)/1000).toFixed(1)
    store.gameStatus = 'end'
    store.gameModeChange = false
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
      store.endGame()
      store.disableInput()
    }, store.totalTime))
  },
  randomNucGenerator() {
    const val = Math.random()
    if ( val <= 0.25 ) { return 'A' }
    else if ( val <= 0.5 ) { return 'C' }
    else if ( val <= 0.75 ) { return 'G' }
    else { return 'T' }
  },
  totalNucleotides: 0,
  wrongNucleotides: 0,
  correctNucleotides: 0,
  gameMode: 'DNA',
  gameStatus: 'enter',
  gameModeChange: false,
  timeOuts: [],
  gameSpeed: 5000,
  positiveScore: 100,
  negativeScore: -50,
  DNAcomplement: { 'A': 'T', 'C': 'G', 'G': 'C', 'T': 'A' },
  RNAcomplement: { 'A': 'U', 'C': 'G', 'G': 'C', 'T': 'A' },
  referenceNucleotides: [],
  playerNucleotides: [],
  playerScore: 0,
  totalTime: 30000,
  playerTime: 0,
  timer: 0,
  inputEnabled: true,
}

store.playerNucleotides = ['B', 'B', '_', 'A']
store.referenceNucleotides = ['A', 'C', 'C', 'T']
store.timer = store.totalTime

export { store };