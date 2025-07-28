import React from "react";
type IconoProps = React.SVGProps<SVGSVGElement>

const InsomniaLogo = (props: IconoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      width="50"
      height="50"
      {...props}
      className="w-8 h-8 md:w-12 md:h-12 lg:w-14 lg:h-14"
    >
      <defs>
        <linearGradient
          id="insomnia-gradient"
          x1="16.181"
          x2="16.181"
          y1="28.39"
          y2="5.61"
          gradientTransform="matrix(4 0 0 4 0 -4)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#7400E1" />
          <stop offset="1" stopColor="#4000BF" />
        </linearGradient>
      </defs>
      <circle cx="64" cy="64" r="60.746" fill="#fff" />
      <circle cx="64" cy="64" r="64" fill="#4000bf" />
      <circle cx="64" cy="64" r="57.492" fill="#fff" />
      <path
        fill="url(#insomnia-gradient)"
        d="M64.723 18.44c25.162 0 45.56 20.398 45.56 45.56 0 25.162-20.398 45.56-45.56 45.56-25.161 0-45.559-20.398-45.559-45.56a45.41 45.41 0 0 1 3.427-17.366c3.224 4.391 8.425 7.242 14.29 7.242 9.786 0 17.718-7.932 17.718-17.718 0-5.866-2.85-11.066-7.242-14.29a45.426 45.426 0 0 1 17.366-3.427z"
      />
    </svg>
  );
};

export default InsomniaLogo;
