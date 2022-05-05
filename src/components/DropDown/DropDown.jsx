import React from "react";
import {useStyles} from "./styles";

export const DropDown = ({data, onClick}) => {
  const styles = useStyles()

  return (
      <div className={styles.container}>
        <ul>
          {data && data.map((item) => (
              <li key={item}
                  className={styles.item}
                  id={item}
                  onClick={() => onClick(item)}>
                {item}
              </li>
            ))}
        </ul>
      </div>
  )
}

