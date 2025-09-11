import { describe, expect, it, vi } from "vitest"
import { Card } from "../Card"
import { fireEvent, render } from "@testing-library/react";

describe("Card", () => {
    it("renders", () => {
        const { getByTestId } = render(<Card rows={1} cols={1} flipped card="Leg Sweep" flipCard={vi.fn()}/>);
        expect(getByTestId("card")).not.toBeNull();
        expect(getByTestId("cardImage")).not.toBeNull();
    });

    it("Calls flipCard when clicked", () => {
        const flipCardSpy = vi.fn();
        const { getByTestId } = render(<Card rows={1} cols={1} flipped card="Leg Sweep" flipCard={flipCardSpy}/>);
        fireEvent.click(getByTestId("card"));
        expect(flipCardSpy).toHaveBeenCalledTimes(1);
    });

    it("Displays the correct image", () => {
        const { getByTestId, rerender } = render(<Card rows={1} cols={1} flipped card="Leg Sweep" flipCard={vi.fn()}/>);
        expect(getByTestId("cardImage")).toHaveAttribute("src", "Leg Sweep");
        rerender(<Card rows={1} cols={1} flipped={false} card="Leg Sweep" flipCard={vi.fn()}/>)
        expect(getByTestId("cardImage")).toHaveAttribute("src", "/card back red.png");
    });
});