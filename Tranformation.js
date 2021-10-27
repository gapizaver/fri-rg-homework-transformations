import { Matrix } from "./Matrix.js";
import { Vector } from "./Vector.js";

export class Transformation {
    constructor() {
        this.transMatrix = new Matrix(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    }

    translate(v) {
        let m1 = new Matrix(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        m1.m[3] = v.x;
        m1.m[7] = v.y;
        m1.m[11] = v.z;

        this.transMatrix = this.transMatrix.multiplication(m1);
    }

    scale(v) {
        let m1 = new Matrix(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        m1.m[0] = v.x;
        m1.m[5] = v.y;
        m1.m[10] = v.z;

        this.transMatrix = this.transMatrix.multiplication(m1);
    }

    rotateX(angle) {
        let m1 = new Matrix(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        m1.m[5] = Math.cos(angle);
        m1.m[6] = -1* Math.sin(angle);
        m1.m[9] = Math.sin(angle);
        m1.m[10] = Math.cos(angle);
        
        this.transMatrix = this.transMatrix.multiplication(m1);
    }

    rotateY(angle) {
        let m1 = new Matrix(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        m1.m[0] = Math.cos(angle);
        m1.m[3] = Math.sin(angle);
        m1.m[8] = -1 * Math.sin(angle);
        m1.m[10] = Math.cos(angle);

        this.transMatrix = this.transMatrix.multiplication(m1);
    }

    rotateZ(angle) {
        let m1 = new Matrix(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        m1.m[0] = Math.cos(angle);
        m1.m[1] = -1* Math.sin(angle);
        m1.m[4] = Math.sin(angle);
        m1.m[5] = Math.cos(angle);

        this.transMatrix = this.transMatrix.multiplication(m1);
    }

    transform(v) {
        return this.transMatrix.multiplyVector(v);
    }
}