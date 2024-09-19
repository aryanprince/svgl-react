import * as React from "react";
import type { SVGProps } from "react";
const SvgRelagitIconDark = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={214}
    height={254}
    fill="none"
    {...props}
  >
    <mask
      id="relagit-icon-dark_svg__a"
      width={214}
      height={254}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <path fill="#fff" d="M0 .5h214v253H0z" />
    </mask>
    <g mask="url(#relagit-icon-dark_svg__a)">
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M-.5.5h38v128.222c18.536-11.478 42.665-17.28 71-17.28 27.241 0 42.879-6.582 51.947-15.807 9.128-9.287 15.053-24.756 15.053-50.158V.5h38v44.977c0 30.568-7.075 57.577-25.947 76.775-18.932 19.261-46.294 27.171-79.053 27.171-27.227 0-45.08 6.481-55.707 14.889C42.628 172.355 37.5 183.34 37.5 196.898V253.5h-38z"
        clipRule="evenodd"
      />
      <mask
        id="relagit-icon-dark_svg__b"
        width={168}
        height={127}
        x={45}
        y={127}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "alpha",
        }}
      >
        <path
          fill="#000"
          d="M193 127.848c-21.526 21.282-51.515 29.485-85.5 29.485-25.981 0-41.758 6.191-50.431 13.054C49.063 176.723 45 185.191 45 196.312V253.5h168V127.641z"
        />
      </mask>
      <g mask="url(#relagit-icon-dark_svg__b)">
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M113.631 193.786c-9.102-7.888-19.154-22.171-19.631-38.866l38-.5c.023.796.346 5.316 6.525 10.671 4.962 4.3 11.089 8.268 18.779 13.248 2.208 1.43 4.544 2.943 7.019 4.572C183.619 195.609 213 216.211 213 253.5h-38c0-14.684-10.619-25.078-31.573-38.867-1.738-1.143-3.581-2.333-5.488-3.565-8.001-5.166-17.125-11.057-24.308-17.282"
          clipRule="evenodd"
          opacity={0.6}
        />
      </g>
    </g>
  </svg>
);
export default SvgRelagitIconDark;
