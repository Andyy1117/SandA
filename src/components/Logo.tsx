import * as React from "react";
const SVGComponent = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    id="Layer_1"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1000 1000"
    {...props}
  >
    <defs>
      <style>
        {
          "\n      .cls-1 {\n        letter-spacing: .07em;\n      }\n\n      .cls-2, .cls-3, .cls-4, .cls-5 {\n        stroke-width: 0px;\n      }\n\n      .cls-2, .cls-6 {\n        fill: #201a58;\n      }\n\n      .cls-7 {\n        letter-spacing: .08em;\n      }\n\n      .cls-3 {\n        fill: none;\n      }\n\n      .cls-4 {\n        fill: #f68920;\n      }\n\n      .cls-5 {\n        fill: #f68a1f;\n      }\n\n      .cls-8 {\n        letter-spacing: .06em;\n      }\n\n      .cls-6 {\n        font-family: Gotham-Black, Gotham;\n        font-size: 202.9px;\n        font-weight: 800;\n      }\n    "
        }
      </style>
    </defs>
    <polygon
      className="cls-5"
      points="258.9 368.97 258.9 258.91 598.58 56.8 514.54 3.67 173.5 206.72 173.5 411.67 310.13 494.22 417.59 459.69 474.73 342.98 310.13 399.34 258.9 368.97"
    />
    <path className="cls-3" d="M750.72,353.48l-4.11-93.62,4.11,93.62Z" />
    <line className="cls-3" x1={746.6} y1={259.86} x2={750.72} y2={353.48} />
    <polygon
      className="cls-2"
      points="616.61 67.57 349.04 614.11 173.5 504.05 173.5 604.62 382.25 730.82 653.62 189.03 746.6 245.96 746.6 261.14 598.58 309.53 541.65 424.66 750.72 354.76 750.72 509.58 491.36 626.29 423.52 751.54 492.31 788.07 558.73 663.29 750.72 574.1 750.72 682.27 834.85 631.51 834.85 200.73 616.61 67.57"
    />
    <text className="cls-6" transform="translate(109.14 978.71)">
      <tspan className="cls-7" x={0} y={0}>
        {"T"}
      </tspan>
      <tspan className="cls-8" x={149.13} y={0}>
        {"R"}
      </tspan>
      <tspan className="cls-1" x={307.79} y={0}>
        {"ADE"}
      </tspan>
    </text>
    <polygon
      className="cls-4"
      points="750.7 354.73 541.64 424.62 598.57 309.5 746.59 261.11 750.7 354.73"
    />
    <polygon
      className="cls-4"
      points="750.72 509.58 491.36 626.29 423.52 751.54 492.31 788.07 558.73 663.29 750.72 574.1 750.72 509.58"
    />
  </svg>
);
export default SVGComponent;
