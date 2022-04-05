
import getRandomInt from "../utilities/utilities.js";

class Programm {
    // le constructor recoit en arguments des parametres de l'instanciation de la class
    constructor(hero, monster) {
        this.hero = hero;
        this.monster = monster;
        this.randomAction;
        document.getElementById("attackButton").addEventListener("click", () => { this.onClickAttack() });
        document.getElementById("defendButton").addEventListener("click", () => { this.onClickDefense() });
        document.getElementById("spellButton").addEventListener("click", () => { this.onClickSpell() });
    }

    onClickAttack() {
        this.hero.attack(this.monster);
        this.counter();
        this.display();
    }

    onClickDefense() {
        this.hero.defend();
        this.counter();
        this.display();
    }

    onClickSpell() {
        this.hero.spell(this.monster);
        this.counter();
        this.display();
    }

    counter() {
        this.choseRandomAction();
        this.randomAction();
    }

    choseRandomAction() {
        let randomChoice = getRandomInt(3);
        if (randomChoice === 0) {
            this.randomAction = () => { this.monster.attack(this.hero) };
        }
        else if (randomChoice === 1) {
            this.randomAction = () => { this.monster.defend() };
        }
        else if (randomChoice === 2) {
            this.randomAction = () => { this.monster.spell(this.hero) };
        }
    }

    display() {
        if (this.hero.currentHealthPoints <= 0) {
            $("#ctn-logs").html("<h2>The monster wins !</h2>");
            $("#ctn-buttons").html("");
            return;
        }
        if (this.monster.currentHealthPoints <= 0) {
            console.log("The hero wins !");
            $("#ctn-logs").html("<h2>The hero wins !</h2>");
            $("#ctn-buttons").html("");        
            return;
        }


        $("#ctn-logs").html("");
        $("#ctn-logs").append($('<p>').html(`${this.hero.name} 
        has ${this.hero.currentHealthPoints} hp, 
        ${this.hero.currentAttackPoints} attack points, 
        ${this.hero.currentDefensePoints} defense points and 
        ${this.hero.currentMagicPoints} magic points`));

        $("#ctn-logs").append($('<p>').html(`${this.monster.name} 
        has ${this.monster.currentHealthPoints} hp, 
        ${this.monster.currentAttackPoints} attack points, 
        ${this.monster.currentDefensePoints} defense points and 
        ${this.monster.currentMagicPoints} magic points`));
    }
}

export default Programm;