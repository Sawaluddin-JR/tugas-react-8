import { useContext } from "react";
import { ThemeContext } from "../App";

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`text-sm p-4 text-center ${
        theme === "light"
          ? "text-gray-900 bg-gray-300"
          : "text-white bg-gray-800"
      }`}
    >
      Copyright @ 2023 Sawaluddin siregar
    </div>
  );
};

export default Footer;
