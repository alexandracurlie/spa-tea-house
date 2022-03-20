import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "./Buttons/Button";

export const Header = () => {
  const menu = React.useRef();
  const logo = React.useRef();

  const [toggle, setToggle] = React.useState(false);

  const onClickBurger = () => {
    setToggle(!toggle);
  };

  const handleClick = (evt) => {
    const path = evt.path || (evt.composedPath && evt.composedPath());

    if (path.includes(menu.current)) {
      setToggle(false);
    }
  };

  React.useEffect(() => {
    document.body.addEventListener("click", handleClick);
  }, []);

  return (
    <header>
      <nav className="navigation">
        <div className="col logo" ref={logo}>
          <span>Madame Pappertinio</span>
          <span>Tea House</span>
        </div>

        <ul className={toggle ? "col menu show-menu" : "col menu"} ref={menu}>
          <li>
            <NavLink to="/spa-tea-house" exact id="header-home">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/spa-tea-house/catalog" id="header-catalog">
              Catalog
            </NavLink>
          </li>
          <li>
            <NavLink to="/spa-tea-house/contacts" id="header-contacts">
              Contacts
            </NavLink>
          </li>
        </ul>

        <div className="col cart">
          <NavLink to="/spa-tea-house/cart" id="header-cart">
            <i className="fas fa-shopping-basket" />
          </NavLink>
          <Button className={"menu-burger"} onClick={onClickBurger}>
            <i className="fas fa-bars" />
          </Button>
        </div>
      </nav>
    </header>
  );
};
