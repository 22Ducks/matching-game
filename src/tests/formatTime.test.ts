import { describe, expect, it } from "vitest";
import {formatTime} from "../formatTime.ts";

describe("formatTime", () => {
    it("Converts seconds to minutes and seconds", () => {
        expect(formatTime(60)).toEqual([1, 0]);
        expect(formatTime(50)).toEqual([0, 50]);
        expect(formatTime(69)).toEqual([1, 9]);
    })
})