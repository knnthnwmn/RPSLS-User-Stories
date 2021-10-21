
const Player = require('./Player')
const gesturePrompt = require("prompt-sync")();




class Human extends Player {
    constructor(name){
        super(name);
    
    } 
    
    
    chooseAGesture() {
        
        let userInput = gesturePrompt(this.name + " please choose a gesture.'Rock','Paper','Scissors','Lizard','Spock'. ");
        switch (userInput) {
            case "Rock":
                this.gestureSelection = this.listOfGestures[0]
                break;
            case "Paper":
                this.gestureSelection = this.listOfGestures[1]
                break;
            case "Scissors":
                this.gestureSelection = this.listOfGestures[2]
                break;
            case "Lizard":
                this.gestureSelection = this.listOfGestures[3]
                break;
            case "Spock":
                this.gestureSelection = this.listOfGestures[4]
                break;
            default:
                this.chooseAGesture()
                break;
        }
        console.log("Player " + this.super + "has chose the gesture of " + this.chosenGesture + "and has now achieved the score of " + this.score + ".");
    }

}
module.exports = Human;




