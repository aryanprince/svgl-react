import * as React from "react";
import type { SVGProps } from "react";
const SvgCal = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={101}
    height={22}
    fill="none"
    {...props}
  >
    <path
      fill="#292929"
      d="M10.058 20.817C4.321 20.817 0 16.277 0 10.67 0 5.046 4.1.468 10.058.468c3.163 0 5.351.971 7.061 3.195l-2.758 2.299c-1.158-1.234-2.556-1.85-4.303-1.85-3.88 0-6.013 2.97-6.013 6.558s2.336 6.503 6.013 6.503c1.729 0 3.2-.616 4.358-1.85l2.721 2.392c-1.636 2.13-3.88 3.102-7.079 3.102M29.016 5.886h3.714v14.575h-3.714v-2.13c-.772 1.514-2.06 2.523-4.523 2.523-3.935 0-7.08-3.42-7.08-7.624 0-4.205 3.145-7.624 7.08-7.624 2.445 0 3.75 1.009 4.523 2.522zm.11 7.344c0-2.28-1.563-4.167-4.027-4.167-2.372 0-3.916 1.906-3.916 4.167 0 2.205 1.544 4.167 3.916 4.167 2.446 0 4.027-1.906 4.027-4.167M35.36 0h3.714v20.443H35.36zM40.73 18.518c0-1.196.955-2.205 2.26-2.205a2.18 2.18 0 0 1 2.226 2.205c0 1.233-.938 2.242-2.225 2.242a2.23 2.23 0 0 1-2.262-2.242M59.43 18.107c-1.38 1.681-3.476 2.747-5.958 2.747-4.432 0-7.686-3.42-7.686-7.624 0-4.205 3.254-7.624 7.686-7.624 2.39 0 4.468 1.009 5.847 2.597l-2.868 2.41c-.717-.896-1.655-1.569-2.98-1.569-2.371 0-3.916 1.906-3.916 4.167s1.545 4.167 3.917 4.167c1.434 0 2.427-.747 3.163-1.757zM59.742 13.23c0-4.205 3.255-7.624 7.686-7.624 4.432 0 7.686 3.42 7.686 7.624s-3.254 7.624-7.686 7.624c-4.431-.02-7.686-3.42-7.686-7.624m11.603 0c0-2.28-1.545-4.167-3.917-4.167-2.372-.019-3.916 1.887-3.916 4.167 0 2.26 1.544 4.167 3.916 4.167s3.917-1.906 3.917-4.167M100.232 11.548v8.895h-3.714v-7.98c0-2.522-1.177-3.606-2.942-3.606-1.655 0-2.832.823-2.832 3.607v7.979H87.03v-7.98c0-2.522-1.195-3.606-2.942-3.606-1.655 0-3.108.823-3.108 3.607v7.979h-3.714V5.868h3.714v2.018c.772-1.57 2.17-2.355 4.321-2.355 2.041 0 3.751 1.01 4.69 2.71.937-1.738 2.316-2.71 4.817-2.71 3.052.019 5.424 2.336 5.424 6.017"
    />
  </svg>
);
export default SvgCal;
