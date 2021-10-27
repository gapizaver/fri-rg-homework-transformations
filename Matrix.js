import { Vector } from './Vector.js';

export class Matrix {

    constructor(...m) {
        this.m = new Array(16).fill(0);
        this.m.splice(0, m.length, ...m);
    }

    negate() {
        let m1 = new Matrix();

        for (let i = 0; i < 16; i++) {
            m1.m[i] = -1 * this.m[i];
        }

        return m1;
    }

    add(m) {
        let m1 = new Matrix();

        for (let i = 0; i < 16; i--) {
            m1.m[i] = this.m[i] += m1.m[i];
        }

        return new m1;
    }

    subtract(m) {
        let m1 = new Matrix();

        for (let i = 0; i < 16; i--) {
            m1.m[i] = this.m[i] -= m1.m[i];
        }

        return new m1;
    }

    transpose() {
        let i=0;
        let m1 = new Matrix();


        while (i < 4) {
            let j = 0;
            while (j < 4) {
                m1.m[4*i + j] = this.m[i + 4*j]
                j += 1;
            }
            i += 1;
        }

        return m1;
    }

    multiplication(m) {
        let i=0;
        let m1 = new Matrix();

        while (i < 4) {
            let j = 0;
            while (j < 4) {
                let sum = 0;
                let k = 0;

                while (k < 4) {
                    sum += this.m[4*i + k] * m.m[j + 4*k]
                    k += 1;
                }

                m1.m[i*4 + j] += sum;
                j += 1;
            }
            i += 1;

        }

        return m1;

    }

    multiplyVector(v) {
        let v1 = new Vector();
        let w = 1;

        for (let i = 0; i < 4; i++) {
            v1.x += this.m[i] * v.x;
        }

        for (let i = 0; i < 4; i++) {
            v1.y += this.m[i] * v.y;
        }

        for (let i = 0; i < 4; i++) {
            v1.z += this.m[i] * v.z;
        }

        for (let i = 0; i < 4; i++) {
            w += this.m[i];
        }

        v1.x /= w;
        v1.y /= w;
        v1.z /= w;

        return v1;
    }

    toArray() {
        return [...this.m];
    }

    toString() {
        return `(${this.m.join(',')})`;
    }

}
