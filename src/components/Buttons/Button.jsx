import React from "react";
import {NavigationWrapper} from "../wrappers/NavigationWrapper";
import {useStyles} from "./styles";

export const Button = ({className, onClick, disabled, children, name, ...props}) => {
  const styles = useStyles()

  return (
      <button {...props}
              className={`${styles.container} ${className}`}
              onClick={onClick}
              disabled={disabled}>
        {children || name}
      </button>
  );
}

export const NavButton = NavigationWrapper(Button)
