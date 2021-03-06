const div = document.getElementById('qwerty');
const phraseDiv = document.getElementById('phrase');
const a = document.querySelector('.btn__reset');
const startDiv = document.querySelector('.start');
const keyboard = document.querySelector('#qwerty');
const heart = document.getElementsByClassName('tries');
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
    let phraseArray = arr[randomNum].split("");
    return phraseArray;
};
getRandomPhraseAsArray(phrases);




// adds the letters of a string to the display
const addPhraseToDisplay = arr => {
    for ( let i = 0; i < arr.length; i++) {
        //some of the code in this function was suggested by @Brian Jensen (he/him) on slack, ideas were also suggested by @Rohald (he/him)
        const list = document.createElement("li");
        list.textContent = arr[i];
        if (list.textContent === ' ') {
            list.className = 'space';
        } else {
                list.className = 'letter';
        }
        const existing = document.querySelector("ul");
        existing.appendChild(list);
          
          
    }


};
//variable to fix scoping issues was suggested by @Amber (she/her) on slack
let phraseArray = getRandomPhraseAsArray(phrases);

addPhraseToDisplay(phraseArray);

//const keyboard = document.querySelector('#qwerty');(div)
const letters = document.querySelectorAll('.letter');
const misses = document.querySelector('.misses');
let missed = 0;

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
};


//work on this
// listen for the onscreen keyboard to be clicked
keyboard.addEventListener('click', (e) => {
     //The following code is from and based off of the office hours session for the unit 6 project on slack(hosted by @Amber(she/her)
    if (e.target.tagName === "BUTTON") {
        e.target.className = 'chosen';
        e.target.disabled = true;
        const match = checkLetter(e.target.textContent.toLowerCase());
        if (match === null) {
          document.querySelectorAll('img')[missed].src = "images/lostHeart.png";
          missed++;
          //@Brian Jensen (he/him) suggested using the querySelectorAll selector and using missed as the index value.
        }
        checkWin();
      }
});



// check if the game has been won or lost
const checkWin = () => {
    const class1 = document.getElementsByClassName('letter');
    const class2 = document.getElementsByClassName('show');
    const titleCard = document.getElementById('overlay');
    if (class1.length === class2.length) {
        startDiv.classList.replace('start', 'win');
        titleCard.style = 'display';
        startDiv.display = 'flex';
        document.querySelector('h2').innerHTML = "you win!";
        a.style.display = 'none';
    }
    if (missed === 5 ) {
        startDiv.classList.replace('start', 'lose');
        titleCard.style = 'display';
        startDiv.display = 'flex';
        document.querySelector('h2').innerHTML = "you lose!";
        a.style.display = 'none';
    }
    

}