import { Sprite } from "./sprite.js";
import { Weapon } from "./weapon.js";

class Ship extends Sprite{
    
    weapon_L;
    weapon_R;

    constructor(){
        super("./res/ship_body.png");
        this.weapon_L = new Weapon("./res/weapon_L.png");
        this.weapon_R = new Weapon("./res/weapon_R.png");
    }
    
    moveTo(x, y){
        this.setMiddle(x, y);
        this.weapon_L.moveTo(x, y);
        this.weapon_R.moveTo(x, y);
    }

    draw(context) { 
        if(this.visible){
            this.weapon_L.draw(context);
            this.weapon_R.draw(context);
            context.drawImage(this.image, Math.round(this.x), Math.round(this.y), this.image.width, this.image.height);
        }
    }
}

export { Ship };