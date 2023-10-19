import styles from "./InfoBlock.module.scss";
import InfoBlockSection from "./InfoBlockSection";
import { items } from "../../store/info_store";

const InfoBlock = ({ t }) => {
  return (
    <section id="info">
      {items.map((item) => {
        return (
          <section
            key={item.title}
            className={`${
              item.position === "left" ? styles.root_left : styles.root
            }`}
          >
            <InfoBlockSection
              title={item.title}
              icon={item.icon}
              image={item.image}
              info={item.info}
              position={item.position}
              t={t}
            />
          </section>
        );
      })}
    </section>
  );
};
export default InfoBlock;
