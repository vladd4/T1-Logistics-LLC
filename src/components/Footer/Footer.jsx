import styles from "./Footer.module.scss";
import Logo from "../../assets/logo-light.png";
import Phone from "../../assets/phone.svg";
import Mail from "../../assets/mail.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useAnimate from "../../hooks/useAnimation";

const Footer = ({ t }) => {
  const { ref, isAnimated } = useAnimate();
  return (
    <footer
      className={`${styles.root} animated-element ${
        isAnimated ? "animate" : ""
      }`}
      id="contacts"
      ref={ref}
    >
      <article className={styles.article_block}>
        <AnchorLink href="#welcome" className={styles.anchor}>
          <img alt="T1 Logistics" src={Logo} className={styles.logo} />
        </AnchorLink>
        <div className={styles.contact_block}>
          <h4>{t("contact_h")}</h4>
          <div className={styles.div_1}>
            <img alt="Mail" src={Mail} />
            <a href="mailto:t1logistics22@gmail.com">t1logistics22@gmail.com</a>
          </div>
          <div className={styles.div_2}>
            <img alt="Phone" src={Phone} />
            <a href="tel:+380502225028">+38(050)-222-50-28</a>
          </div>
        </div>
        <a href="tel:+380502225028" className={styles.button}>
          {t("info_btn")} &#x27F6;
        </a>
      </article>
      <p className={styles.copy}>T1 Logistics LLC © All rights reserved</p>
    </footer>
  );
};
export default Footer;
