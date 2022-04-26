const startGameBtn = document.getElementById('start-game-btn');
const ROCK = 'ROCK'
const PAPER = 'PAPER'
const SCISSORS = 'SCISSORS'
const DEFAULT_USER_CHOICE = ROCK
let gameIsRunning = false
const getPlayerChoice = function(){
    const selection = prompt(`${ROCK}, ${PAPER}, or ${SCISSORS}?`, '').toUpperCase();
    if(
        selection != ROCK &&
        selection != PAPER &&
        selection != SCISSORS
    ){ 
        alert('Invalid choice! We choice Rock for you');
        return DEFAULT_USER_CHOICE
    }
    return selection
}

function startGame(){
    if(gameIsRunning){
        return;
    }
    gameIsRunning = true;
    console.log('GameIsStarting...')
    const playerSelection = getPlayerChoice()
    console.log(playerSelection)
}

const person = {
    age: 9,
    greet: function greet (){ // function in a object is a method
        console.log('hello there!');
    }
}                                                                                                                                                                                                                                  
                                                                                                                                                                                                                                                                                                                                       


startGameBtn.addEventListener('click',startGame)