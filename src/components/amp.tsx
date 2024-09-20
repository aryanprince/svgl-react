import * as React from "react";
import type { SVGProps } from "react";
const SvgAmp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="#005AF0"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M12 0c6.628 0 12 5.373 12 12s-5.372 12-12 12C5.373 24 0 18.627 0 12S5.373 0 12 0m-.92 19.278 5.034-8.377a.44.44 0 0 0 .097-.268.455.455 0 0 0-.455-.455l-2.851.004.924-5.468-.927-.003-5.018 8.367s-.1.183-.1.291c0 .251.204.455.455.455l2.831-.004-.901 5.458z" />
  </svg>
);
export default SvgAmp;