import { useContext } from "react";
import { LanguageContext, ThemeContext, strings } from "../App";

const Contact = () => {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  return (
    <section
      id="contact"
      className={`py-10 px-3 ${
        theme === "light" ? "text-gray-900" : "text-white"
      }`}
    >
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          {strings[language].contact}{" "}
          <span className="text-primary">{strings[language].am}</span>
        </h3>
        <p
          className={`mt-3 text-lg ${
            theme === "light" ? "text-gray-900" : "text-gray-400"
          }`}
        >
          Hubungi : <span className="text-primary text-bold">+</span>628 8889
          5432 11
        </p>
        <div
          className={`mt-16 flex md:flex-row flex-col gap-6 max-w-5xl p-6 rounded-lg mx-auto ${
            theme === "light"
              ? "text-gray-900 bg-gray-300"
              : "text-white bg-gray-800"
          }`}
        >
          <form className="flex flex-col flex-1 gap-5">
            <input
              type="text"
              placeholder="Nama anda"
              className={`outline-none rounded-lg p-3 ${
                theme === "light" ? "text-gray-900" : "text-white bg-gray-700"
              }`}
            />
            <input
              type="email"
              placeholder="Alamat email anda"
              className={`outline-none rounded-lg p-3  ${
                theme === "light" ? "text-gray-900" : "text-white bg-gray-700"
              }`}
            />
            <textarea
              placeholder="Pesan anda"
              rows={10}
              className={`outline-none rounded-lg p-3  ${
                theme === "light" ? "text-gray-900" : "text-white bg-gray-700"
              }`}
            ></textarea>
            <button className="btn-primary w-fit">Kirim</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
