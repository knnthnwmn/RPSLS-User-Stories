const Human = require('./Human')
const Ai = require('./Ai');
// const Player = require('./Player');

class Game {
    constructor() {
        this.playerOne = new Human(" ");
        this.playerTwo = new Human(" ");

        this.gestures = [];

    }
}

