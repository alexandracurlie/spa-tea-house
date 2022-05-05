import React from "react";
import {FooterItem} from "./FooterItem";
import {useStyles} from "./styles";
import {dataFooter} from "../../utilities";

export const Footer = () => {
  const styles = useStyles()

  return (
      <footer className={styles.footer}>
        { dataFooter.map(item =>
            <FooterItem props={item}
                        styles={styles}
                        key={item.id}
            />) }
      </footer>
  );
}
