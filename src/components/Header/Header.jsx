import React, {useEffect, useRef, useState} from "react";
import {Button, NavButton} from "../../components";
import {CART_URL, headerData} from "../../utilities";
import {useStyles} from "./styles";

export const Header = () => {
  const styles = useStyles()
  const menu = useRef();

  const [toggle, setToggle] = useState(false);

  const onClickBurger = () => {
    setToggle(!toggle);
  };

  const handleClick = (evt) => {
    const path = evt.path || (evt.composedPath && evt.composedPath());

    if (path.includes(menu.current)) {
      setToggle(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener("click", handleClick);
  }, []);

  return (
    <header className={styles.header}>
      {!toggle &&
          <div className={`${styles.logo} logo`}>
            <span>Madame Pappertinio</span>
            <span>Tea House</span>
          </div>}
      <nav className={styles.nav}>
        <ul className={`${styles.menu} ${toggle || "hide"}`}
            ref={menu}>
          {headerData.map(item => (
              <li key={item.id} >
                <NavButton {...item} className={styles.btn} />
              </li>
          ))}
        </ul>

        <div className={styles.cart}>
          <NavButton path={CART_URL}
                     id="header-cart"
                     className={styles.btn} >
            <i className="fas fa-shopping-basket" />
          </NavButton>

          <Button className={`${styles.burger} show`}
                  onClick={onClickBurger}>
            <i className="fas fa-bars" />
          </Button>
        </div>
      </nav>
    </header>
  );
};
