import { useContext } from "react";
import { LanguageContext, ThemeContext, strings } from "../App";

const About = () => {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const info = [
    { text: "Years exprience", count: 2 },
    { text: "Completed Projects", count: 75 },
    { text: "Companies Work", count: 81 },
  ];
  return (
    <section
      id="about"
      className={`py-10 ${theme === "light" ? "text-gray-900" : "text-white"}`}
    >
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          {strings[language].about}{" "}
          <span className="text-primary">{strings[language].am}</span>
        </h3>
        <p
          className={`my-3 text-lg ${
            theme === "light" ? "text-gray-900" : "text-gray-400"
          }`}
        >
          {strings[language].aboutMe1}
        </p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div
              className={`my-3 ${
                theme === "light" ? "text-gray-900" : "text-gray-300"
              }`}
            >
              <p className="text-justify leading-7 w-11/12 mx-auto">
                {strings[language].aboutMe2}{" "}
                <span
                  className={`${
                    theme === "light"
                      ? "text-green-900 font-bold"
                      : "text-yellow-500"
                  }`}
                >
                  LOVE YOU MOM
                </span>
              </p>
              <div className="flex mt-10 items-center gap-7">
                {info.map((content) => (
                  <div key={content.count}>
                    <h3
                      className={`md:text-4xl text-2xl font-semibold ${
                        theme === "light" ? "text-gray-900" : "text-white"
                      }`}
                    >
                      {content.count}
                      <span className="text-primary">+</span>
                      {""}
                    </h3>
                    <span className="md:text-base text-xs">{content.text}</span>
                  </div>
                ))}
              </div>
              <a href="#" download>
                <button className="btn-primary mt-10">Download CV</button>
              </a>
            </div>
          </div>
          <div className="flex-1 flex md:mt-0 mt-6 justify-center items-center">
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ">
              <img
                src="about-photo.png"
                alt="about-image"
                className="w-full object-cover bg-cyan-800 rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
