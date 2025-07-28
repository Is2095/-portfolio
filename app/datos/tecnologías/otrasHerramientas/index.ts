import { Tecnologias } from "@/app/type/interface";
import FigmaLogo from "./FigmaLogo";
import GitLogo from "./GitLogo";
import GithubLogo from "./GithubLogo";
import InsomniaLogo from "./InsomniaLogo";
import IntellijideaLogo from "./IntellijideaLogo";
import TrelloLogo from "./TrelloLogo";
import VisualstudioLogo from "./VisualstudioLogo";
import npmLogo from "./npmLogo";

const tecnologiasOtrasHerramientas: Tecnologias[] = [
  {
    titulo: "Git",
    Icono: GitLogo,
  },
  {
    titulo: "GitHub",
    Icono: GithubLogo,
  },
  {
    titulo: "Visual Studio",
    Icono: VisualstudioLogo,
  },
  {
    titulo: "Itellij IDEA",
    Icono: IntellijideaLogo,
  },
  {
    titulo: "Insomnia",
    Icono: InsomniaLogo,
  },
  {
    titulo: "Trello",
    Icono: TrelloLogo,
  },
  {
    titulo: "Figma",
    Icono: FigmaLogo,
  },
  {
    titulo: "NPM",
    Icono: npmLogo,
  },
];

export default tecnologiasOtrasHerramientas;
