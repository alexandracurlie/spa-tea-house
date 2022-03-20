import React from "react";
import {useStyles} from "./styles";

export const Button = (props) => {
  const styles = useStyles()

  return (
      <button {...props}
              className={props.className ? props.className :  styles.container}
              onClick={props.onClick}
              disabled={props.disabled}>
        {props.children || props.name}
      </button>
  );
}

