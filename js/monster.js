// Variables globales décrivant l'état du monstre
let name;
let life;
let money;
let awake = true;

const sleepTime = 7000;


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


// Variables globales et Handlers associés aux boutons
document.getElementById("b1").onclick = function () {
    go();
};
document.getElementById("b2").onclick = function () {
    run();
}
document.getElementById("b3").onclick = function () {
    fight();
}
document.getElementById("b4").onclick = function () {
    sleep();
}
document.getElementById("b5").onclick = function () {
    eat();
}
document.getElementById("b7").onclick = function () {
    work();
}
let status = document.getElementById("status");
let actionbox = document.getElementById("actionbox");


// Fonctions de déroulement de l'application (actions du monstre)

function run() {
    if (awake) {
        if (life >= 1) {
            life--;
            log(name + " runs, and loses 1 life");
            displayStatus(life, money, awake);
        } else {
            log(name + " doesn't have enough lives to run (1 needed)");
        }
    } else {
        log(name + " is asleep");
    }
}

function fight() {
    if (awake) {
        if (life >= 3) {
            life -= 3;
            log(name + " fights, and loses 3 lives");
            displayStatus(life, money, awake);
        } else {
            log(name + " doesn't have enough lives to fight (3 needed)");
        }
    } else {
        log(name + " is asleep");
    }
}

function work() {
    if (awake) {
        if (life >= 1) {
            life--;
            money += 3;
            log(name + " works, loses 3 lives, and wins 3 money unities");
            displayStatus(life, money, awake);
        } else {
            log(name + " doesn't have enough lives to work (1 needed)");
        }
    } else {
        log(name + " is asleep");
    }
}

function sleep() {
    awake = false;
    log(name + " fell asleep (for " + (sleepTime / 1000) + " seconds)");
    displayStatus(life, money, awake);
    setTimeout(function () {
        awake = true;
        life++;
        log(name + " woke up and won 1 life");
        displayStatus(life, money, awake);
    }, sleepTime);
}

function eat() {
    if (awake) {
        if (money >= 3) {
            money -= 3;
            life += 2;
            log(name + " eats, loses 3 money unities, and wins 2 lives");
            displayStatus(life, money, awake);
        } else {
            log(name + " doesn't have enough money to eat (3 unities needed)");
        }
    } else {
        log(name + " is asleep");
    }
}


// Fonction de démarrage de l'application
function go() {
    init("Monstre", 10, 5);
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
    status.innerHTML = "<li>Life : " + life + "</li><li>Money : " + money + "</li><li>" + (awake ? "Awake" : "Asleep") + "</li>";
}


// Programme principal : appel de la fonction go() au chargement de la page
window.onload = go;