import React from "react";
type IconoProps = React.SVGProps<SVGSVGElement>

const CssLogo = (props: IconoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      height="50"
      width="50"
      viewBox="0 0 124 141.53"
      {...props}
      className="w-8 h-8 md:w-12 md:h-12 lg:w-14 lg:h-14"
    >
      <path
        d="M10.383 126.892L0 0l124 .255-10.979 126.637-50.553 14.638z"
        fill="#1b73ba"
      />
      <path d="M62.468 129.275V12.085l51.064.17-9.106 104.85z" fill="#1c88c7" />
      <path
        d="M100.851 27.064H22.298l2.128 15.318h37.276l-36.68 15.745 2.127 14.808h54.043l-1.958 20.68-18.298 3.575-16.595-4.255-1.277-11.745H27.83l2.042 24.426 32.681 9.106 31.32-9.957 4-47.745H64.765l36.085-14.978z"
        fill="#fff"
      />
    </svg>
  );
};

export default CssLogo;
