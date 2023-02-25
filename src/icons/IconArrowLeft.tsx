import type { FC, SVGProps } from 'react';

const IconArrowLeft: FC<SVGProps<SVGSVGElement>> = ({ ...rest }) => (
  <svg
    fill="#fff"
    width={60}
    height={60}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    stroke="#fff"
    {...rest}
  >
    <path
      d="M12.707 17.293L8.414 13H18v-2H8.414l4.293-4.293-1.414-1.414L4.586 12l6.707 6.707z"
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke="#000"
      strokeWidth={2}
    />
    <path d="M12.707 17.293L8.414 13H18v-2H8.414l4.293-4.293-1.414-1.414L4.586 12l6.707 6.707z" />
  </svg>
);

export default IconArrowLeft;
