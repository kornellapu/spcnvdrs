import { Vector2D } from "./vector2d.js";

class Path {
    end;
    start;

    begin;
    duration; //ms

    interpolation;

    constructor(start, end, begin, duration){
        this.start = new Vector2D(start.x, start.y);
        this.end = new Vector2D(end.x, end.y);
        this.begin = begin;
        this.duration = duration;

        this.interpolation = lerp;
    }




}

export { Path };