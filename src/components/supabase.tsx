import * as React from "react";
import type { SVGProps } from "react";
const SvgSupabase = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 109 113"
    {...props}
  >
    <path
      fill="url(#supabase_svg__a)"
      d="M63.708 110.284c-2.86 3.601-8.658 1.628-8.727-2.97l-1.007-67.251h45.22c8.19 0 12.758 9.46 7.665 15.874z"
    />
    <path
      fill="url(#supabase_svg__b)"
      fillOpacity={0.2}
      d="M63.708 110.284c-2.86 3.601-8.658 1.628-8.727-2.97l-1.007-67.251h45.22c8.19 0 12.758 9.46 7.665 15.874z"
    />
    <path
      fill="#3ECF8E"
      d="M45.317 2.071c2.86-3.601 8.657-1.628 8.726 2.97l.442 67.251H9.83c-8.19 0-12.759-9.46-7.665-15.875z"
    />
    <defs>
      <linearGradient
        id="supabase_svg__a"
        x1={53.974}
        x2={94.163}
        y1={54.974}
        y2={71.829}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#249361" />
        <stop offset={1} stopColor="#3ECF8E" />
      </linearGradient>
      <linearGradient
        id="supabase_svg__b"
        x1={36.156}
        x2={54.484}
        y1={30.578}
        y2={65.081}
        gradientUnits="userSpaceOnUse"
      >
        <stop />
        <stop offset={1} stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgSupabase;
