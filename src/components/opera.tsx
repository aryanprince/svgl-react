import * as React from "react";
import type { SVGProps } from "react";
const SvgOpera = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 1000 1000"
    {...props}
  >
    <linearGradient
      id="opera_svg__a"
      x1={416.623}
      x2={416.623}
      y1={16.304}
      y2={985.446}
      gradientUnits="userSpaceOnUse"
    >
      <stop offset={0.3} stopColor="#ff1b2d" />
      <stop offset={0.438} stopColor="#fa1a2c" />
      <stop offset={0.594} stopColor="#ed1528" />
      <stop offset={0.758} stopColor="#d60e21" />
      <stop offset={0.927} stopColor="#b70519" />
      <stop offset={1} stopColor="#a70014" />
    </linearGradient>
    <path
      fill="url(#opera_svg__a)"
      d="M335.4 781.8c-55.3-65.3-91.1-161.7-93.5-270v-23.6c2.4-108.3 38.2-204.7 93.5-270C407.2 125.1 513.8 66 632.8 66c73.2 0 141.8 22.4 200.4 61.3C745.2 48.5 629.2.5 501.9 0H500C223.9 0 0 223.9 0 500c0 268.2 211.1 487 476.2 499.4 7.9.4 15.8.6 23.8.6 128 0 244.8-48.1 333.2-127.2-58.6 38.8-127.1 61.2-200.4 61.2-119 0-225.6-59.1-297.4-152.2"
    />
    <linearGradient
      id="opera_svg__b"
      x1={667.709}
      x2={667.709}
      y1={73.426}
      y2={930.584}
      gradientUnits="userSpaceOnUse"
    >
      <stop offset={0} stopColor="#9c0000" />
      <stop offset={0.7} stopColor="#ff4b4b" />
    </linearGradient>
    <path
      fill="url(#opera_svg__b)"
      d="M335.4 218.2c45.9-54.2 105.1-86.8 169.9-86.8 145.6 0 263.5 165 263.5 368.6s-118 368.6-263.5 368.6c-64.7 0-124-32.7-169.9-86.8C407.2 874.9 513.8 934 632.8 934c73.2 0 141.8-22.4 200.4-61.2C935.6 781.2 1000 648.1 1000 500s-64.4-281.2-166.8-372.7C774.6 88.4 706.1 66 632.8 66c-119 0-225.6 59.1-297.4 152.2"
    />
  </svg>
);
export default SvgOpera;
