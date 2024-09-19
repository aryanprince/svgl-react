import * as React from "react";
import type { SVGProps } from "react";
const SvgCanva = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={80}
    height={80}
    fill="none"
    {...props}
  >
    <g clipPath="url(#canva_svg__a)">
      <path
        fill="#7D2AE7"
        d="M40 80c22.091 0 40-17.909 40-40S62.091 0 40 0 0 17.909 0 40s17.909 40 40 40"
      />
      <path
        fill="url(#canva_svg__b)"
        d="M40 80c22.091 0 40-17.909 40-40S62.091 0 40 0 0 17.909 0 40s17.909 40 40 40"
      />
      <path
        fill="url(#canva_svg__c)"
        d="M40 80c22.091 0 40-17.909 40-40S62.091 0 40 0 0 17.909 0 40s17.909 40 40 40"
      />
      <path
        fill="url(#canva_svg__d)"
        d="M40 80c22.091 0 40-17.909 40-40S62.091 0 40 0 0 17.909 0 40s17.909 40 40 40"
      />
      <path
        fill="url(#canva_svg__e)"
        d="M40 80c22.091 0 40-17.909 40-40S62.091 0 40 0 0 17.909 0 40s17.909 40 40 40"
      />
      <path
        fill="#fff"
        d="M57.27 48.205c-.331 0-.622.279-.924.888-3.414 6.922-9.31 11.82-16.133 11.82-7.89 0-12.776-7.122-12.776-16.96 0-16.668 9.286-26.304 17.443-26.304 3.811 0 6.139 2.395 6.139 6.207 0 4.524-2.57 6.919-2.57 8.514 0 .716.445 1.15 1.328 1.15 3.55 0 7.715-4.078 7.715-9.84 0-5.585-4.862-9.691-13.018-9.691-13.48 0-25.46 12.497-25.46 29.788 0 13.384 7.643 22.23 19.436 22.23 12.517 0 19.754-12.454 19.754-16.497 0-.895-.457-1.305-.935-1.305"
      />
    </g>
    <defs>
      <radialGradient
        id="canva_svg__b"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="rotate(-49.416 84.778 18.66)scale(61.8733)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#6420FF" />
        <stop offset={1} stopColor="#6420FF" stopOpacity={0} />
      </radialGradient>
      <radialGradient
        id="canva_svg__c"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="rotate(54.703 1.799 25.019)scale(69.7735)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#00C4CC" />
        <stop offset={1} stopColor="#00C4CC" stopOpacity={0} />
      </radialGradient>
      <radialGradient
        id="canva_svg__d"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="rotate(-45.195 92.905 16.89)scale(61.1242 28.1118)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#6420FF" />
        <stop offset={1} stopColor="#6420FF" stopOpacity={0} />
      </radialGradient>
      <radialGradient
        id="canva_svg__e"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="rotate(66.52 8.14 30.33)scale(62.9836 105.512)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#00C4CC" stopOpacity={0.726} />
        <stop offset={0} stopColor="#00C4CC" />
        <stop offset={1} stopColor="#00C4CC" stopOpacity={0} />
      </radialGradient>
      <clipPath id="canva_svg__a">
        <path fill="#fff" d="M0 0h80v80H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCanva;
