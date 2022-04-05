import Animal from "./programm.class.js";

class Hero extends Personnage {
    constructor(type, name, genre, age){
        // ici super, permets d'utiliser le constructor parent
        super(type, name, genre, age);
        this.superPower = "rayon-laser";
    }

    superIntro(){
        // ici super, permets d'utiliser une méthode de la fonction parent
        console.log(super.getInfos());
        console.log("JE SUIS LA FFS !!!");
    }

    usePower(){
        return `J'utilise mon ${this.superPower}`;
    }

}

export default SuperAnimal;