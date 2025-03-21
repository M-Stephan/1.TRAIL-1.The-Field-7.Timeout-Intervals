/** @var {number} letter -- initialise l'index de la lettre en cours sur 0 */
let letter = 0;

/**
 * 
 * @param {string} word
 * @description -- Function permettant de taper le mot 1 lettre à la seconde
 * 
 */
export function setText(word, h1, interval) {
    if (letter < word.length) {
        h1.innerText += word[letter];
        letter++;
    } else {
        clearInterval(interval);
    }
}

/* --------------------------------------------------------------- */

