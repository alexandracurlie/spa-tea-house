import React from "react";
import {useStyles} from "./styles";

export const Checkbox = React.memo(({...props}) => {
  const styles = useStyles()

  return (
      <div className={styles.container_checkbox}>
        <input {...props}
               className={styles.checkbox}
               type="checkbox"
               id="checkbox"
               data-form="form"
               key={`checkbox_order_form`} />
        <label className={styles.label} htmlFor="checkbox">
          I agreed with terms and conditions whatever it is
        </label>
      </div>
  )
})
