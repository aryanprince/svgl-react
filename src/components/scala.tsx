import * as React from "react";
import type { SVGProps } from "react";
const SvgScala = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid"
    viewBox="0 0 256 416"
    {...props}
  >
    <defs>
      <linearGradient id="scala_svg__a" x1="0%" x2="100%" y1="50%" y2="50%">
        <stop offset="0%" stopColor="#4F4F4F" />
        <stop offset="100%" />
      </linearGradient>
      <linearGradient id="scala_svg__b" x1="0%" x2="100%" y1="50%" y2="50%">
        <stop offset="0%" stopColor="#C40000" />
        <stop offset="100%" stopColor="red" />
      </linearGradient>
    </defs>
    <path
      fill="url(#scala_svg__a)"
      d="M0 288v-32c0-5 116-14 192-32 37 8 64 19 64 32v32c0 13-27 24-64 32-76-18-192-27-192-32"
      transform="matrix(1 0 0 -1 0 544)"
    />
    <path
      fill="url(#scala_svg__a)"
      d="M0 160v-32c0-5 116-14 192-32 37 8 64 19 64 32v32c0 13-27 24-64 32-76-18-192-27-192-32"
      transform="matrix(1 0 0 -1 0 288)"
    />
    <path
      fill="url(#scala_svg__b)"
      d="M0 224v-96c0 8 256 24 256 64v96c0-40-256-56-256-64"
      transform="matrix(1 0 0 -1 0 416)"
    />
    <path
      fill="url(#scala_svg__b)"
      d="M0 96V0c0 8 256 24 256 64v96c0-40-256-56-256-64"
      transform="matrix(1 0 0 -1 0 160)"
    />
    <path
      fill="url(#scala_svg__b)"
      d="M0 352v-96c0 8 256 24 256 64v96c0-40-256-56-256-64"
      transform="matrix(1 0 0 -1 0 672)"
    />
  </svg>
);
export default SvgScala;
