import React from "react";
import Overlay, { Position } from "../Overlay";
import "./DocExamples.scss";

export const BasicUsage = () => (
    <div className="overlay-examples">
        <Overlay
            position={Position.TopRight}
            overlay={<div className="usage-overlay" />}
        >
            <div className="usage-overlay-content"></div>
        </Overlay>
        <Overlay
            position={Position.TopRight}
            overlay={<div className="usage-overlay" />}
            overlayCentered={false}
        >
            <div className="usage-overlay-content"></div>
        </Overlay>
        <div>
            Overlay Top Right position and with and without center the overlay
        </div>

        <Overlay
            position={Position.BottomRight}
            overlay={<div className="usage-overlay" />}
        >
            <div className="usage-overlay-content"></div>
        </Overlay>
        <Overlay
            position={Position.BottomRight}
            overlay={<div className="usage-overlay" />}
            overlayCentered={false}
        >
            <div className="usage-overlay-content"></div>
        </Overlay>
        <div>
            Overlay Bottom Right position and with and without center the
            overlay
        </div>

        <Overlay
            position={Position.TopLeft}
            overlay={<div className="usage-overlay" />}
        >
            <div className="usage-overlay-content"></div>
        </Overlay>
        <Overlay
            position={Position.TopLeft}
            overlay={<div className="usage-overlay" />}
            overlayCentered={false}
        >
            <div className="usage-overlay-content"></div>
        </Overlay>
        <div>
            Overlay Top Left position and with and without center the overlay
        </div>

        <Overlay
            position={Position.BottomLeft}
            overlay={<div className="usage-overlay" />}
        >
            <div className="usage-overlay-content"></div>
        </Overlay>
        <Overlay
            position={Position.BottomLeft}
            overlay={<div className="usage-overlay" />}
            overlayCentered={false}
        >
            <div className="usage-overlay-content"></div>
        </Overlay>
        <div>
            Overlay Bottom Left position and with and without center the overlay
        </div>
    </div>
);
