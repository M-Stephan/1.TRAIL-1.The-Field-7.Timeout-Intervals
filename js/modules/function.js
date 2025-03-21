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
/** @var {number} sec -- initialise les secondes sur 0 */
let sec = 0;
/** @var {number} min -- initialise les minutes sur 0 */
let min = 0;
/**
 * 
 * @param {string} time
 * @description -- Function permettant de compter chaques minutes et les afficher sur la page web
 * 
 */
export function setTime(time) {
    if (sec < 59) {
        sec++;
    } else {
        sec = 0;
        min++;
    }
    console.log(sec)
    if (min > 0) {
        time.innerText = `${min} minute has passed`;
    } else {
        time.innerText = `${min} minutes have passed`;
    }
}