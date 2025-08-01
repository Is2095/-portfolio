import React from "react";
type IconoProps = React.SVGProps<SVGSVGElement>

const HtmlLogo = (props: IconoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      height="50"
      width="50"
      viewBox="0 0 124 141.53199999999998"
      {...props}
      className="w-8 h-8 md:w-12 md:h-12 lg:w-14 lg:h-14"
    >
      <path
        d="M10.383 126.894L0 0l124 .255-10.979 126.639-50.553 14.638z"
        fill="#e34f26"
      />
      <path
        d="M62.468 129.277V12.085l51.064.17-9.106 104.851z"
        fill="#ef652a"
      />
      <path
        d="M99.49 41.362l1.446-15.49H22.383l4.34 47.49h54.213L78.81 93.617l-17.362 4.68-17.617-5.106-.936-12.085H27.319l2.128 24.681 32 8.936 32.255-8.936 4.34-48.17H41.107L39.49 41.362z"
        fill="#fff"
      />
    </svg>
  );
};

export default HtmlLogo;
