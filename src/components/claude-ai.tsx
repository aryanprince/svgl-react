import * as React from "react";
import type { SVGProps } from "react";
const SvgClaudeAi = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fillRule="evenodd"
    clipRule="evenodd"
    imageRendering="optimizeQuality"
    shapeRendering="geometricPrecision"
    textRendering="geometricPrecision"
    viewBox="0 0 512 512"
    {...props}
  >
    <rect width={512} height={512} fill="#CC9B7A" rx={104.187} ry={105.042} />
    <path
      fill="#1F1F1E"
      fillRule="nonzero"
      d="M318.663 149.787h-43.368l78.952 212.423 43.368.004zm-125.326 0-78.952 212.427h44.255l15.932-44.608 82.846-.004 16.107 44.612h44.255l-79.126-212.427zm-4.251 128.341 26.91-74.701 27.083 74.701z"
    />
  </svg>
);
export default SvgClaudeAi;
