import * as React from "react";
import type { SVGProps } from "react";
const SvgElementor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={400}
    height={400}
    fill="none"
    {...props}
  >
    <g clipPath="url(#elementor_svg__a)">
      <path
        fill="#92003B"
        d="M200 0C89.532 0 0 89.532 0 200c0 110.431 89.532 200 200 200s200-89.532 200-200C399.964 89.532 310.431 0 200 0m-49.991 283.306h-33.315V116.658h33.315zm133.297 0h-99.982v-33.315h99.982zm0-66.667h-99.982v-33.315h99.982zm0-66.666h-99.982v-33.315h99.982z"
      />
    </g>
    <defs>
      <clipPath id="elementor_svg__a">
        <path fill="#fff" d="M0 0h400v400H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgElementor;
