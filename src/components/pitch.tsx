import * as React from "react";
import type { SVGProps } from "react";
const SvgPitch = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 57.6 65"
    {...props}
  >
    <linearGradient
      id="pitch_svg__a"
      x1={63.187}
      x2={-8.41}
      y1={171.884}
      y2={146.689}
      gradientTransform="matrix(1 0 0 -1 0 187.79)"
      gradientUnits="userSpaceOnUse"
    >
      <stop
        offset={0}
        style={{
          stopColor: "#6b53ff",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#8d49f7",
        }}
      />
    </linearGradient>
    <path
      d="M57.5 27.5c-.6 8.7-7.6 16.6-16.4 16.9v-6.6c0-6-4.3-11.2-10.2-12.4l-22-4.3V6.4c0-4 3.6-7 7.6-6.2l22.7 4.4c12.4 2.7 19.1 12.3 18.3 22.9M16.7 48.3l-13-2.5c-1.9-.4-3.6 1.1-3.6 3v9C0 60 1.6 62 3.8 62.4l13 2.5c1.9.4 3.6-1.1 3.6-3v-9c.1-2.2-1.5-4.1-3.7-4.6m13.1-17.9L9.9 26.5c-2.9-.6-5.5 1.6-5.5 4.6v9.8h.1l13 2.5c4.5.9 7.8 4.9 7.8 9.5v2l5 1c2.9.6 5.5-1.6 5.5-4.6V37.9c.2-3.7-2.4-6.8-6-7.5"
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
        fill: "url(#pitch_svg__a)",
      }}
    />
  </svg>
);
export default SvgPitch;
