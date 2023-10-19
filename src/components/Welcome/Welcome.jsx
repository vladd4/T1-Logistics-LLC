import styles from "./Welcome.module.scss";
import Logo from "../../assets/logo-light.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useAnimate from "../../hooks/useAnimation";

const Welcome = ({ t, refAnim }) => {
  const { ref, isAnimated } = useAnimate();
  return (
    <section ref={refAnim} className={styles.root} id="welcome">
      <article
        className={`${styles.wrapper} animated-element ${
          isAnimated ? "animate" : ""
        }`}
        ref={ref}
      >
        <img alt="T1 Logistics" src={Logo} />
        <p>{t("welcome_p")}</p>
        <AnchorLink className={styles.button} href="#info">
          {t("welcome_btn")} &#x27F6;
        </AnchorLink>
      </article>
    </section>
  );
};

export default Welcome;
