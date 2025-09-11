import { describe, expect, it } from "vitest";
import { validateNumCards } from "../validateNumCards";

describe("generateCards", () => {
    it("returns the number passed in if it's a positive even value equal to or less than 16", () => {
        ["2", "4", "6", "8", "10", "12", "14", "16"].forEach(input => {
            expect(validateNumCards(input)).toEqual(Number(input));
        })
    });

    it("returns the nearest even number greater than the inputted odd number in valid range", () => {
        expect(validateNumCards("1")).toEqual(2);
        expect(validateNumCards("15")).toEqual(16);
        expect(validateNumCards("7")).toEqual(8);
    });

    it("returns 8 for inputs less than 1 and invalid inputs", () => {
        expect(validateNumCards("0")).toEqual(8);
        expect(validateNumCards("-31104")).toEqual(8);
        expect(validateNumCards("Tenna")).toEqual(8);
        expect(validateNumCards("")).toEqual(8);
    });

    it("returns 16 for inputs too high", () => {
        expect(validateNumCards("17")).toEqual(16);
        expect(validateNumCards("22")).toEqual(16);
    });
})