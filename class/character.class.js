import getRandomInt from "../utilities/utilities.js";

class Character {
    // le constructor recoit en arguments des parametres de l'instanciation de la class
    constructor(name, healthPoints, attackPoints, defensePoints, magicPoints, logs){
        this.name = name
        this.healthPoints = healthPoints;
        this.attackPoints = attackPoints;
        this.defensePoints = defensePoints;
        this.magicPoints = magicPoints;
        this.isDefending = false;
        this.logs = logs;
    }

    get currentHealthPoints(){
        return this.healthPoints;
    }

    set currentHealthPoints(newHealthPoints){
        this.healthPoints = newHealthPoints;
        if(newHealthPoints <= 0){
            this.logs.addLog(`${this.name} is defeated ! `);
            return;
        }
        this.logs.addLog(`${this.name} has ${this.healthPoints} left`);
        console.log(this.logs.getLogs());
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
        this.logs.addLog(`The ${this.name} has ${this.magicPoints} magic points left`);
    }   
   
    get currentDefensePoints(){
        return this.defensePoints;
    }

    set currentDefensePoints(newDefensePoints){
        this.defensePoints = newDefensePoints;
        if(this.defensePoints > 20)
            this.defensePoints = 20;
        if(this.defensePoints < 0)
            this.defensePoints = 0;
        this.logs.addLog(`${this.name} now has ${this.defensePoints} defense points  .`);
    }   

    attack(attackedCharacter){
        this.logs.addLog(`the ${attackedCharacter.name} has ${attackedCharacter.currentHealthPoints} hp.`);
        let attackDamage = getRandomInt(this.currentAttackPoints);
        this.logs.addLog(`the ${this.name} has ${this.currentAttackPoints} max attack points and get an attack of ${attackDamage}`);
        this.logs.addLog(`the ${attackedCharacter.name} has ${attackedCharacter.currentDefensePoints} defense points`);
        attackDamage -= attackedCharacter.currentDefensePoints;
        if(attackDamage < 1){
            this.logs.addLog(`the ${this.name} tried and attack against ${attackedCharacter.name} but did no damage !`)
            return;
        }
        this.logs.addLog(`the ${this.name} attacks ${attackedCharacter.name} for ${(attackDamage)} points.`);
        attackedCharacter.currentHealthPoints = attackedCharacter.currentHealthPoints - attackDamage;
    }

    defend(){
        let formerdefensePoints = this.currentDefensePoints;
        this.currentDefensePoints += 1 + getRandomInt(9);
        this.logs.addLog(`${this.name} increased its defense from ${formerdefensePoints} to ${this.currentDefensePoints}`);
    }

    spell(attackedCharacter){
        this.logs.addLog(`the ${attackedCharacter.name} has ${attackedCharacter.currentHealthPoints} hp.`);
        let magicPointsSpent = this.currentAttackPoints + getRandomInt(this.currentAttackPoints);
        if(magicPointsSpent > this.currentMagicPoints){
            magicPointsSpent = this.currentMagicPoints;
        }
        this.logs.addLog(`the ${this.name} launch an attack of ${magicPointsSpent} magic points.`);
        attackedCharacter.currentHealthPoints = attackedCharacter.currentHealthPoints - magicPointsSpent;
        this.currentMagicPoints -= magicPointsSpent;
        attackedCharacter.currentDefensePoints -= magicPointsSpent;
    }
}

export default Character;