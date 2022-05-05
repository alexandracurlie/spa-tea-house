import React from "react";
import {useStyles} from "./styles";

export const Page = ({ title, subtitle, children }) => {
  const styles = useStyles()

  return (
    <div className={styles.container}>
        <div className={styles.titleWrapper}>
          <h2 className="title">{title}</h2>
          <h3 className="subtitle">{subtitle}</h3>
        </div>
      <div className={styles.wrapper}>
        {children}
      </div>
    </div>
  );
};
