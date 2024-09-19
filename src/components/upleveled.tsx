import * as React from "react";
import type { SVGProps } from "react";
const SvgUpleveled = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={154} height={154} {...props}>
    <defs>
      <linearGradient
        id="upleveled_svg__a"
        x1="0%"
        x2="100%"
        y1=".121%"
        y2="99.879%"
      >
        <stop offset="0%" stopColor="#FF3367" />
        <stop offset="26.795%" stopColor="#FF3393" />
        <stop offset="100%" stopColor="#844FFF" />
      </linearGradient>
      <linearGradient
        id="upleveled_svg__b"
        x1="0%"
        x2="100%"
        y1=".125%"
        y2="99.875%"
      >
        <stop offset="0%" stopColor="#FF3367" />
        <stop offset="26.795%" stopColor="#FF3393" />
        <stop offset="100%" stopColor="#844FFF" />
      </linearGradient>
    </defs>
    <path fill="none" d="M-1-1h156v156H-1z" />
    <path
      fill="url(#upleveled_svg__a)"
      d="M8.545 145.455h130.169v9.09H-.545V15.455h9.09z"
    />
    <path fill="url(#upleveled_svg__b)" d="M17.653 0h136.535v136.364H17.653z" />
    <path
      fill="#FFF"
      d="M81.005 49.09v43.82c0 .635-.273.908-.91.908h-9.102c-.637 0-.91-.273-.91-.909v-3.273c-3.732 3.091-7.92 5.091-13.745 5.091-9.921 0-15.929-5.909-15.929-15.363V49.09c0-.636.273-.91.91-.91h9.103c.637 0 .91.274.91.91v26.364c0 6.818 2.822 9.454 7.828 9.454 5.734 0 10.923-4.364 10.923-15.182V49.091c0-.636.273-.91.91-.91h9.102c.637 0 .91.274.91.91zm5.644 61.82V49.09c0-.635.273-.908.91-.908h9.102c.638 0 .91.273.91.909v2.818c3.46-2.818 7.647-4.636 13.108-4.636 12.288 0 20.753 9.09 20.753 23.727 0 14.636-8.465 23.727-20.753 23.727-5.006 0-9.193-1.454-13.107-4.545v20.727c0 .636-.273.91-.91.91h-9.103c-.637 0-.91-.274-.91-.91zM97.025 71c0 7.818 4.279 13.91 11.47 13.91 7.19 0 11.468-6.092 11.468-13.91s-4.278-13.91-11.469-13.91S97.025 63.182 97.025 71"
    />
  </svg>
);
export default SvgUpleveled;
