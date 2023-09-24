import { Sprite } from "./sprite.js";
import { lerp } from "./utility.js";

class Weapon extends Sprite {
    maxDistance = 50;

    handling = 8;   //normal range: [slow] 1 - 10 [tight]
    handlingCoeff = 100;

    constructor(filePath){
        super(filePath);
    }

    moveTo(position){
        this.position.x = lerp(this.position.x, position.x, this.handling/this.handlingCoeff);
        this.position.y = lerp(this.position.y, position.y, this.handling/this.handlingCoeff);
    }
}

export { Weapon };