// src/components/StarGrid.tsx
'use client';
// src/components/StarGrid.tsx

// src/components/StarGrid.tsx

import { useRef } from "react";

export default function StarGrid() {
  const container = useRef(null);
  const grid = [14, 30] as const;  // Define the grid size

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 935 425"
      className="absolute inset-0 -z-10"
      id="star-grid"
      ref={container}
      
    >
      <g className="grid-group">
        {/* Draw dots */}
        {[...Array(grid[0] + 1)].map((_, i) => (
          [...Array(grid[1] + 1)].map((_, j) => (
            <circle
              key={`c-${i}-${j}`}
              cx={j * 32}
              cy={i * 32}
              r={2}
              fill="#000000"
              opacity="0.2"
              className="dot"
            />
          ))
        ))}
      </g>
    </svg>
  );
}
