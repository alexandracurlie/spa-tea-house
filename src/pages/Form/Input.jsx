import React from "react";
import {useStyles} from "./styles";

export const Input = React.memo(
    ({ ...props }) => {
      const styles = useStyles()
      return (
          <div className={styles.row}>
            <label className={styles.label}>{props.label}</label>
            <input {...props}
                   className={styles.input}
                   type={props.type}
                   placeholder={props.placeholder} />
          </div>
      )
})
