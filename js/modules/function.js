/** @const {HTMLElement} header -- cible le <header> */
const header = document.getElementById("header");
/** @const {HTMLElement} h1 -- cible le <h1> */
const h1 = document.createElement("h1");
/** @description ajoute le <h1> dans le <header> */
header.appendChild(h1)

/**
 * 
 * @param {string} word
 * @description -- Function permettant de taper le mot 1 lettre à la seconde
 * 
 */
export function setText(word) {
    for (let i = 0; i < word.length; i++) {
        setTimeout(function() {
            h1.innerText += word[i] 
        }, i * 1000)
    }
}

/* --------------------------------------------------------------- */

