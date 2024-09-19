import * as React from "react";
import type { SVGProps } from "react";
const SvgAdobe = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={91}
    height={80}
    fill="none"
    {...props}
  >
    <g fill="#EB1000" clipPath="url(#adobe_svg__a)">
      <path d="M56.969 0h33.463v80zM33.463 0H0v80zM45.182 29.467 66.52 80H52.566l-6.368-16.054h-15.58z" />
    </g>
    <defs>
      <clipPath id="adobe_svg__a">
        <path fill="#fff" d="M0 0h90.432v80H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAdobe;
