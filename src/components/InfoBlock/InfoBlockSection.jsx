import styles from "./InfoBlock.module.scss";
import useAnimate from "../../hooks/useAnimation";

const InfoBlockSection = ({ title, icon, info, image, t, position }) => {
  const { ref, isAnimated } = useAnimate();
  return (
    <article
      className={`${styles.article_block} ${
        position === "left"
          ? `animated-element-right ${isAnimated ? "animate" : ""}`
          : `animated-element-left ${isAnimated ? "animate" : ""}`
      }`}
      ref={ref}
    >
      <img alt="Досвід" src={image} className={styles.main_image} />
      <article className={styles.text_block}>
        <div>
          <img src={icon} alt="Like" className={styles.icon} />
          <h3>{t(title)}</h3>
        </div>
        <p>{t(info)}</p>
        <a href="tel:+380502225028" className={styles.button}>
          {t("info_btn")} &#x27F6;
        </a>
      </article>
    </article>
  );
};
export default InfoBlockSection;
