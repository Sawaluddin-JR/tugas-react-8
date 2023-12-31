import { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import ListProject from "./components/ListProject";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { createContext } from "react";
import { useRef } from "react";
import { useEffect } from "react";

export const strings = {
  id: {
    am: "Saya",
    home: "Beranda",
    about: "Tentang",
    skills: "Keahlian",
    projects: "Proyek",
    contact: "Kontak",
    hello: "Halo!✋",
    intro: "Nama Saya Sawaluddin",
    contactMe: "Hubungi saya",
    position: "Pengembang Frontend Junior",
    aboutMe1: "Perkenalkan Saya",
    aboutMe2:
      "adalah mahasiswa dari Universitas Nasional PASIM Bandung mengambil Program Studi S1 Teknik Informatika dan saya sudah menjalaninya selama 4 semester penuh dengan rintangan yang melewati luas nya samudera dan dalamnya lautan di india.Tetapi berkat doa dan support sang ibu saya masih bisa bertahan sampai sekarang",
  },
  en: {
    am: "Me",
    home: "Home",
    about: "About",
    skills: "Skills",
    projects: "Projects",
    contact: "Contact",
    hello: "Hello!✋",
    intro: "My Name is Sawaluddin",
    contactMe: "Contact me",
    position: "Junior Frontend Developer",
    aboutMe1: "Let Me Introduce My Self",
    aboutMe2:
      "I am a student from PASIM Bandung National University taking the Undergraduate Program in Informatics Engineering and I have lived it for 4 full semesters with obstacles that crossed the vast oceans and the deep seas in India. But thanks to the prayers and support of my mother I have survived until now",
  },
};

export const ThemeContext = createContext({
  theme: null,
  setTheme: () => {},
});

export const LanguageContext = createContext({
  language: null,
  setLanguage: () => {},
});

const App = () => {
  const [theme, setTheme] = useState("dark");
  const [language, setLanguage] = useState("en");
  const backToTopButtonRef = useRef(null);

  const scroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    console.log(
      `tema yang digunakan sekarang ${theme === "dark" ? "gelap" : "terang"}`
    );
    console.log(
      `bahasa yang digunakan sekarang ${
        language === "en" ? "english" : "indonesia"
      }`
    );
  }, [theme, language]);
  return (
    <div
      className={`${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <LanguageContext.Provider value={{ language, setLanguage }}>
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <Navbar />
          <Home language={language} />
          <About />
          <Skills />
          <ListProject />
          <Contact />
          <button
            className="fixed bottom-4 left-2 p-2 bg-yellow-500 text-gray-800 rounded-full shadow hover:bg-yellow-200"
            ref={backToTopButtonRef}
            onClick={() => scroll(backToTopButtonRef.current)}
          >
            <BsFillArrowUpCircleFill size={24} />
          </button>
          <Footer />
        </ThemeContext.Provider>
      </LanguageContext.Provider>
    </div>
  );
};

export default App;
