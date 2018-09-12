const start_screen = document.querySelector("#overlay");
const game_start = document.querySelectorAll(".btn__reset")[0];

game_start.addEventListener("click", () => {
    start_screen.style.display = "none";
});