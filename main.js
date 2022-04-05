import Programm from "./class/programm.class.js"
import Character from "./class/character.class.js"

const hero = new Character("hero", 200, 35, 10, 150);
const dragon = new Character("dragon", 250, 20, 15, 100);
let programm = new Programm(hero, dragon);


// dans le constructor:
    // créer les propriétés des personnages avec des valeurs par defauts (instanciation)
    // appel d'une méthode affichage
    //gestionnaire d'événements (...)


// méthode :
    // affichage
    // onClickAttack
    // onClickDefense
    // onClickSpell
    // counter --> lié au dragon


// Pour la méthode affichage:
    // verifier les point de vie, injecter en fonction soit le message de combat soit la victoire ou la défaite

// Pour la méthode attack:
    // c'est un button attention au comportement par défaut
    // faire attaquer le perso
    // le dragon counter
    // mise à jour de l'affichage


//    Perso -> 
// constructor prends des arguments lié aux instances créées dans la class Program, les initialisé



// méthode:
    // attack
    // defense
    // spell