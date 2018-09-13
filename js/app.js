////////////  VARIABLES

const phrases = [
    "May the Force be with you",
    "You talkin to me",
    "I am your father",
    "Why so serious",
    "Bond James Bond",
    "I see dead people",
    "I'll be back",
    "To infinity and beyond",
    "Houston we have a problem",
    "Here is Johnny",
    "Say hello to my little friend",
    "Hasta la vista baby",
    "My precious",
];


const start_screen = document.querySelector("#overlay");
const game_start = document.querySelectorAll(".btn__reset")[0];
const select_phrase = Math.floor(Math.random() * 14);
const keyboard = document.querySelector("#qwerty");
const phrase = document.querySelector("#phrase");

let missed = 0;

//////////  FUNCTIONS

function getRandomPhraseAsArray(arr) {
    var a =  arr[select_phrase];
    const b = [];

    for (let i = 0; i < a.length; i += 1) {
        b.push(a.charAt(i));
    }

    return b
}

///// Start button funciontality

game_start.addEventListener("click", () => {
    start_screen.style.display = "none";

    console.log(getRandomPhraseAsArray(phrases));
});


/// selecting randonly the phrase when the person clicks the botton

