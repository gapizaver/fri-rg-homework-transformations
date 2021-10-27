import { PointManager } from "./PointManager.js";
import { Transformation } from "./Tranformation.js";
import { Vector } from "./Vector.js";

export class TransformPoints {
    transformPoints(input) {
        const pm = new PointManager();
        let vectors = pm.parsePoints(input);
        const t = new Transformation();
        let transformedVectors = []

        t.translate(new Vector(2.8, 0, 0));
        t.rotateX(Math.PI/4);
        t.translate(new Vector(0, 0, 7.15));
        t.translate(new Vector(0, 2.45, 0));
        t.scale(new Vector(1.8, 1.8, 0));
        t.rotateY((5*Math.PI)/10);


        for (let i = 0; i < vectors.length; i++) {
            transformedVectors.push(t.transform(vectors[i]));
        }

        return pm.formatPoints(transformedVectors);
    }
}
