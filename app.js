const div = document.getElementById('qwerty');
const phraseDiv = document.getElementById('phrase');
const a = document.querySelector('.btn__reset');
const missed = 0;
const startDiv = document.querySelector('.start');

const phrases = [
    ['M', 'A', 'Y', ' ', 'T', 'H', 'E', ' ', 'F', 'O', 'R', 'C', 'E', ' ', 'B', 'E', ' ', 'W', 'I', 'T', 'H', ' ', 'Y', 'O', 'U'],
    ['T', 'H', 'I', 'S', ' ', 'I', 'S', ' ', 'T', 'H', 'E', ' ', 'W', 'A', 'Y'],
    ['N', 'E', 'V', 'E', 'R', ' ', 'T', 'E', 'L', 'L', ' ', 'M', 'E', ' ', 'T', 'H', 'E', ' ', 'O', 'D', 'D', 'S'],
    ['I', ' ', 'H', 'A', 'V', 'E', ' ', 'A', ' ', 'B', 'A', 'D', ' ', 'F', 'E', 'E', 'L', 'I', 'N', 'G', ' ', 'A', 'B', 'O', 'U', 'T', ' ', 'T', 'H', 'I', 'S'],
    ['H', 'E', 'L', 'L', 'O', ' ', 'T', 'H', 'E', 'R', 'E']
];

a.addEventListener('click', () => {
    startDiv.style.display = 'none';
});

//gets a random phrase from my 'phrases' array
const getRandomPhraseAsArray = arr => {
    //the idea for using this random number generator function was suggested to me on slack by @Phillip
    function random_num() {
        const randomNum = phrases.length( Math.random() * 6 ) + 1;
        return randomNum;
    }
    
    console.log( phrases[randomNum] );
    return getRandomPhrasesAsArray;
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