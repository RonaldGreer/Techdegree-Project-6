const div = document.getElementById('qwerty');
const phraseDiv = document.getElementById('phrase');
const a = document.querySelector('.btn__reset');
let missed = 0;
const startDiv = document.querySelector('.start');
const keyboard = document.querySelector('#qwerty');
const letters = document.querySelectorAll('.letter');
const misses = document.querySelector('.misses');
//@Sarah (she/her) showed me the correct syntax my arrays should be in for this challenge, as well as suggesting using the split() method on slack.


const phrases = [
    "may the force be with you",
    "this is the way",
    "never tell me the odds",
    "I have a bad feeling about this",
    "hello there"
];


// listens for the start game button to be pressed
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


//credit
let li = document.querySelector('li');
let ul = document.querySelector('ul');

// adds the letters of a string to the display
const addPhraseToDisplay = arr => {
        let items = ''; 
    for ( let i = 0; i < arr.length; i++) {
        items += `<li>${ arr[i] }</li>`
        li.textContent = arr.value;


        ul.appendChild(li);

    }

    if (li.textContent === ' ') {
        li.className = 'space';
    } else {
            li.className = 'letter';
    }

    return items;
};
let phraseArray = getRandomPhraseAsArray(phrases);
//
document.querySelector('ul').innerHTML = `
  ${addPhraseToDisplay(phraseArray)}
`;

addPhraseToDisplay(phraseArray);


// check if a letter is in the phrase
const checkLetter = button => {

    //The following code is from and based off of the office hours session for the unit 6 project on slack(hosted by @Amber(she/her)
    let matched = null;

    for (i=0; i < letters.length; i++) {
        if (button === letters[i].textContent.toLowerCase()) {
            letters[i].classList.add('show');
            matched = true;
        }
    }
    return matched;
}


// listen for the onscreen keyboard to be clicked
keyboard.addEventListener('click', e => {

     //The following code is from and based off of the office hours session for the unit 6 project on slack(hosted by @Amber(she/her)
    if (e.target.tagName === "BUTTON") {
        e.target.className = 'chosen';
        e.target.disabled = true;
        const match = checkLetter(e.target.textContent.toLowerCase());
        if (match === null) {
          missed++;
          misses.textContent = missed;
        }
      }
});



// check if the game has been won or lost
const checkWin = () => {
}