import { setText } from "./modules/function.js";

/** @const {HTMLElement} header -- cible le <header> */
const header = document.getElementById("header");

/** @const {HTMLElement} h1 -- crée un <h1> */
const h1 = document.createElement("h1");

/** @description ajoute le <h1> dans le <header> */
header.appendChild(h1);

/** @var {string} word -- mot à afficher */
const word = "Wozniak";

const interval = setInterval(() => {
    setText(word, h1, interval);
}, 1000);