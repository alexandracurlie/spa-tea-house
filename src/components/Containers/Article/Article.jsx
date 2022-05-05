import React from "react";
import {useStyles} from "./styles";

export const Article = ({title, subtitle, children}) => {
  const styles = useStyles()

  return (
      <article className={styles.container}>
        {title && <h2>{title}</h2>}
        {subtitle && <h3>{subtitle}</h3>}

        <div className={`${styles.content} column-content `}>
          {children}
        </div>
      </article>
  )
}
