import { Sprite } from "./sprite.js";

class Enemy extends Sprite{

    paths = [];

    constructor(filePath){
        super(filePath);
    }

}

export { Enemy };