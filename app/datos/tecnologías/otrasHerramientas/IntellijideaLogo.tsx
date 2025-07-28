import React from "react";
type IconoProps = React.SVGProps<SVGSVGElement>

const IntellijideaLogo = (props: IconoProps) => {
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
        <linearGradient x1="0%" y1="50%" x2="99.799%" y2="50%" id="a">
          <stop stopColor="#F97A12" offset="26%" />
          <stop stopColor="#B07B58" offset="46%" />
          <stop stopColor="#577BAE" offset="72%" />
          <stop stopColor="#1E7CE5" offset="91%" />
          <stop stopColor="#087CFA" offset="100%" />
        </linearGradient>
        <linearGradient
          x1=".345%"
          y1="34.54%"
          x2="121.182%"
          y2="77.619%"
          id="b"
        >
          <stop stopColor="#F97A12" offset="0%" />
          <stop stopColor="#CB7A3E" offset="7%" />
          <stop stopColor="#9E7B6A" offset="15%" />
          <stop stopColor="#757B91" offset="24%" />
          <stop stopColor="#537BB1" offset="33%" />
          <stop stopColor="#387CCC" offset="43%" />
          <stop stopColor="#237CE0" offset="54%" />
          <stop stopColor="#147CEF" offset="66%" />
          <stop stopColor="#0B7CF7" offset="79%" />
          <stop stopColor="#087CFA" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="78.169%"
          y1="97.749%"
          x2="30.106%"
          y2="-6.624%"
          id="c"
        >
          <stop stopColor="#FE315D" offset="0%" />
          <stop stopColor="#CB417E" offset="8%" />
          <stop stopColor="#9E4E9B" offset="16%" />
          <stop stopColor="#755BB4" offset="25%" />
          <stop stopColor="#5365CA" offset="34%" />
          <stop stopColor="#386DDB" offset="44%" />
          <stop stopColor="#2374E9" offset="54%" />
          <stop stopColor="#1478F3" offset="66%" />
          <stop stopColor="#0B7BF8" offset="79%" />
          <stop stopColor="#087CFA" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="20%"
          y1="24.087%"
          x2="103.422%"
          y2="132.676%"
          id="d"
        >
          <stop stopColor="#FE315D" offset="0%" />
          <stop stopColor="#F63462" offset="4%" />
          <stop stopColor="#DF3A71" offset="10%" />
          <stop stopColor="#C24383" offset="17%" />
          <stop stopColor="#AD4A91" offset="29%" />
          <stop stopColor="#755BB4" offset="55%" />
          <stop stopColor="#1D76ED" offset="92%" />
          <stop stopColor="#087CFA" offset="100%" />
        </linearGradient>
      </defs>
      <path fill="url(#a)" d="M64.8 199.6l-62-48.8 30.8-57.2L122 128z" />
      <path
        fill="url(#b)"
        d="M256 68.4l-4.8 148-98.4 39.6-59.2-38.4L180 128l-37.6-83.2 34-40.8z"
      />
      <path fill="url(#c)" d="M256 68.4l-78 92-35.6-115.6 34-40.8z" />
      <path
        fill="url(#d)"
        d="M123.2 212.4L20.8 249.6 37.2 192l21.2-71.2L0 101.2 37.2 0l80 9.6 79.2 90.4z"
      />
      <path d="M48 48h160v160H48z" />
      <path
        d="M63.2 178h60v10h-60v-10zM106 80.8v-12H73.2v12h9.2v42h-9.2v12.4H106v-12.4h-9.2v-42h9.2zm32 55.2a26.84 26.84 0 0 1-13.2-2.8 31.48 31.48 0 0 1-8.8-7.2l9.2-10.4a29.88 29.88 0 0 0 5.6 4.8 11.72 11.72 0 0 0 6.4 1.6 7.44 7.44 0 0 0 6.4-2.8 11.72 11.72 0 0 0 2.4-8.4V68h14.8v43.2a27.08 27.08 0 0 1-1.6 10.4 20 20 0 0 1-5.6 8.8A28.6 28.6 0 0 1 138 136z"
        fill="#FFF"
      />
    </svg>
  );
};

export default IntellijideaLogo;
