import { GameObject } from "./gameobject.js";

class Sprite extends GameObject{
    filePath;
    image;
    visible;

    constructor(filePath){
        super(0, 0, 0);

        this.filePath = filePath;
        this.image = new Image();
        this.image.onload = () => {
            this.visible = true;
        };
        this.image.src = filePath;
    }

    draw(context) { 
        if(this.visible){
            context.drawImage(this.image, Math.round(this.x), Math.round(this.y), this.image.width, this.image.height);
        }
    }

    setMiddle(x, y){
        this.x = x - this.image.width/2;
        this.y = y - this.image.height/2;
    }
}

export { Sprite };