import { Sprite } from "./sprite.js";
import { lerp } from "./utility.js";
import { Vector2D } from "./vector2d.js";
import { Weapon } from "./weapon.js";

class Ship extends Sprite{
    
    weapon_L;
    weapon_R;

    handling = 3;   //normal range: [slow] 1 - 10 [tight];
    handlingCoeff = 1000;

    constructor(){
        super("./res/ship_body.png");
        this.weapon_L = new Weapon("./res/weapon_L.png");
        this.weapon_R = new Weapon("./res/weapon_R.png");
    }
    
    moveTo(position){
        //offset to middle
        let x = Math.round(position.x - this.image.width/2);
        let y = Math.round(position.y - this.image.height/2);
        //interpolation
        this.position.x = lerp(this.position.x, x, this.handling/this.handlingCoeff);
        this.position.y = lerp(this.position.y, y, this.handling/this.handlingCoeff);

        //set the weapons to follow the new position
        this.weapon_L.moveTo(this.position);
        this.weapon_R.moveTo(this.position);
    }

    draw(context) { 
        if(this.visible){
            this.weapon_L.draw(context);
            this.weapon_R.draw(context);
            context.drawImage(this.image, Math.round(this.position.x), Math.round(this.position.y), this.image.width, this.image.height);
        }
    }
}

export { Ship };