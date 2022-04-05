import getRandomInt from "../utilities/utilities.js";

class Character {
    // le constructor recoit en arguments des parametres de l'instanciation de la class
    constructor(name, healthPoints, attackPoints, defensePoints, magicPoints, deathFunction){
        this.name = name
        this.healthPoints = healthPoints;
        this.attackPoints = attackPoints;
        this.defensePoints = defensePoints;
        this.magicPoints = magicPoints;
        this.isDefending = false;
        this.deathFunction = deathFunction;
    }

    get currentHealthPoints(){
        return this.healthPoints;
    }

    set currentHealthPoints(newHealthPoints){
        this.healthPoints = newHealthPoints;
        if(this.healthPoints <= 0){
            console.log(`${this.name} perished !`);
            this.deathFunction();
            return;
        }
        console.log(`${this.name} has ${this.healthPoints} left`);
    }

    get currentAttackPoints(){
        return this.attackPoints;
    }
   
    get currentMagicPoints(){
        return this.magicPoints;
    }

    set currentMagicPoints(newMagicPoints){
        this.magicPoints = newMagicPoints;
        if(this.magicPoints < 0)
            this.magicPoints = 0;
        console.log(`The ${this.name} has ${this.magicPoints} magic points left`);
    }   
   
    get currentDefensePoints(){
        return this.defensePoints;
    }

    set currentDefensePoints(newDefensePoints){
        this.defensePoints = newDefensePoints;
        if(this.defensePoints < 0)
            this.defensePoints = 0;
        console.log(`${this.name} now has ${this.defensePoints} defense points  .`);
    }   

    attack(attackedCharacter){
        console.log(`the ${attackedCharacter.name} has ${attackedCharacter.currentHealthPoints} hp.`);
        let attackDamage = getRandomInt(this.currentAttackPoints);
        console.log(`the ${this.name} has ${this.currentAttackPoints} max attack points and get an attack of ${attackDamage}`);
        console.log(`the ${attackedCharacter.name} has ${attackedCharacter.currentDefensePoints} defense points`);
        attackDamage -= attackedCharacter.currentDefensePoints;
        if(attackDamage < 1){
            console.log(`the ${this.name} tried and attack against ${attackedCharacter.name} but did no damage !`)
            return;
        }
        console.log(`the ${this.name} attacks ${attackedCharacter.name} for ${(attackDamage)} points.`);
        attackedCharacter.currentHealthPoints = attackedCharacter.currentHealthPoints - attackDamage;
    }

    defend(){
        let formerdefensePoints = this.defensePoints;
        this.defensePoints += 1 + getRandomInt(9);
        console.log(`${this.name} increased its defense from ${formerdefensePoints} to ${this.defensePoints}`);
    }

    spell(attackedCharacter){
        console.log(`the ${attackedCharacter.name} has ${attackedCharacter.currentHealthPoints} hp.`);
        let magicPointsSpent = this.currentAttackPoints + getRandomInt(this.currentAttackPoints);
        if(magicPointsSpent > this.currentMagicPoints){
            magicPointsSpent = this.currentMagicPoints;
        }
        console.log(`the ${this.name} launch an attack of ${magicPointsSpent} magic points.`);
        attackedCharacter.currentHealthPoints = attackedCharacter.currentHealthPoints - magicPointsSpent;
        this.currentMagicPoints -= magicPointsSpent;
        attackedCharacter.currentDefensePoints -= magicPointsSpent;
    }
}

export default Character;