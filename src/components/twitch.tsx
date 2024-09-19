import * as React from "react";
import type { SVGProps } from "react";
const SvgTwitch = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    id="twitch_svg__Layer_1"
    x={0}
    y={0}
    viewBox="0 0 2400 2800"
    {...props}
  >
    <style>{".twitch_svg__st1{fill:#9146ff}"}</style>
    <path
      d="m2200 1300-400 400h-400l-350 350v-350H600V200h1600z"
      style={{
        fill: "#fff",
      }}
    />
    <g id="twitch_svg__Layer_1-2">
      <path
        d="M500 0 0 500v1800h600v500l500-500h400l900-900V0zm1700 1300-400 400h-400l-350 350v-350H600V200h1600z"
        className="twitch_svg__st1"
      />
      <path
        d="M1700 550h200v600h-200zm-550 0h200v600h-200z"
        className="twitch_svg__st1"
      />
    </g>
  </svg>
);
export default SvgTwitch;
