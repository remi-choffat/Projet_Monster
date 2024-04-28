// Variables globales décrivant l'état du monstre
let name;
let life;
let money;
let awake = true;


// Fonction qui initialise le monstre
function init(n, l, m) {
    name = n;
    life = l;
    money = m;
}


// Fonction que affiche toutes les propriétés du monstre
function showme() {
    alert("Nom : " + name + "\nVie : " + life + "\nArgent : " + money + "\nÉtat : " + (awake ? "Réveillé" : "Endormi"));
}


// Handlers associés aux boutons
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


function go() {
    init("Monstre", 100, 50);
    document.getElementById("b6").onclick = showme;
}

// Programme principal : appel de la fonction go() au chargement de la page
window.onload = go;