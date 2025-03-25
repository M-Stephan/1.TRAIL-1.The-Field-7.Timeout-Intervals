/** @const {HTMLElement} header -- Cible le <header> */
const header = document.getElementById("header");

/** @const {HTMLElement} h2 -- Crée un <h2> */
const h2 = document.createElement("h2");
h2.id = "score"

/** @description -- Ajoute le <h1> dans le <header> */
header.appendChild(h2);


const trous = document.querySelectorAll(".trous");

let taupe = null;
let timeoutID = null;
let score = 0;
let timeLeft = 60; // Temps de jeu en secondes
let gameRunning = true; // Variable pour arrêter le jeu

export function spawnTaupe(time) {
    if (taupe) {
        taupe.style.backgroundImage = "url('../assets/buis-one.png')";
        taupe.style.backgroundSize = "contain";
        taupe.style.backgroundPosition = "center";
        taupe.style.backgroundRepeat = "no-repeat";
        taupe = null;
    }
    
    const randomTaupe = trous[Math.floor(Math.random() * trous.length)];
    taupe = randomTaupe;
    taupe.style.backgroundImage = `url("../assets/taupe.png")`;
    taupe.style.backgroundSize = "contain";
    taupe.style.backgroundPosition = "center";
    taupe.style.backgroundRepeat = "no-repeat";

    
    timeoutID = setTimeout(() => {
        if (taupe) {
            taupe.style.backgroundImage = "none";
            taupe = null;
        }
    }, time);
}

trous.forEach((trou) => {
    trou.addEventListener("click", () => {
        if (trou === taupe) {
            clearTimeout(timeoutID);
            taupe.style.backgroundImage = "url('../assets/buis-one.png')";
            taupe.style.backgroundSize = "contain";
            taupe.style.backgroundPosition = "center";
            taupe.style.backgroundRepeat = "no-repeat";
            score++;
        }
    });
});

export function start(t1, t2) {
    // Afficher le décompte avant de commencer le jeu
    let countdown = 3;
    h2.textContent = countdown;  // Affiche "3" dans le h2

    let countdownInterval = setInterval(() => {
        countdown--;
        
        // Affiche le décompte ou "GO!" selon la valeur de countdown
        if (countdown > 0) {
            h2.textContent = countdown;
        } else {
            h2.textContent = "GO!";
        }
        
        // Lorsque le décompte atteint 0, on commence le jeu
        if (countdown <= 0) {
            clearInterval(countdownInterval); // Arrête le décompte
            startGame(t1, t2); // Démarre le jeu
        }
    }, 1000); // Chaque seconde, on réduit le décompte de 1
     
    function startGame(t1, t2) {
        let timer = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                h2.textContent = `Temps: ${timeLeft}s`;
            } else {
                clearInterval(timer);
                clearInterval(spawnInterval);
                gameRunning = false;
                h2.innerHTML = `Temps écoulé !<br>Score final : ${score}`;
                score = 0;
                timeLeft = 60;
                gameRunning = true;

            }
        }, 1000);

        let spawnInterval = setInterval(() => {
            if (gameRunning) spawnTaupe(t1);
        }, t2);
    }
}

