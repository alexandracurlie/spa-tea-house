import React, {useEffect, useRef, useState} from "react";
import {Button} from "../Buttons/Button";
import {DropDown} from "../DropDown/DropDown";
import {filters, sort} from "../../utilities";
import {useStyles} from "./styles";

export const Bar = React.memo(({onSelectFilter, onClickSortBy}) => {
  const styles = useStyles()
  const sortRef = useRef();

  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  const handleClick = (evt) => {
    // evt.path returns undefined in Mozilla Firefox, this is how it works there:
    const path = evt.path || (evt.composedPath && evt.composedPath());

    if (!path.includes(sortRef.current)) {
      setVisible(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener("click", handleClick);
  }, []);

  const selectItem = (item) => {
    setVisible(!visible);
    onClickSortBy(item);
  };

  return (
      <div className={styles.container} ref={sortRef}>
        <div className={styles.containerFilter}>
          { filters && filters.map((filter) => (
              <Button name={filter}
                      onClick={() => onSelectFilter(filter)}
                      key={filter} /> ))
          }
        </div>
        <div className={styles.containerSort}>
          <Button name={"Sort by"}
                  onClick={toggleVisibility} />

          { visible && <DropDown data={sort}
                                 onClick={selectItem} /> }
        </div>
      </div>
  )
})
