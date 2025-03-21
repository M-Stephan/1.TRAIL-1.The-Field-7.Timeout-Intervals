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


let time1 = 1500;
let time2 = 1000;

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

export function spawnTaupe() {
    if (taupe) {
        taupe.style.backgroundImage = "none";
        taupe = null;
    }
    
    const randomTaupe = trous[Math.floor(Math.random() * trous.length)];
    taupe = randomTaupe;
    taupe.style.backgroundImage = "url('../assets/taupe.png')";
    taupe.style.backgroundSize = "contain";
    taupe.style.backgroundPosition = "center";
    taupe.style.backgroundRepeat = "no-repeat";

    
    timeoutID = setTimeout(() => {
        if (taupe) {
            taupe.style.backgroundImage = "none";
            taupe = null;
        }
    }, time2);
}



trous.forEach((trou) => {
    trou.addEventListener("click", () => {
        if (trou === taupe) {
            clearTimeout(timeoutID);
            taupe.style.backgroundImage = "none";
            score++;
        }
    });
});

export function start() {
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
            startGame(); // Démarre le jeu
        }
    }, 1000); // Chaque seconde, on réduit le décompte de 1
     
    function startGame() {
        let timer = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                h2.textContent = `Temps: ${timeLeft}s`;
            } else {
                clearInterval(timer);
                clearInterval(spawnInterval);
                gameRunning = false;
                h2.textContent = `Temps écoulé ! Score final : ${score}`;
                score = 0;
                timeLeft = 60;
                gameRunning = true;

            }
        }, 1000);

        let spawnInterval = setInterval(() => {
            if (gameRunning) spawnTaupe();
        }, time1);
    }
}

