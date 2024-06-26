import React from "react";
import { SVGProps } from 'react';

export type IconSvgProps = SVGProps<SVGSVGElement> & {
    size?: number;
};

export const OpenInNewTabIcon = ({
    size = 24,
    width,
    height,
    ...props
}: IconSvgProps) => (
    <svg
        aria-hidden="true"
        focusable="false"
        height={size || height}
        role="presentation"
        viewBox="0 0 64 64"
        width={size || width}
        {...props}
    >
        <g stroke-width="3" stroke="currentColor" fill="none">
            <path d="M55.4,32V53.58a1.81,1.81,0,0,1-1.82,1.82H10.42A1.81,1.81,0,0,1,8.6,53.58V10.42A1.81,1.81,0,0,1,10.42,8.6H32"/>
            <polyline points="40.32 8.6 55.4 8.6 55.4 24.18"/>
            <line x1="19.32" y1="45.72" x2="54.61" y2="8.91"/>
        </g>
    </svg>
);