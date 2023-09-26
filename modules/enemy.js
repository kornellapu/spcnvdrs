import { Path } from "./path.js";
import { Sprite } from "./sprite.js";
import { easeInOutCubic } from "./utility.js";
import { Vector2D } from "./vector2d.js";

class Enemy extends Sprite{

    paths = [];
    looping = true;
    currentPathIndex;

    constructor(filePath){
        super(filePath);

        const pointA = new Vector2D(100, 100);
        const pointB = new Vector2D(200, 200);
        const pointC = new Vector2D(300, 100);
        const pointD = new Vector2D(400, 200);
        const pointE = new Vector2D(500, 100);

        this.addPathPoints(pointA, pointB);
        this.addPathPoints(pointB, pointC);
        this.addPathPoints(pointC, pointD);
        this.addPathPoints(pointD, pointE);
        this.addPathPoints(pointE, pointD);
        this.addPathPoints(pointD, pointC);
        this.addPathPoints(pointC, pointB);
        this.addPathPoints(pointB, pointA);

        this.currentPathIndex = 0;
    }

    addPathPoints(pointA, pointB, duration = 1000, begin = Date.now(), interpolation = easeInOutCubic){
        this.paths.push( new Path(pointA, pointB, duration, begin, interpolation) );
    }

    move(){
        if(this.paths[this.currentPathIndex]){
            const path = this.paths[this.currentPathIndex];
            let position = path.calculate();

            this.position.x = position.x;
            this.position.y = position.y;

            if(path.isFinished() && this.currentPathIndex < this.paths.length){
                this.currentPathIndex++;
                
                if(this.looping){
                    this.currentPathIndex = this.currentPathIndex % this.paths.length;
                }

                this.paths[this.currentPathIndex].begin = Date.now();
            }
        }
    }

}

export { Enemy };