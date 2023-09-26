import { clamp, lerp } from "./utility.js";
import { Vector2D } from "./vector2d.js";

class Path {
    end;
    start;

    begin;
    duration; //ms

    interpolation;

    constructor(start, end, duration = 1000, begin = Date.now(), interpolation = lerp ){
        this.start = new Vector2D(start.x, start.y);
        this.end = new Vector2D(end.x, end.y);

        this.begin = begin;
        this.duration = duration;

        this.interpolation = interpolation;
    }

    calculate(currentTime = Date.now()){
        const timeDiff = currentTime - this.begin;
        const a = clamp( timeDiff / this.duration );
        const x = this.interpolation(this.start.x, this.end.x, a);
        const y = this.interpolation(this.start.y, this.end.y, a);
        return new Vector2D(x,y);
    }

    isFinished(){
        const currentTime = Date.now();
        return currentTime >= this.begin + this.duration;
    }

    isBegan(){
        return Date.now() >= this.begin;
    }

}

export { Path };