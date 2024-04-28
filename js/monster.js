// Variables globales décrivant l'état du monstre
let name;
let life;
let money;
let awake = false;


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
    init("Monstre", 100, 50);
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
document.getElementById("b6").onclick = function () {
    show();
}
document.getElementById("b7").onclick = function () {
    work();
}
let status = document.getElementById("status");
let actionbox = document.getElementById("actionbox");


// Fonctions de déroulement de l'application (actions du monstre)

function run() {
}

function fight() {
}

function work() {
}

function sleep() {
}

function eat() {
}

function show() {
}


// Fonction de démarrage de l'application
function go() {
    init("Monstre", 100, 50);
    document.getElementById("b6").onclick = showme;
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