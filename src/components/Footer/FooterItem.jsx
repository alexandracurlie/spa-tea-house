import React from "react";

export const FooterItem = ({props, styles}) => (
    <div className={styles.item}>
      <div className={styles.img}>
        {props.img}
      </div>
      <div className={styles.containerInfo}>
        <a className={styles.link}
           href={props.href}>{props.content}</a>
      </div>
    </div>
)
