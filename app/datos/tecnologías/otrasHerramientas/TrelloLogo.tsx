import React from "react";
type IconoProps = React.SVGProps<SVGSVGElement>

const TrelloLogo = (props: IconoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      viewBox="0 0 256 256"
      preserveAspectRatio="xMidYMid"
      {...props}
      className="w-8 h-8 md:w-12 md:h-12 lg:w-14 lg:h-14"
    >
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="trelloGradient">
          <stop stopColor="#0091E6" offset="0%" />
          <stop stopColor="#0079BF" offset="100%" />
        </linearGradient>
      </defs>
      <rect fill="url(#trelloGradient)" width="256" height="256" rx="25" />
      <rect
        fill="#FFF"
        x="144.64"
        y="33.28"
        width="78.08"
        height="112"
        rx="12"
      />
      <rect
        fill="#FFF"
        x="33.28"
        y="33.28"
        width="78.08"
        height="176"
        rx="12"
      />
    </svg>
  );
};

export default TrelloLogo;
