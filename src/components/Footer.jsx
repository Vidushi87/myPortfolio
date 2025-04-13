import { useTheme } from "../context/ThemeContext";
import { footerData } from "../assets/Data"; // Import footer data

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
        <p className="text-sm">
          Designed and Developed by {footerData.designedBy}
        </p>
        <p className="text-sm">{footerData.copyright}</p>
        <div className="flex gap-4 mt-2 sm:mt-0">
          {footerData.socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
            >
              <div className="text-2xl hover:text-[#A0845C] transition-colors">
                {link.icon}
              </div>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
