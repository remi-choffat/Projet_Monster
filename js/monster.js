// Variables globales décrivant l'état du monstre
let name;
let life;
let money;
let awake = true;


// Constantes et éléments du DOM
const sleepTime = 7000;
const hasardInterval = 12000;
let hasardInt = setInterval(hasard, hasardInterval);
const defaultLife = 15;
const defaultMoney = 10;
const defaultName = "Monster";
let status = document.getElementById("status");
let actionbox = document.getElementById("actionbox");
let timeout;
let monsterbox = document.getElementById("monster");


// Fonction qui initialise le monstre
function init(n, l, m) {
    name = n;
    life = l;
    money = m;
}


// Fonction que affiche toutes les propriétés du monstre
function showme() {
    log("Name : " + name + "  -  Life : " + life + "  -  Money : " + money + "  -  Status : " + (awake ? "Awake" : "Asleep"));
}


// Handlers associés aux boutons
document.getElementById("b1").onclick = newLife;
document.getElementById("b2").onclick = run;
document.getElementById("b3").onclick = fight;
document.getElementById("b4").onclick = sleep;
document.getElementById("b5").onclick = eat;
document.getElementById("b7").onclick = work;
document.getElementById("k").onclick = kill;


// Fonctions de déroulement de l'application (actions du monstre)

function run() {
    if (life >= 1) {
        if (awake) {
            life--;
            log(name + " ran, and lost 1 life");
            displayStatus(life, money, awake);
            if (life <= 0) {
                kill();
            }
        } else {
            log(name + " is asleep, so he can't run");
        }
    }
}

function fight() {
    if (life >= 1) {
        if (awake) {
            if (life >= 3) {
                life -= 3;
                log(name + " fought, and lost 3 lives");
                displayStatus(life, money, awake);
                if (life <= 0) {
                    kill();
                }
            } else {
                log(name + " doesn't have enough lives to fight (3 needed)");
            }
        } else {
            log(name + " is asleep, so he can't fight");
        }
    }
}

function work() {
    if (life >= 1) {
        if (awake) {
            life--;
            money += 3;
            log(name + " worked, lost 1 life, and won 3 money unities");
            displayStatus(life, money, awake);
            if (life <= 0) {
                kill();
            }
        } else {
            log(name + " is asleep, so he can't work");
        }
    }
}

function sleep() {
    if (life >= 1) {
        if (awake) {
            awake = false;
            log(name + " fell asleep (for " + (sleepTime / 1000) + " seconds)");
            displayStatus(life, money, awake);
            timeout = setTimeout(function () {
                awake = true;
                life++;
                log(name + " woke up and won 1 life");
                displayStatus(life, money, awake);
            }, sleepTime);
        } else {
            log(name + " is already asleep");
        }
    }
}

function eat() {
    if (life >= 1) {
        if (awake) {
            if (money >= 3) {
                money -= 3;
                life += 2;
                log(name + " ate, lost 3 money unities, and won 2 lives");
                displayStatus(life, money, awake);
            } else {
                log(name + " doesn't have enough money to eat (3 unities needed)");
            }
        } else {
            log(name + " is asleep, so he can't eat");
        }
    }
}

function newLife() {
    if (life <= 0) {
        actionbox.innerHTML = "";
        go();
        awake = true;
        displayStatus(life, money, awake);
        log(name + " started a new life ☀️");
        hasardInt = setInterval(hasard, hasardInterval);
    } else {
        log(name + " is still alive ; he can't start a new life");
    }
}

function kill() {
    life = 0;
    awake = false;
    clearInterval(hasardInt);
    if (timeout) {
        clearTimeout(timeout);
    }
    displayStatus(life, money, awake);
    log(name + " is dead... 🪦")
}


// Fonction de démarrage de l'application
function go() {
    init(defaultName, defaultLife, defaultMoney);
    document.getElementById("b6").onclick = showme;
    displayStatus(life, money, awake);
}


// Fonction qui ajoute un message dans la console
function log(message) {
    let p = document.createElement("p");
    p.innerHTML = message;
    actionbox.insertBefore(p, actionbox.firstChild);
}


// Fonction qui affiche l'état du monstre
function displayStatus(life, money, awake) {
    status.innerHTML = "<li>Life : " + life + "</li><li>Money : " + money + "</li><li>" + (awake ? "Awake" : "Asleep") + "</li><li>" + ("💖".repeat(life)) + "</li><li>" + ("💰".repeat(money)) + "</li>";
    monsterbox.style.backgroundColor = (life <= 0 ? "grey" : life <= 5 ? "red" : life <= 10 ? "orange" : life <= 15 ? "lightblue" : "lightgreen");
    monsterbox.style.borderWidth = (money / 4) + "px";
    monsterbox.style.borderColor = (awake ? "peachpuff" : "blueviolet");
    monsterbox.childNodes[0].innerHTML = name;
    monsterbox.childNodes[1].innerHTML = (awake ? "👻" : life > 0 ? "😴" : "⚰️");
}


// Fonction qui exécute une des actions au hasard
function hasard() {
    let actions = [run, fight, work, sleep, eat];
    let randomAction = actions[Math.floor(Math.random() * actions.length)];
    randomAction();
}


// Programme principal : appel de la fonction go() au chargement de la page
window.onload = go;
