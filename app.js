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
}