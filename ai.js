class Die {
    constructor(numberOfSides) {
      this.numberOfSides = numberOfSides;
    }
  
    generateRandomNumber() {
      let randomNumber = Math.floor(Math.random() * this.numberOfSides) + 1;
      return randomNumber;
    }
  }

  module.exports = Die