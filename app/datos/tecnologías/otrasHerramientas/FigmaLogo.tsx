import React from "react";
type IconoProps = React.SVGProps<SVGSVGElement>

const FigmaLogo = (props: IconoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      height="50"
      width="50"
      viewBox="1.466 2.199 285.068 427.602"
      {...props}
      className="w-8 h-8 md:w-12 md:h-12 lg:w-14 lg:h-14"
    >
      <path d="M1.466 2.2h285.068V429.8H1.466z" strokeWidth="3" />
      <path
        d="M144 216c0-39.359 31.907-71.267 71.267-71.267 39.359 0 71.267 31.908 71.267 71.267 0 39.36-31.908 71.267-71.267 71.267C175.907 287.267 144 255.36 144 216z"
        fill="#1abcfe"
      />
      <path
        d="M1.466 358.534c0-39.359 31.907-71.267 71.267-71.267H144v71.267c0 39.36-31.907 71.267-71.267 71.267S1.466 397.894 1.466 358.534z"
        fill="#0acf83"
      />
      <path
        d="M144 2.2v142.533h71.267c39.36 0 71.267-31.907 71.267-71.267S254.627 2.2 215.267 2.2z"
        fill="#ff7262"
      />
      <path
        d="M1.466 73.466c0 39.36 31.907 71.267 71.267 71.267H144V2.199H72.733c-39.36 0-71.267 31.908-71.267 71.267z"
        fill="#f24e1e"
      />
      <path
        d="M1.466 216c0 39.36 31.907 71.267 71.267 71.267H144V144.733H72.733c-39.36 0-71.267 31.908-71.267 71.267z"
        fill="#a259ff"
      />
    </svg>
  );
};

export default FigmaLogo;
