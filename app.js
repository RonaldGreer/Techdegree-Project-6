const div = document.getElementById('qwerty');
const phraseDiv = document.getElementById('phrase');
const a = document.querySelector('.btn__reset');
const missed = 0;
const startDiv = document.querySelector('.start');

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
    const randomNum = phrases.length( Math.random() * 5 ) + 1;
    phrases[randomNum].split(' ');
    return randomNum;
}

// adds the letters of a string to the display
const addPhraseToDisplay = arr => {
    let items = ' ';
    for ( let i = 0; i < phrases.length; i++) {
        items += '<li>${ arr[i] }</li>';
        
    }
    return items;
}

    document.getElementById('phrase').innerHTML = '<ul> ${addPhraseToDisplay(phrases)} </ul>';
    ul.appendChild(li);

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