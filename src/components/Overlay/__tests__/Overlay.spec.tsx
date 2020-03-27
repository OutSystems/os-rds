import React from "react";
import { render } from "@testing-library/react";
import Overlay, { IOverlayProperties, Position } from "../Overlay";

const defaultProperties: IOverlayProperties = {
    overlay: <div>Overlay Component</div>,
    children: <div>Overlayed Component</div>
};

const OverlayRender = ({ children, ...props }: IOverlayProperties) => (
    <Overlay {...props}>{children}</Overlay>
);

describe("Components", () => {
    describe("Overlay", () => {
        it("ShouldRenderOverlayComponentWithSuccess", () => {
            const { getByText, container } = render(
                <OverlayRender {...defaultProperties} />
            );

            expect(getByText("Overlay Component")).toBeInTheDocument();
            expect(getByText("Overlayed Component")).toBeInTheDocument();
            expect(container.firstChild).toHaveClass("overlay");
        });

        it("ShouldRenderOverlayAtDefaultPosition", () => {
            const { getByTestId } = render(
                <OverlayRender {...defaultProperties} />
            );

            expect(getByTestId("overlay-test")).toHaveClass("overlay-centered");
            expect(getByTestId("overlay-test")).toHaveClass(
                Position.BottomLeft
            );
        });

        it("ShouldRenderOverlayAtBottomLeftPosition", () => {
            const { getByTestId } = render(
                <OverlayRender
                    {...defaultProperties}
                    position={Position.BottomLeft}
                />
            );

            expect(getByTestId("overlay-test")).toHaveClass(
                Position.BottomLeft
            );
        });

        it("ShouldRenderOverlayAtTopLeftPosition", () => {
            const { getByTestId } = render(
                <OverlayRender
                    {...defaultProperties}
                    position={Position.TopLeft}
                />
            );

            expect(getByTestId("overlay-test")).toHaveClass(Position.TopLeft);
        });

        it("ShouldRenderOverlayAtBottomRightPosition", () => {
            const { getByTestId } = render(
                <OverlayRender
                    {...defaultProperties}
                    position={Position.BottomRight}
                />
            );

            expect(getByTestId("overlay-test")).toHaveClass(
                Position.BottomRight
            );
        });

        it("ShouldRenderOverlayAtTopRightPosition", () => {
            const { getByTestId } = render(
                <OverlayRender
                    {...defaultProperties}
                    position={Position.TopRight}
                />
            );

            expect(getByTestId("overlay-test")).toHaveClass(Position.TopRight);
        });

        it("ShouldRenderOverlayAtCustomPosition", () => {
            const customPosition = "topcenter";
            const { getByTestId } = render(
                <OverlayRender
                    {...defaultProperties}
                    customPosition={customPosition}
                />
            );

            expect(getByTestId("overlay-test")).toHaveClass(customPosition);
        });

        it("ShouldRenderOverlayNotCenteredAtPosition", () => {
            const customPosition = "topcenter";
            const { getByTestId } = render(
                <OverlayRender
                    {...defaultProperties}
                    position={Position.TopLeft}
                    overlayCentered={false}
                />
            );

            expect(getByTestId("overlay-test")).not.toHaveClass(
                "overlay-centered"
            );
        });
    });
});
