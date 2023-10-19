import styles from "./Navbar.module.scss";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = ({ i18n, t }) => {
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    language === "en"
      ? document.querySelector("#en").classList.add(styles.active_lang)
      : document.querySelector("#en").classList.remove(styles.active_lang);
    language === "ua"
      ? document.querySelector("#ua").classList.add(styles.active_lang)
      : document.querySelector("#ua").classList.remove(styles.active_lang);
  };
  return (
    <header className={styles.root}>
      <div className={styles.language_block_0}>
        <a href="#eng">Eng</a>
        <span>|</span>
        <a href="#ua">Ua</a>
      </div>
      <nav className={styles.navigation}>
        <AnchorLink href="#welcome" className={styles.active_link}>
          {t("link_welcome")}
        </AnchorLink>
        <span>&#x27F6;</span>
        <AnchorLink href="#info">{t("link_info")}</AnchorLink>
        <span>&#x27F6;</span>
        <AnchorLink href="#contacts">{t("link_contacts")}</AnchorLink>
      </nav>
      <div className={styles.language_block}>
        <a
          id="en"
          href="#en"
          onClick={(e) => {
            changeLanguage("en");
            e.preventDefault();
          }}
        >
          Eng
        </a>
        <span>|</span>
        <a
          className={styles.active_lang}
          id="ua"
          href="#ua"
          onClick={(e) => {
            changeLanguage("ua");
            e.preventDefault();
          }}
        >
          Ua
        </a>
      </div>
    </header>
  );
};

export default Navbar;
