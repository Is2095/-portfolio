import { Tecnologias } from "@/app/type/interface";
import CssLogo from "./CssLogo";
import HtmlLogo from "./HtmlLogo";
import JavaScriptLogo from "./JavaScriptLogo";
import NextLogo from "./NextLogo";
import ReactLogo from "./ReactLogo";
import ReduxLogo from "./ReduxLogo";
import TailwindcssLogo from "./TailwindcssLogo";
import TypeScriptLogo from "./TypeScriptLogo";

const tecnologiasFrontend: Tecnologias[] = [
  {
    titulo: "React",
    Icono: ReactLogo,
  },
  {
    titulo: "TypeScript",
    Icono: TypeScriptLogo,
  },
  {
    titulo: "HTML5",
    Icono: HtmlLogo,
  },
  {
    titulo: "CSS3",
    Icono: CssLogo,
  },
  {
    titulo: "Next.js",
    Icono: NextLogo,
  },
  {
    titulo: "Tailwind CSS",
    Icono: TailwindcssLogo,
  },
  {
    titulo: "JavaScript",
    Icono: JavaScriptLogo,
  },
  {
    titulo: "Redux Toolkit",
    Icono: ReduxLogo,
  },
];

export default tecnologiasFrontend;
