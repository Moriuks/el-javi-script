const startGameBtn = document.getElementById('start-game-btn');

function startGame(){
    console.log('GameIsStarting...')
}

const person = {
    age: 9,
    greet: function greet (){ // function in a object is a method
        console.log('hello there!');
    }
}                                                                                                                                                                                                                                  
                                                                                                                                                                                                                                                                                                                                       
person.greet();
console.dir(person)
startGameBtn.addEventListener('click',startGame)