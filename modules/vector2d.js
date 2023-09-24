class Vector2D {
    x;
    y;

    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    normalize(){
        return new Point( this.x / this.length(), this.y / this.length() );
    }

    length(){
        return Math.sqrt(this.x*this.x + this.y*this.y);
    }
}

export { Vector2D };