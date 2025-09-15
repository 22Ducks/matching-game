import { describe, expect, it, vi } from "vitest";
import { fireEvent, render } from "@testing-library/react";
import { VictoryModal } from "../VictoryModal";

describe("Victory Modal", () => {
    it("renders when open", () => {
        const { getByTestId, rerender } = render(<VictoryModal open={true} reset={vi.fn()} />);
        expect(getByTestId("modal")).not.toBeNull();
        rerender(<VictoryModal open={false} reset={vi.fn()} />);
        expect(getByTestId("modal")).toBeNull();
    })
})