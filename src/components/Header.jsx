import { HashLink as Link } from "react-router-hash-link";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const { theme } = useContext(ThemeContext);
  const location = useLocation();

  return (
    <header className="flex justify-between items-center px-6 py-4 sticky top-0 z-50 bg-[var(--bg-color)] text-[var(--text-color)] shadow-md">
      <Link
        to="/#home"
        smooth
        className="text-2xl font-bold hover:scale-110 transition-all hover:text-[#9A031E]"
      >
        VP.
      </Link>

      <nav className="flex items-center gap-6 text-lg font-medium">
        <Link smooth to="/#about" className="hover:text-[#9A031E] transition">
          About
        </Link>
        <Link to="/projects" className="hover:text-[#9A031E] transition">
          Projects
        </Link>
        <Link to="/resume" className="hover:text-[#9A031E] transition">
          Resume
        </Link>
        <ThemeToggle />
      </nav>
    </header>
  );
};

export default Header;
