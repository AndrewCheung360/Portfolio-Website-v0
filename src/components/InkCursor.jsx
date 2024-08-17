// components/CursorTrail.js
import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";

const InkCursor = () => {

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-[1000] mix-blend-difference"
      style={{ filter: "url(#goo)" }}
    >
      <svg className="hidden">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 35 -15"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default InkCursor;
