import { Vector } from "./Vector.js";

export class PointManager {
    parsePoints(input) {
        let vectors = [];
        let text = input.split("\n");

        for (let i = 0; i < text.length; i++) {
            let coordinates = text[i].split(" ");
            if (coordinates.length == 3) {
                let x = coordinates[0];
                let y = coordinates[1];
                let z = coordinates[2];
                vectors.push(new Vector(x, y, z));
            }
        }

        return vectors;
    }

    formatPoints(points) {
        let output = "";

        for (let i = 0; i < points.length; i++) {
            output += points[i].x + " " + points[i].y + " " + points[i].z + "\n";
        }

        return output;
    }
}