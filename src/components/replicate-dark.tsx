import * as React from "react";
import type { SVGProps } from "react";
const SvgReplicateDark = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={726}
    height={726}
    fill="#ffff"
    {...props}
  >
    <g clipPath="url(#replicate_dark_svg__a)">
      <path d="M726 310.438v82.038H438.068V726h-91.766V310.438z" />
      <path d="M726 155.219v82.183H264.845V726h-91.767V155.219z" />
      <path d="M726 0v82.183H91.766V726H0V0z" />
    </g>
    <defs>
      <clipPath id="replicate_dark_svg__a">
        <path d="M0 0h726v726H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgReplicateDark;
