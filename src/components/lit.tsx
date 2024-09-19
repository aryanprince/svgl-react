import * as React from "react";
import type { SVGProps } from "react";
const SvgLit = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={256}
    height={320}
    preserveAspectRatio="xMidYMid"
    {...props}
  >
    <path
      fill="#00E8FF"
      d="m64 192 25.926-44.727 38.233-19.114 63.974 63.974 10.833 61.754L192 320l-64-64-38.074-25.615z"
    />
    <path
      fill="#283198"
      d="M128 256V128l64-64v128zM0 256l64 64 9.202-60.602L64 192l-37.542 23.71z"
    />
    <path
      fill="#324FFF"
      d="M64 192V64l64-64v128zm128 128V192l64-64v128zM0 256V128l64 64z"
    />
    <path fill="#0FF" d="M64 320V192l64 64z" />
  </svg>
);
export default SvgLit;
