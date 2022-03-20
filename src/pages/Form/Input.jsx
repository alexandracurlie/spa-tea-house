import React, {useMemo} from "react";
import {makeSize} from "../../utilities/helpers";
import {useStyles} from "./styles";

export const Input = React.memo(
    ({ ...props }) => {
      const styles = useStyles()
      const size = useMemo(() => makeSize(props.size, styles), [props.size, styles])

      return (
          <div className={`${styles.row} ${size}`}>
            <label className={styles.label}>{props.label}</label>
            <input {...props}
                   className={styles.input}
                   type={props.type}
                   placeholder={props.placeholder} />
          </div>
      )
})
