/** @description -- Importe le module function.js */
import { setText, setTime } from "./modules/function.js";

/** @const {HTMLElement} header -- Cible le <header> */
const header = document.getElementById("header");

/** @const {HTMLElement} h1 -- Crée un <h1> */
const h1 = document.createElement("h1");
/** @const {HTMLElement} h3 -- Crée un <h3> */
const h3 = document.createElement("h3");

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


/* --------------------------------------------------------------- */

setInterval(function() {
    setTime(h3)
}, 1000)