import * as React from "react";
import type { SVGProps } from "react";
const SvgShadcnUi = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
    <path fill="none" d="M0 0h256v256H0z" />
    <path fill="none" stroke="currentColor" d="m208 128-80 80m64-168L40 192" />
  </svg>
);
export default SvgShadcnUi;
