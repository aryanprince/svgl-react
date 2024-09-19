import * as React from "react";
import type { SVGProps } from "react";
const SvgDub = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={191}
    height={191}
    fill="none"
    {...props}
  >
    <g clipPath="url(#dub_svg__a)">
      <path
        fill="#000"
        d="M191 95.5c0 52.743-42.757 95.5-95.5 95.5S0 148.243 0 95.5 42.757 0 95.5 0 191 42.757 191 95.5"
      />
      <mask
        id="dub_svg__b"
        width={191}
        height={191}
        x={0}
        y={0}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "alpha",
        }}
      >
        <path
          fill="#000"
          d="M191 95.5c0 52.743-42.757 95.5-95.5 95.5S0 148.243 0 95.5 42.757 0 95.5 0 191 42.757 191 95.5"
        />
      </mask>
      <g fill="#fff" mask="url(#dub_svg__b)">
        <circle cx={95} cy={100} r={49} />
        <path d="M122-14h22v162h-22z" />
      </g>
    </g>
    <defs>
      <clipPath id="dub_svg__a">
        <path fill="#fff" d="M0 0h191v191H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgDub;
