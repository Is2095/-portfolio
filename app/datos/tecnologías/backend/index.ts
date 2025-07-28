import { Tecnologias } from "@/app/type/interface";
import ExpressLogo from "./ExpressLogo";
import FirebaseLogo from "./FirebaseLogo";
import JavaLogo from "./JavaLogo";
import JavaScriptBackLogo from "./JavaScriptBackLogo";
import MongodbLogo from "./MongodbLogo";
import MysqlLogo from "./MysqlLogo";
import NodeLogo from "./NodeLogo";
import PostgesqlLogo from "./PostgesqlLogo";
import SpringbootLogo from "./SpringbootLogo";

const tecnologiasBackend: Tecnologias[] = [
  {
    titulo: "Node.js",
    Icono: NodeLogo,
  },
  {
    titulo: "JavaScript",
    Icono: JavaScriptBackLogo,
  },
  {
    titulo: "Express.js",
    Icono: ExpressLogo,
  },
  {
    titulo: "Java",
    Icono: JavaLogo,
  },
  {
    titulo: "Spring Boot",
    Icono: SpringbootLogo,
  },
  {
    titulo: "PostgreSQL",
    Icono: PostgesqlLogo,
  },
  {
    titulo: "MySQL",
    Icono: MysqlLogo,
  },
  {
    titulo: "MongoDB",
    Icono: MongodbLogo,
  },
  {
    titulo: "Firebase",
    Icono: FirebaseLogo,
  },
];

export default tecnologiasBackend;
