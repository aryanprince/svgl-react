import * as React from "react";
import type { SVGProps } from "react";
const SvgKotlin = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={256}
    height={256}
    preserveAspectRatio="xMidYMid"
    {...props}
  >
    <defs>
      <linearGradient
        id="kotlin_svg__a"
        x1="99.991%"
        x2=".01%"
        y1="-.011%"
        y2="100.01%"
      >
        <stop offset=".344%" stopColor="#E44857" />
        <stop offset="46.89%" stopColor="#C711E1" />
        <stop offset="100%" stopColor="#7F52FF" />
      </linearGradient>
    </defs>
    <path fill="url(#kotlin_svg__a)" d="M256 256H0V0h256L128 127.949z" />
  </svg>
);
export default SvgKotlin;
