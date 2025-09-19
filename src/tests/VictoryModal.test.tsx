import { describe, expect, it, vi } from "vitest";
import { fireEvent, render } from "@testing-library/react";
import { VictoryModal } from "../VictoryModal";
import * as ReactRouterDom from "react-router-dom";

vi.mock("react-router-dom", () => ({
    useNavigate: vi.fn()
}));

describe("Victory Modal", () => {
    it("renders when open", () => {
        const { getByTestId, rerender } = render(<VictoryModal open={true} reset={vi.fn()} />);
        expect(getByTestId("modal")).not.toBeNull();
        rerender(<VictoryModal open={false} reset={vi.fn()} />);
        const modal = document.querySelector('[data-testid="modal"]');
        expect(modal).toBeNull();
        console.log(modal);
    });

    it("navigates when home button clicked", () => {
        const navSpy = vi.fn();
        vi.spyOn(ReactRouterDom, "useNavigate").mockReturnValue(navSpy);
        const { getByTestId } = render(<VictoryModal open={true} reset={vi.fn()} />);
        fireEvent.click(getByTestId("home"));
        expect(navSpy).toHaveBeenCalledWith("/");
    });

    it("calls given function when reset clicked", () => {
        const resetSpy = vi.fn();
        const { getByTestId } = render(<VictoryModal open={true} reset={resetSpy} />);
        fireEvent.click(getByTestId("reset"));
        expect(resetSpy).toHaveBeenCalledTimes(1);
    });
})