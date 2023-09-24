import { Vector2D } from "./vector2d.js";

class GameObject {
    position = new Vector2D(0, 0)
    z = 0;
    
    constructor(x, y, z){
        this.position.x = x;
        this.position.y = y;
        this.z = z;
    }

    zCompare = (a, b) => a.z - b.z;
}

export { GameObject };