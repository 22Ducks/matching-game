import { describe, expect, it, vi } from "vitest"
import { Board } from "../Board"
import { act, fireEvent, render } from "@testing-library/react";
import * as GenerateCards from "../generateCards";

vi.mock("../VictoryModal", () => ({
    VictoryModal: () => <></>
}));

describe("Board", () => {
    it("renders", () => {
        const { getByTestId } = render(<Board numCards={8} rows={2} cols={4}/>);
        expect(getByTestId("board")).not.toBeNull();
    });

    it("renders the correct number of cards", () => {
        const { getAllByTestId } = render(<Board numCards={2} rows={1} cols={2}/>);
        expect( getAllByTestId("cardImage") ).toHaveLength(2);
    });

    describe("flipHandler", () => {
        it("flips the card clicked", () => {
            const { getAllByTestId } = render(<Board numCards={2} rows={1} cols={2}/>);
            const card1 = getAllByTestId("cardImage")[0];
            expect(card1).toHaveAttribute("src", "/card back red.png");
            fireEvent.click(card1);
            expect(card1).toHaveAttribute("src", "/colorSet/card1.png");
        });

        it("properly handles non-match", () => {
            vi.useFakeTimers();
            vi.spyOn(GenerateCards, "generateCards").mockReturnValue(["steve", "alex"])
            const { getAllByTestId } = render(<Board numCards={2} rows={1} cols={2}/>);
            const card1 = getAllByTestId("cardImage")[0];
            const card2 = getAllByTestId("cardImage")[1];
            fireEvent.click(card1);
            fireEvent.click(card2);
            expect(card1).toHaveAttribute("src", "steve");
            expect(card2).toHaveAttribute("src", "alex");
            act(() => {vi.runAllTimers()});
            expect(card1).toHaveAttribute("src", "/card back red.png");
            expect(card2).toHaveAttribute("src", "/card back red.png");
        });

        it("properly handles non-match", () => {
            vi.useFakeTimers();
            vi.spyOn(GenerateCards, "generateCards").mockReturnValue(["steve", "steve", "alex", "alex"])
            const { getAllByTestId } = render(<Board numCards={4} rows={1} cols={2}/>);
            const card1 = getAllByTestId("cardImage")[0];
            const card2 = getAllByTestId("cardImage")[1];
            fireEvent.click(card1);
            fireEvent.click(card2);
            expect(card1).toHaveAttribute("src", "steve");
            expect(card2).toHaveAttribute("src", "steve");
            act(() => {vi.runAllTimers()});
            expect(card1).toHaveAttribute("src", "steve");
            expect(card2).toHaveAttribute("src", "steve");
        });
    });
});