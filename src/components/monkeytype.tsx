import * as React from "react";
import type { SVGProps } from "react";
const SvgMonkeytype = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" {...props}>
    <path
      fill="#323437"
      d="M0 16Q0 0 16 0h32q16 0 16 16v32q0 16-16 16H16Q0 64 0 48"
    />
    <path
      fill="#e2b714"
      d="M9.09 24.1v21.2h5.12V33.1q.256-4.61 4.48-4.61 3.46.384 3.46 3.84v12.9h5.12v-11.5q-.128-5.25 4.48-5.25 3.46.384 3.46 3.84v12.9h5.12v-12.2q0-9.47-7.04-9.47-4.22 0-7.04 3.46-2.18-3.46-6.02-3.46-3.46 0-6.02 2.43v-2.05M47 18.9v5.12h-4.61v5.12H47v16.1h5.12v-16.1h4.61v-5.12h-4.61V18.9"
    />
  </svg>
);
export default SvgMonkeytype;
