import * as React from "react";
import type { SVGProps } from "react";
const SvgAlgorand = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={32}
    height={32}
    {...props}
  >
    <defs>
      <linearGradient
        id="algorand_svg__d"
        x1={16}
        x2={16}
        y1={0}
        y2={30}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <filter
        id="algorand_svg__c"
        width={1.08}
        height={1.097}
        x={-0.04}
        y={-0.04}
        filterUnits="objectBoundingBox"
      >
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur
          in="shadowOffsetOuter1"
          result="shadowBlurOuter1"
          stdDeviation={0.5}
        />
        <feComposite
          in="shadowBlurOuter1"
          in2="SourceAlpha"
          operator="out"
          result="shadowBlurOuter1"
        />
        <feColorMatrix
          in="shadowBlurOuter1"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"
        />
      </filter>
      <circle id="algorand_svg__a" cx={16} cy={15} r={15} />
    </defs>
    <use
      xlinkHref="#algorand_svg__a"
      filter="url(#algorand_svg__c)"
      style={{
        display: "inline",
        fillRule: "evenodd",
      }}
    />
    <use
      xlinkHref="#algorand_svg__a"
      fill="#627eea"
      style={{
        display: "inline",
        fill: "#e5e5e5",
        fillOpacity: 1,
        fillRule: "evenodd",
      }}
    />
    <use
      xlinkHref="#algorand_svg__a"
      fill="url(#algorand_svg__d)"
      style={{
        display: "inline",
        mixBlendMode: "soft-light",
        fill: "url(#algorand_svg__d)",
        fillRule: "evenodd",
      }}
    />
    <circle
      cx={16}
      cy={15}
      r={14.5}
      stroke="#000"
      strokeOpacity={0.097}
      style={{
        display: "inline",
        fill: "none",
        fillRule: "evenodd",
      }}
    />
    <path
      d="m10.332 23 7.221-12.602.991 3.257L13.022 23h2.832l3.54-6.088L20.95 23H23.5l-2.407-9.062 1.699-2.973h-2.549L19.253 7h-2.408L7.5 23Z"
      style={{
        fill: "#000",
        fillOpacity: 1,
        stroke: "none",
        strokeWidth: 0.141594,
        strokeOpacity: 1,
      }}
    />
  </svg>
);
export default SvgAlgorand;
