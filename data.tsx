import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { GiBrain } from "react-icons/gi";
import { IService } from "./type";

export const services: IService[] = [
  {
    title: "Frontend Dev",
    about:
      "I am full stack web developer and working on projects regarding web 3.0 and Metaverse.I can built beautiful and scaleable SPA using <b>HTML</b>,<b>CSS<b/> and <b>React.js</b>",
    Icon: RiComputerLine,
  },
  {
    title: "Backend Dev",
    about:
      "I can handle database,server,api using <b>Express</b> and other popular frameworks",
    Icon: FaServer,
  },

  {
    title: "API Development",
    about:
      "I can develop robust REST APIs  using <b>Django</b> & <b>Node API</b>",
    Icon: AiOutlineApi,
  },
  {
    title: "UI/UX Designer",
    about:
      "Stunning user interface designs using <b>Figma </b> & <b>Framer</b>",
    Icon: AiOutlineAntDesign,
  },

  {
    title: "Data Science & Machine Learning",
    about:
      "I am Data Scientist and Machine Learning Engineer and applying it in Nuclear Medicine.I regularly participate in Kaggle competitions",
    Icon: GiBrain,
  },
];
