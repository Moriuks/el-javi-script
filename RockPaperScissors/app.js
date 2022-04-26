const startGameBtn = document.getElementById('start-game-btn');
const ROCK = 'ROCK'
const PAPER = 'PAPER'
const SCISSORS = 'SCISSORS'
const DEFAULT_USER_CHOICE = ROCK
const DRAW = 'DRAW'
const PLAYER_WINS = 'PLAYER-WINS'
const COMPUTER_WINS = 'COMPUTER-WINS'

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

const getComputerChoice = function(){
    const randomValue = Math.random();
    if(randomValue < 0.34){
        return ROCK;
    }else if( randomValue < 0.67){
        return SCISSORS;
    }else{
        return PAPER
    }
}



function startGame(){
    if(gameIsRunning){
        return;
    }
    gameIsRunning = true;
    console.log('GameIsStarting...')
    const playerSelection = getPlayerChoice()
    const computerChoice = getComputerChoice()
    console.log(playerSelection)
}

const person = {
    age: 9,
    greet: function greet (){ // function in a object is a method
        console.log('hello there!');
    }
}


                                                                                                                                                                                                                                                                                                                                       


startGameBtn.addEventListener('click',startGame)