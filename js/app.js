////////////  VARIABLES  /////////////

const phrases = [
    "you talkin to me",
    "i am your father",
    "why so serious",
    "bond James Bond",
    "i ll be back",
    "here is Johnny",
    "my precious",
];


const start_screen = document.querySelector("#overlay");
const game_start = document.querySelectorAll(".btn__reset")[0];
const select_phrase = Math.floor(Math.random() * 10);
const keyboard = document.querySelector("#qwerty");
const phrase = document.querySelector("#phrase");

let missed = 0;

//////////  FUNCTIONS  //////////////

/// selects randonly the phrase when the person clicks the start game button

function getRandomPhraseAsArray(arr) {
    var a =  arr[select_phrase];
    const b = [];

    for (let i = 0; i < a.length; i += 1) {
        b.push(a.charAt(i));
    }

    return b
}

/// PUTS THE HIDDEN PHRASE ON THE BOARD

function addPhraseToDisplay(arr){

    for (let i = 0; i < arr.length; i += 1) {
        const letter = document.querySelector("#phrase ul");
        const li = document.createElement("li");
        
        letter.appendChild(li);
        li.textContent = arr[i].toUpperCase();

        if (li.textContent !== " ") {
            li.className = "letter"
        } else {
            li.className = "space"
        }
    }


}

///// STARTS THE GAME

game_start.addEventListener("click", () => {
    start_screen.style.display = "none";

    const a = getRandomPhraseAsArray(phrases);
    addPhraseToDisplay(a);

});


///// CHECKS THE LETTER 

function checkLetter (chosen_letter) {
    const selected_letter = chosen_letter.toUpperCase();
    const letters = document.querySelectorAll(".letter");
    let letterFound = "null";

    for (let i = 0; i < letters.length; i += 1) {
        
         if (selected_letter === letters[i].textContent) {
            letterFound = selected_letter;
            letters[i].className += " show";
        }
    }

    return letterFound
}

//need to fix bug why is null being passes all the times?

keyboard.addEventListener("click", (event) => {

    const a = event.target;
    const b = a.textContent;

    if (a.tagName == "BUTTON") {
        a.className = "chosen";
        a.setAttribute("disabled", true);
        const c = checkLetter(b);
        console.log(c);

        if (c === "null") {
            const tries = document.querySelectorAll(".tries");
            tries[missed].firstChild.setAttribute("src","images/lostHeart.png");
            missed += 1;

        }
        
    }

});

