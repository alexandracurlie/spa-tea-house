import React, {useMemo} from "react";
import {makeSize} from "../../utilities";
import {useStyles} from "./styles";

export const Textarea = React.memo(
    ({...props}) => {
      const styles = useStyles()
      const size = useMemo(() => makeSize(props.size, styles), [props.size, styles])

      return  (
          <div className={`${styles.row} ${size}`}>
            <label className={styles.label}>{props.label}</label>
            <textarea {...props}
                      className={styles.input}
                      placeholder={props.placeholder} />
          </div>
      )
})
