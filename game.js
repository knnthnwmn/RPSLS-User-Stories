const Human = require('./Human')
const Ai = require('./Ai');
const prompt = require("prompt-sync")();
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
        let playerTwoinfo = prompt("Would you like to play with another human or ai?")
        if (playerTwoinfo === "human") {
            let playerTwoinfo = prompt("what is player two's name?")
            this.playerTwo = new Human(playerTwoinfo);
        }
        else {
            this.playerTwo = new Ai
            console.log("You have chosen to play against an AI.");
        }

    }

    compareGestures() {

        let listOfGestures = ["rock","paper","scissors","lizard","spock"];
        if (this.playerOne.gestureSelection === this.playerTwo.gestureSelection) {
            console.log("its a tie")
        }
        else {
            switch (this.playerOne.gestureSelection) {
                case "rock":
                    if (this.playerTwo.gestureSelection === "scissors") {
                        this.playerOne.sore++
                        console.log("Rock crushes scissors!");
                    }
                    else if (this.playerTwo.gestureSelection === "lizard") {
                        this.playerOne.sore++
                        console.log("Rock splats lizard!");
                    }
                    else {
                        this.playerTwo++
                        console.log("Player two wins!");
                    }
                        break;

                case "paper":
                    if (this.playerTwo.gestureSelection === "rock") {
                            this.playerOne.sore++
                            console.log("Paper covers rock!");
                    }
                    else if (this.playerTwo.gestureSelection === "spock") {
                            this.playerOne.sore++
                            console.log("Spock disproved by paper!");
                    }
                    else {
                            this.playerTwo++
                            console.log("Player two wins!")
                    }
                        break;

                case "scissors":
                    if (this.playerTwo.gestureSelection === "paper") {
                                this.playerOne.sore++
                                console.log("Scissors cut paper!");
                    }
                    else if (this.playerTwo.gestureSelection === "lizard") {
                                this.playerOne.sore++
                                console.log("Lizard decapitated by scissors!");
                    }
                    else {
                                this.playerTwo++
                                console.log("Player two wins!")
                    }
                        break; 
                case "spock":
                            if (this.playerTwo.gestureSelection === "rock") {
                                    this.playerOne.sore++
                                    console.log("Spock vaporizes rock!");
                    }
                            else if (this.playerTwo.gestureSelection === "scissors") {
                                    this.playerOne.sore++
                                    console.log("Spock smashes scissors!");      
                    }
                            else {
                                    this.playerTwo++
                                    console.log("Player two wins!")
                    }  
                        break;
                        case "lizard":
                            if (this.playerTwo.gestureSelection === "spock") {
                                    this.playerOne.sore++
                                    console.log("Lizard poisons Spock!");
                    }
                            else if (this.playerTwo.gestureSelection === "paper") {
                                    this.playerOne.sore++
                                    console.log("Lizard eats paper!");       
                    }
                            else {
                                    this.playerTwo++
                                    console.log("Player two wins!")
                    }  
                        break;        
                default:
                        break;
            
            }
        }
    }



    runGame() {
        this.welcomeMessage();
        this.playerInfo();
        

        
        //Call a function that asks how many players and then creates appropriate human/AI for playerOne, playerTwo

        while (this.playerOne.score < 3 && this.playerTwo.score < 3) {
            this.playerOne.gestureSelection(); 
            this.playerTwo.gestureSelection();
            this.compareGestures();
        }
        this.displayGameWinner();
    }

    welcomeMessage() {
        console.log("Welcome to Rock, Paper, Scissors, Lizard, Spock.");
        console.log("You will have the choice to play with an AI or a second player. Please make a choice.");
        console.log("Alright. To win the game, Player one or Player two will need 3 points to win.");
        console.log("The way this works is, rock crushes scissors, scissors cuts paper, paper covers rock, rock crushes lizard, lizard poisons Spock, Spock smashes scissors, scissors decapitates lizard, lizard eats paper, paper disproves Spock, and Spock vaporizes rock.");
        console.log("If you understand how this works, let the game begin!");
    }

    displayGameWinner() {
        if (this.playerOne > this.playerTwo) {
        console.log(this.playerOne.name + " wins this game!");
        }
        else if (this.playerOne < this.playerTwo) {
            console.log(this.playerTwo.name + " wins this game!");
            }
    }
}



module.exports = Game;