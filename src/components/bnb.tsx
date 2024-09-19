import * as React from "react";
import type { SVGProps } from "react";
const SvgBnb = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={32}
    height={32}
    {...props}
  >
    <defs>
      <filter
        id="bnb_svg__a"
        width="111.7%"
        height="111.7%"
        x="-5.8%"
        y="-4.2%"
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
      <filter
        id="bnb_svg__d"
        width="117.5%"
        height="117.5%"
        x="-8.8%"
        y="-6.2%"
        filterUnits="objectBoundingBox"
      >
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur
          in="shadowOffsetOuter1"
          result="shadowBlurOuter1"
          stdDeviation={0.5}
        />
        <feColorMatrix
          in="shadowBlurOuter1"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"
        />
      </filter>
      <linearGradient id="bnb_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="bnb_svg__b" cx={16} cy={15} r={15} />
      <path
        id="bnb_svg__e"
        d="M12.116 13.404 16 9.52l3.886 3.886 2.26-2.26L16 5l-6.144 6.144zM6 15l2.26-2.26L10.52 15l-2.26 2.26zm6.116 1.596L16 20.48l3.886-3.886 2.26 2.259L16 25l-6.144-6.144-.003-.003zM21.48 15l2.26-2.26L26 15l-2.26 2.26zm-3.188-.002h.002v.002L16 17.295l-2.291-2.292-.004-.003.004-.003.401-.402.195-.195L16 12.706l2.293 2.293"
      />
    </defs>
    <g fill="none" fillRule="nonzero">
      <use xlinkHref="#bnb_svg__b" fill="#000" filter="url(#bnb_svg__a)" />
      <use xlinkHref="#bnb_svg__b" fill="#F3BA2F" fillRule="evenodd" />
      <use
        xlinkHref="#bnb_svg__b"
        fill="url(#bnb_svg__c)"
        fillRule="evenodd"
        style={{
          mixBlendMode: "soft-light",
        }}
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <use xlinkHref="#bnb_svg__e" fill="#000" filter="url(#bnb_svg__d)" />
      <use xlinkHref="#bnb_svg__e" fill="#FFF" fillRule="evenodd" />
    </g>
  </svg>
);
export default SvgBnb;
