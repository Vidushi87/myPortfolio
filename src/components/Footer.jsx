import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer
      className={`py-4 text-center transition-colors ${
        theme === "dark"
          ? "bg-[#3A3A3A] text-[#D8C4B6]"
          : "bg-[#D8C4B6] text-[#3A3A3A]"
      }`}
    >
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between px-6">
        <p className="text-sm">Designed and Developed by Vidushi Pandey</p>
        <p className="text-sm">Copyright © 2025 VP</p>
        <div className="flex gap-4 mt-2 sm:mt-0">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-2xl hover:text-[#A0845C] transition-colors" />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-2xl hover:text-[#A0845C] transition-colors" />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-2xl hover:text-[#A0845C] transition-colors" />
          </a>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-2xl hover:text-[#A0845C] transition-colors" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
