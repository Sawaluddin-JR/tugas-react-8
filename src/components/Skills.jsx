import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io";
import { TbBrandCSharp } from "react-icons/tb";
import { SiMysql } from "react-icons/si";
import { useContext } from "react";
import { LanguageContext, ThemeContext, strings } from "../App";

const Skills = () => {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  return (
    <section
      id="skills"
      className={`py-10 relative ${
        theme === "light" ? "text-gray-900" : "text-white bg-gray-800"
      }`}
    >
      <div
        className={`mt-8 text-center ${
          theme === "light" ? "text-gray-900" : "text-gray-100"
        }`}
      >
        <h3 className="text-4xl font-semibold">
          {strings[language].skills}{" "}
          <span className="text-primary">{strings[language].am}</span>
        </h3>
        <p
          className={`mt-3 text-lg ${
            theme === "light" ? "text-gray-900" : "text-gray-200"
          }`}
        >
          Pengetahuan saya
        </p>
        <div className="flex items-center justify-center mt-12 gap-10 flex-wrap cursor-pointer">
          <div
            className={`border-2 border-primary relative min-w-[10rem] max-w-[16rem] p-10 rounded-xl ${
              theme === "light"
                ? "text-gray-900 bg-gray-300"
                : "text-white bg-gray-900"
            }`}
          >
            <AiFillHtml5
              className={`w-16 h-16 flex items-center justify-normal rounded-full text-6xl hover:text-yellow-600 ${
                theme === "light" ? "text-gray-900" : "text-white"
              }`}
            />
            <p className="text-xl mt-3">HTML</p>
            <p
              className={`font-bold text-lg ${
                theme === "light" ? "text-red-700" : "text-yellow-200"
              }`}
            >
              75%
            </p>
          </div>
          <div
            className={`border-2 border-primary relative min-w-[10rem] max-w-[16rem] p-10 rounded-xl ${
              theme === "light"
                ? "text-gray-900 bg-gray-300"
                : "text-white bg-gray-900"
            }`}
          >
            <IoLogoCss3
              className={`w-16 h-16 flex items-center justify-normal rounded-full text-6xl hover:text-yellow-600 ${
                theme === "light" ? "text-gray-900" : "text-white"
              }`}
            />
            <p className="text-xl mt-3">CSS</p>
            <p
              className={`font-bold text-lg ${
                theme === "light" ? "text-red-700" : "text-yellow-200"
              }`}
            >
              60%
            </p>
          </div>
          <div
            className={`border-2 border-primary relative min-w-[10rem] max-w-[16rem] p-10 rounded-xl ${
              theme === "light"
                ? "text-gray-900 bg-gray-300"
                : "text-white bg-gray-900"
            }`}
          >
            <TbBrandCSharp
              className={`w-16 h-16 flex items-center justify-normal rounded-full text-6xl  hover:text-yellow-600 ${
                theme === "light" ? "text-gray-900" : "text-white"
              }`}
            />
            <p className="text-xl mt-3">C SHARP</p>
            <p
              className={`font-bold text-lg ${
                theme === "light" ? "text-red-700" : "text-yellow-200"
              }`}
            >
              82%
            </p>
          </div>
          <div
            className={`border-2 border-primary relative min-w-[10rem] max-w-[16rem] p-10 rounded-xl ${
              theme === "light"
                ? "text-gray-900 bg-gray-300"
                : "text-white bg-gray-900"
            }`}
          >
            <SiMysql
              className={`w-16 h-16 flex items-center justify-normal rounded-full text-6xl hover:text-yellow-600 ${
                theme === "light" ? "text-gray-900" : "text-white"
              }`}
            />
            <p className="text-xl mt-3">MYSQL</p>
            <p
              className={`font-bold text-lg ${
                theme === "light" ? "text-red-700" : "text-yellow-200"
              }`}
            >
              80%
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
