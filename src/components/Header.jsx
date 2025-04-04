import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <header
      className={`flex justify-between items-center px-6 py-4
      `}
    >
      <h1 className="text-2xl font-bold transition-all duration-300 
      hover:scale-110 hover:text-[#9A031E]">VP.</h1>
      <ThemeToggle />
    </header>
  );
};

export default Header;
