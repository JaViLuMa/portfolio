import type { FC, SVGProps } from 'react';

const IconContactMe: FC<SVGProps<SVGSVGElement>> = ({ color, ...rest }) => (
  <div className="hidden rounded back-shadow-initial-black xl:flex">
    <svg
      width={55}
      height={40}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      {...rest}
    >
      <rect x="1.634" y="1.54" width="51.6" height="36.754" fill={color} />
      <path
        fill="#000"
        d="M3.935-.116A4.023 4.023 0 00-.088 3.907v32.186a4.025 4.025 0 004.023 4.023h47.13a4.023 4.023 0 004.023-4.023V3.907a4.023 4.023 0 00-4.023-4.023H3.935zM3.36 3.907a.575.575 0 01.575-.575h47.13a.575.575 0 01.575.575v1.959L27.822 21.959a.575.575 0 01-.644 0L3.36 5.866v-1.96zm0 6.12v26.066c0 .317.258.575.575.575h47.13a.575.575 0 00.575-.575V10.027l-21.887 14.79a4.025 4.025 0 01-4.506 0L3.36 10.026z"
        clipRule="evenodd"
        fillRule="evenodd"
      />
    </svg>
  </div>
);

export default IconContactMe;
