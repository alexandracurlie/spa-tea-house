import React from "react";
import {useStyles} from "./styles";

export const Section = ({ title, description, img }) => {
  const styles = useStyles()

  return (
        <section className={styles.container}>
          {img && <img src={img} alt={"logo"} width={50} />}
          <h3>{title}</h3>
          <p>{description}</p>
        </section>
  );
};
