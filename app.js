const div = document.getElementById('qwerty');
const phraseDiv = document.getElementById('phrase');
const a = document.querySelector('.btn__reset');
const missed = 0;
const startDiv = document.querySelector('.start');
//@Sarah (she/her) showed me the correct syntax my arrays should be in for this challenge, as well as suggesting using the split() method on slack.
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
    //the code within the code block was adjusted from code show to me by @Sarah (she/her)
    const randomNum = Math.floor(Math.random() * arr.length);
    let phraseArray = arr[randomNum].split(' ');
    return phraseArray;
};
getRandomPhraseAsArray(phrases);


// adds the letters of a string to the display
const addPhraseToDisplay = arr => {
        let items = ''; 
    for ( let i = 0; i < arr.length; i++) {
        items += `<li>${ arr[i] }</li>`
        li.textContent = arr.value;

        if (li.textContent === ' ') {
            li.className = 'space';
        } else {
                li.className = 'letter';
        }
        ul.appendChild(li);

    }

    return items;
};

document.querySelector('ul').innerHTML = `
<ul>
  ${addPhraseToDisplay(phraseArray)}
</ul>
`;

addPhraseToDisplay(phraseArray);


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