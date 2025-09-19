import { describe, expect, it } from "vitest";
import { calculateCols } from "../calculateCols";

describe("calculate rows and columns", () => {
    it("takes the number of cards and calculates columns and rows to make as close to a square as possible, columns being larger", () => {
        expect(calculateCols(16)).toEqual([4, 4]);
        expect(calculateCols(8)).toEqual([4, 2]);
        expect(calculateCols(12)).toEqual([4, 3]);
    })
})