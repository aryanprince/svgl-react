import * as React from "react";
import type { SVGProps } from "react";
const SvgBasewell = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={165}
    height={165}
    fill="none"
    {...props}
  >
    <path
      fill="#5DE8E8"
      d="M3 108.401c0-21.353 17.31-38.664 38.664-38.664H77.59c22.865 0 41.4 18.536 41.4 41.4 0 22.865-18.535 41.4-41.4 41.4H3z"
    />
    <path
      fill="#2B4FF1"
      d="M46.792 52.664C46.792 31.31 64.102 14 85.456 14h35.928c22.864 0 41.4 18.535 41.4 41.4s-18.536 41.4-41.401 41.4h-74.59z"
    />
    <mask
      id="basewell_svg__a"
      width={116}
      height={84}
      x={3}
      y={69}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <path
        fill="#5DE8E8"
        d="M3 108.401c0-21.353 17.31-38.664 38.664-38.664H77.59c22.865 0 41.4 18.536 41.4 41.4 0 22.865-18.535 41.4-41.4 41.4H3z"
      />
    </mask>
    <g mask="url(#basewell_svg__a)">
      <path
        fill="#00A5FD"
        d="M46.792 52.664C46.792 31.31 64.102 14 85.456 14h35.928c22.864 0 41.4 18.535 41.4 41.4s-18.536 41.4-41.401 41.4h-74.59z"
      />
    </g>
  </svg>
);
export default SvgBasewell;
