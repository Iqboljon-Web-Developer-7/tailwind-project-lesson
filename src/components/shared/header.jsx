import { AiFillCodeSandboxCircle } from "react-icons/ai";
import { AiFillDashboard } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { CiMenuBurger } from "react-icons/ci";

const Header = () => {
  return (
    <header className="flex items-center justify-between py-3 px-[4%]">
      <div className="hidden sm:flex items-center justify-center font-light gap-4">
        <a href="#" className="hover:text-blue-500 active:text-blue-300">
          Wooden Furniture
        </a>
        <a href="#" className="hover:text-blue-500 active:text-blue-300">
          About
        </a>
        <a href="#" className="hover:text-blue-500 active:text-blue-300">
          Stories
        </a>
      </div>
      <img className="w-36" src="/logo.svg" />
      <div className="flex items-center justify-center gap-3 text-xl sm:text-2xl">
        <AiFillCodeSandboxCircle className="icon" />
        <AiFillDashboard className="icon" />
        <AiFillGithub className="icon" />
        <CiMenuBurger className="block sm:hidden icon" />
      </div>
    </header>
  );
};

export default Header;
