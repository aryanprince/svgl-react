import * as React from "react";
import type { SVGProps } from "react";
const SvgWebcomponents = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={300}
    height={300}
    viewBox="0 0 200 161"
    {...props}
  >
    <defs>
      <linearGradient
        id="webcomponents_svg__a"
        x1={48.9}
        x2={127.1}
        y1={40}
        y2={40}
        gradientTransform="scale(1.25056 .79964)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#2a3b8f" />
        <stop offset={1} stopColor="#29abe2" />
      </linearGradient>
      <linearGradient
        id="webcomponents_svg__b"
        x1={126.9}
        x2={48.7}
        y1={124.8}
        y2={124.8}
        gradientTransform="scale(1.2532 .79796)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#b4d44e" />
        <stop offset={1} stopColor="#e7f716" />
      </linearGradient>
    </defs>
    <g fill="none" fillRule="evenodd" strokeWidth={0.3}>
      <path fill="#166da5" d="m197 80.2-21.4 36-30-36.5 30-35.6z" />
      <path fill="#8fdb69" d="m173.3 122.4-32.6-39L121 116l30.4 44.4z" />
      <path fill="#166da5" d="m172.9 37.8-32.2 39L121 44.2l30.5-44z" />
      <path
        fill="url(#webcomponents_svg__a)"
        d="M61.1 31.4H141L123.4.7H78.7zm53.7 31.9H159l-15.9-26.8H98.8"
        opacity={0.9}
        transform="translate(-.5 -.9)scale(1.22972)"
      />
      <path
        fill="url(#webcomponents_svg__b)"
        d="M141.3 100.3H61l17.6 30.5h45zm-26.5-31.9H159l-15.9 26.8H98.8"
        opacity={0.9}
        transform="translate(-.5 -.9)scale(1.22972)"
      />
      <path fill="#010101" d="M96.2 160 49.9 80 96.8.2H46L0 80.1 46.1 160z" />
    </g>
  </svg>
);
export default SvgWebcomponents;
