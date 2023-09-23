import { Sprite } from "./sprite.js";

class Weapon extends Sprite {
    maxDistance = 50;

    constructor(filePath){
        super(filePath);
    }

    moveTo(x, y){
        const xMid = Math.round(this.x + this.image.width/2);
        const yMid = Math.round(this.y + this.image.height/2);

        const xDiff = x - xMid;
        const yDiff = y - yMid;

        const distance = Math.sqrt( xDiff*xDiff + yDiff*yDiff );

        const dRatio = Math.min( 1, distance/this.maxDistance );

        this.x += dRatio * xDiff;
        this.y += dRatio * yDiff;
    }
}

export { Weapon };