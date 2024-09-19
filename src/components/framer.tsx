import * as React from "react";
import type { SVGProps } from "react";
const SvgFramer = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={256}
    height={384}
    preserveAspectRatio="xMidYMid"
    {...props}
  >
    <path d="M0 0h256v128H128zm0 128h128l128 128H128v128L0 256z" />
  </svg>
);
export default SvgFramer;
