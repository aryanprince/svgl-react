import * as React from "react";
import type { SVGProps } from "react";
const SvgLink = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={200}
    height={200}
    fill="none"
    {...props}
  >
    <g clipPath="url(#link_svg__a)">
      <path
        fill="#375BD2"
        d="M100 200c55.229 0 100-44.771 100-100S155.229 0 100 0 0 44.772 0 100s44.772 100 100 100"
      />
      <path
        fill="#fff"
        d="M100 25 35.048 62.5v75L100 175l64.952-37.5v-75zm37.427 96.61L100 143.217 62.573 121.61V78.39L100 56.783l37.427 21.607z"
      />
    </g>
    <defs>
      <clipPath id="link_svg__a">
        <path fill="#fff" d="M0 0h200v200H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLink;
