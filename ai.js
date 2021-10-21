const Player = require('./Player')

class AI extends Player {
    constructor(name) {
        super(name);
        this.score = 0;
    }
    
    gestureSelection() {
        // get a random number
        let randomNumber = this.generateRandomNumber(this.listOfGestures.length);
        this.gestureSelection = this.listOfGestures[randomNumber];
        console.log("Player " + this.super + "has chose the gesture of " + this.gestureSelection + "and has now achieved the score of " + this.score + ".");
    }
    generateRandomNumber(maximum) {
        let randomNumber = Math.floor(Math.random() * maximum);
        return randomNumber;
}
}


module.exports = Ai;