const div = document.getElementById('qwerty');
const phraseDiv = document.getElementById('phrase');
const a = document.querySelector('.btn__reset');
const missed = 0;
const startDiv = document.querySelector('.start');
//credit
const phrases = [
    "may the force be with you",
    "this is the way",
    "never tell me the odds",
    "I have a bad feeling about this",
    "hello there"
];

a.addEventListener('click', () => {
    startDiv.style.display = 'none';
});

//gets a random phrase from my 'phrases' array
const getRandomPhraseAsArray = arr => {
    //the idea for using this random number generator function was suggested to me on slack by @Phillip
    const randomNum = Math.floor(Math.random() * arr.length);
    let phraseArray = arr[randomNum].split(' ');
    return phraseArray;
}
//call the function with phrases as an input
console.log(phraseArray);

// adds the letters of a string to the display
const addPhraseToDisplay = arr => {
    for ( let i = 0; i < phrases.length; i++) {
        
        
    }
    return items;
}



// check if a letter is in the phrase
const checkLetter = button => {
}

// check if the game has been won or lost
const checkWin = () => {
}

// listen for the start game button to be pressed
startButton.addEventListener('click', () => {
});

// listen for the onscreen keyboard to be clicked
qwerty.addEventListener('click', e => {
});