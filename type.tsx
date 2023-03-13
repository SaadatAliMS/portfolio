import { IconType } from "react-icons";
export interface IService {
  title: string;
  about: string;
  Icon: IconType;
}

export interface ISkill {
  name: string;
  level: string;
  Icon: IconType;
}
export interface IProjects {
  name: string;
  description: string;
  img_path: string;
  deployed_url: string;
  github_url: string;
  category: Category[];
  key_techs: string[];
}
export type Category = "react" | "node" | "exprex" | "django" | "mongo";
