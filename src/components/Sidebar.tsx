import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiOutlineMail,
} from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";
import Image from "next/image";
import profile from "../../public/photo.jpg";
import Link from "next/link";
import { useTheme } from "next-themes";

const Sidebar = () => {
  const { theme, setTheme } = useTheme();
  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div>
      <Image
        src={profile}
        alt="Saadat"
        className="w-32 h-32 rounded-full mx-auto"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-Philosopher">
        <span className="text-green-default"> Dr.Saadat </span>
        Ali
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full">
        Full Stack Web developer
      </p>
      <a className="px-2 py-1 my-3 bg-gray-200 rounded-full flex items-center justify-center">
        <GiTie className="w-6 h-6" />
        Download Resume
      </a>
      {/* social icons */}
      <div className="flex justify-around w-9/12 my-5 text-green-default md:w-full mx-auto ">
        <Link href="https://github.com/SaadatAliPhd">
          <AiFillGithub className="w-8 h-8 " />
        </Link>
        <Link href="https://www.linkedin.com/in/saadat-ali-87a11648/">
          <AiFillLinkedin className="w-8 h-8 " />
        </Link>
        <Link href="https://twitter.com/SaadatAli_Phd">
          <AiFillTwitterCircle className="w-8 h-8" />
        </Link>
      </div>
      {/* address */}
      <div className="py-4 my-4 w-full bg-gray-200  ">
        <div className="flex items-center justify-center space-x-2 ">
          <GoLocation />
          <span>Gujranwala,Pakistan</span>
        </div>
        <p className="my-2 ">frhnsaif@yahoo.com</p>
        <p className="my-2">+92-335-0620064</p>
      </div>
      {/* Email button */}
      <button
        className=" bg-gradient-to-r from-green-default to-blue-400 w-8/12 rounded-full py-2 px-5 text-white my-2"
        onClick={() => window.open("mailto:frhnsaif@yahoo.com")}
      >
        Email Me
      </button>
      <button
        onClick={changeTheme}
        className="bg-gradient-to-r from-green-default to-blue-400 w-8/12 rounded-full py-2 px-5 text-white my-2"
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default Sidebar;
