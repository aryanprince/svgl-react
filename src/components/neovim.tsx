import * as React from "react";
import type { SVGProps } from "react";
const SvgNeovim = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={602} height={734} {...props}>
    <defs>
      <linearGradient id="neovim_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#16B0ED" stopOpacity={0.8} />
        <stop offset="100%" stopColor="#0F59B2" stopOpacity={0.837} />
      </linearGradient>
      <linearGradient id="neovim_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#7DB643" />
        <stop offset="100%" stopColor="#367533" />
      </linearGradient>
      <linearGradient id="neovim_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#88C649" stopOpacity={0.8} />
        <stop offset="100%" stopColor="#439240" stopOpacity={0.84} />
      </linearGradient>
    </defs>
    <g fill="none" fillRule="evenodd">
      <path
        fill="url(#neovim_svg__a)"
        d="M0 155.57 155-1v728L0 572.238z"
        transform="translate(2 3)"
      />
      <path
        fill="url(#neovim_svg__b)"
        d="M443.06 156.982 600-1l-3.181 728L442 572.22z"
        transform="matrix(-1 0 0 1 1044 3)"
      />
      <path
        fill="url(#neovim_svg__c)"
        d="M154.986 0 558 615.19 445.225 728 42 114.172z"
        transform="translate(2 3)"
      />
      <path
        fill="#000"
        fillOpacity={0.13}
        d="M157 286.832 156.787 311 33 127.71 44.462 116z"
      />
    </g>
  </svg>
);
export default SvgNeovim;
