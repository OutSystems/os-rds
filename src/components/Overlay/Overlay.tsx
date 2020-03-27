import * as React from "react";
import classNames from "classnames";
import "./Overlay.scss";

export enum Position {
    TopLeft = "top-left",
    BottomLeft = "bottom-left",
    TopRight = "top-right",
    BottomRight = "bottom-right"
}

export interface IOverlayProperties {
    /** Custom Position class, it possible to pass a class that will manipulate the overlay position you can use **top**, **bottom**, **left** and **right** css properties to place the overlay*/
    customPosition?: string;
    /** React Node element that will be decorated with the overlay */
    children: React.ReactNode;
    /** React node element that will decorate */
    overlay: React.ReactNode;
    /** Center the overlay React Node on the position defined */
    overlayCentered?: boolean;
    /** Decoration position: **TopLeft**, **BottomLeft**, **TopRight** or **BottomRight** */
    position?: Position;
}

/** This component will can be used to overlay two components. It is possible to define a position or give it a custom position. */
const Overlay: React.FC<IOverlayProperties> = ({
    customPosition,
    children,
    overlay,
    overlayCentered = true,
    position = Position.BottomLeft
}: IOverlayProperties) => {
    const overlayClasses = classNames({
        "overlay-element": true,
        [customPosition ? customPosition : position]: true,
        "overlay-centered": overlayCentered
    });

    return (
        <div className="overlay">
            <div className="overlay-content">{children}</div>
            <div data-testid="overlay-test" className={overlayClasses}>
                {overlay}
            </div>
        </div>
    );
};

export default Overlay;
