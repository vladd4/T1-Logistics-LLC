import "../styles/App.scss";
import { useTranslation } from "react-i18next";
import Navbar from "./Navbar/Navbar";
import Welcome from "./Welcome/Welcome";
import InfoBlock from "./InfoBlock/InfoBlock";
import Footer from "./Footer/Footer";
import Loader from "./Loader";
import { useRef, useEffect } from "react";

window.onload = function () {
  document.body.classList.add("loaded_hiding");
  window.setTimeout(function () {
    document.body.classList.add("loaded");
    document.body.classList.remove("loaded_hiding");
  }, 500);
};

const App = () => {
  const { t, i18n } = useTranslation();
  const welcomeRef = useRef(null);

  useEffect(() => {
    if (welcomeRef.current) {
      welcomeRef.current.style.animation = "scaleImage 5s ease-in-out forwards";
    }
  }, []);
  return (
    <div className="App">
      <Loader />
      <Navbar i18n={i18n} t={t} />
      <Welcome t={t} refAnim={welcomeRef} />
      <InfoBlock t={t} />
      <Footer t={t} />
    </div>
  );
};

export default App;
