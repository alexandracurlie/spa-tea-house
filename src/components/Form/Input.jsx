import React from "react";
import {useStyles} from "./styles";

export const Input = React.memo((
    {
      field,
      form: { touched, errors },
      ...props
    }) => {
          const styles = useStyles()
          return (
              <div className={styles.row}>
                <label className={styles.label}>{props.label}</label>
                <input {...field}
                       {...props}
                       className={styles.input}
                       type={props.type}
                       placeholder={props.placeholder} />
                <p className={styles.helper}>{touched[field.name] && errors[field.name]}</p>
              </div>
      )
})
