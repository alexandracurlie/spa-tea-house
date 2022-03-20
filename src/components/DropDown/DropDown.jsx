import React from "react";
import {useStyles} from "./styles";

export const DropDown = ({data, onClick}) => {
  const styles = useStyles()

  // TODO onclick
  return (
      <div className={styles.container}>
        <ul>
          {data && data.map((item) => (
              <li className={styles.item}
                  id={item}
                  key={item}
                  onClick={() => onClick(item)}>
                {item}
              </li>
          ))}
        </ul>
      </div>
  )
}

