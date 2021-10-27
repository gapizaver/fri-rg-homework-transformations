export class Vector {

    constructor(x = 0, y = 0, z = 0) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    negate() {
        return new Vector(-this.x, -this.y, -this.z);
    }

    add(v) {
        return new Vector(v.x + this.x, v.y +this.y, v.z + this.z);
    }

    subtract(v) {
        return new Vector(v.x - this.x, v.y -this.y, v.z - this.z);
    }

    multiply(v) {
        return new Vector(v.x * this.x, v.y * this.y, v.z * this.z);
    }

    divide(v) {
        return new Vector(v.x / this.x, v.y / this.y, v.z / this.z);
    }

    dot(v) {
        return this.x*v.x + this.y*v.y + this.z*v.z;
    }

    cross(v) {
        return new Vector(
            this.y*v.z - v.y*this.z,
            this.z*v.x - v.z*this.x,
            this.x*v.y - v.x * this.z,
        )
    }

    length() {
        return sqrt(Math.pow(this.x) + Math.pow(this.y) + Math.pow(this.z));
    }

    normalize() {
        let l = this.length;

        return new Vector(
            this.x/l,
            this.y/l,
            this.z/l,
        )
    }

    project(v) {
        return this.dot(v.normalize());
    }

    reflect(v) {
        let n = v.normalize();

        return this.subtract(this.dot(n).multiply(n).multiply(new Vector(2, 2, 2)));
    }

    angle(v) {
        return Math.asin(this.dot(v));
    }

    toString() {
        return `(${this.x}, ${this.y}, ${this.z})`;
    }

    toArray() {
        return [this.x, this.y, this.z];
    }
}
