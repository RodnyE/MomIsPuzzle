
const words = [ 
  'BELLA',
  'INTELIGENTE',
  'ALEGRE',
]
 
export class Engine {
  constructor() {
    this.wordIndex = 0;
    this.level = 0;
    this.winner = false;
  }

  checkWord(input) {
    return input === this.getWord();
  }

  getWord() {
    return words[this.wordIndex];
  }

  getChars() {
    let chars = this.getWord().split('');
    chars.sort(() => Math.random() - 0.5);

    return chars;
  }
  
  setLevel(level) {
    if (level > words.length - 1) {
      this.winner = true;
      this.level = words.length;
      return;
    }

    this.wordIndex = level;
    this.level = level;
    this.winner = false;
  }

  nextLevel() {
    this.setLevel(this.level + 1);
  }

}