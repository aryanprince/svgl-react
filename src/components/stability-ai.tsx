import * as React from "react";
import type { SVGProps } from "react";
const SvgStabilityAi = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={256}
    height={213}
    preserveAspectRatio="xMidYMid"
    {...props}
  >
    <defs>
      <linearGradient
        id="stability-ai_svg__a"
        x1="50%"
        x2="50%"
        y1="0%"
        y2="100%"
      >
        <stop offset="0%" stopColor="#9D39FF" />
        <stop offset="100%" stopColor="#A380FF" />
      </linearGradient>
    </defs>
    <path
      fill="url(#stability-ai_svg__a)"
      d="M72.418 212.45c49.478 0 81.658-26.205 81.658-65.626 0-30.572-19.572-49.998-54.569-58.043l-22.469-6.74c-19.71-4.424-31.215-9.738-28.505-23.312 2.255-11.292 9.002-17.667 24.69-17.667 49.872 0 68.35 17.667 68.35 17.667V16.237S123.583 0 73.223 0C25.757 0 0 24.424 0 62.236c0 30.571 17.85 48.35 54.052 56.798q3.802.95 3.885.976 8.26 2.556 22.293 6.755c18.504 4.425 23.262 9.121 23.262 23.2 0 12.872-13.374 20.19-31.074 20.19C21.432 170.154 0 144.36 0 144.36v47.078s13.402 21.01 72.418 21.01Z"
    />
    <path
      fill="#E80000"
      d="M225.442 209.266c17.515 0 30.558-12.67 30.558-29.812 0-17.515-12.67-29.813-30.558-29.813-17.515 0-30.185 12.298-30.185 29.813s12.67 29.812 30.185 29.812"
    />
  </svg>
);
export default SvgStabilityAi;
