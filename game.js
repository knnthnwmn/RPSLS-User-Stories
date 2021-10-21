const Human = require('./Human')
const Ai = require('./Ai');
// const Player = require('./Player');

class Game {
    constructor() {
        this.playerOne = new Human(" ");
        this.playerTwo = new Human(" ");

        this.listOfGestures = [];

    }

    playerInfo() {
        let playerOneinfo = prompt("what is player ones's name?")
        this.playerOne = new Human(playerOneinfo);
        let playerTwoinfo = prompt("Would you like to play with another human or ai")
        if (playerTwoinfo === "human") {
            let playerTwoinfo = prompt("what is player two's name?")
            this.playerTwo = new Human(playerTwoinfo);
        }
        else {
            this.playerTwo = new Ai
            console.log("You have chosen to play against an AI.");
        }

    }

    comparingGestures() {

        let listOfGestures
    }


















}

