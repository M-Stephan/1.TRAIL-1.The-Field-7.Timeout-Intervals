/** @description -- Importe le module function.js */
import { setText, setTime,  } from "./modules/function.js";
import { start } from "./modules/wam.js";

/** @const {HTMLElement} header -- Cible le <header> */
const header = document.getElementById("header");

/** @const {HTMLElement} h1 -- Crée un <h1> */
const h1 = document.createElement("h1");
/** @const {HTMLElement} h3 -- Crée un <h3> */
const h3 = document.createElement("h3");
h3.id = "time"

/** @description -- Ajoute le <h1> dans le <header> */
header.appendChild(h1);
/** @description -- Ajoute le <h3> dans le <header> */
header.appendChild(h3);

/** @var {string} word -- Mot à afficher */
const word = "Wozniak";

/** @const {interval} interval -- Lance la function setText dans un setInterval toutes les 1000ms*/
const interval = setInterval(() => {
    setText(word, h1, interval);
}, 1000);

setInterval(function() {
    setTime(h3)
}, 1000)

const startGame = document.getElementById("start");

let time1 = 1825;
let time2 = 1250;

const select = document.getElementById("select");
const selectedOption = select.options[select.selectedIndex];
select.addEventListener("change", function() {
    if (selectedOption.id === "easy") {
        time1 = 1500;
        time2 = 1000;
    } else if (selectedOption.id === "medium") {
        time1 = 1225;
        time2 = 750;
    } else if (selectedOption.id === "hard") {
        time1 = 1050;
        time2 = 500;
    }
})

startGame.addEventListener("click", function() {
    start(time1, time2);
});


