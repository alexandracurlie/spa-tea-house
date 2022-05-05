import React, {memo, useEffect, useRef, useState} from "react";
import {useDispatch} from "react-redux";
import {Button, DropDown} from "../../components";
import {setFilter, setSortBy} from "../../redux/actions";
import {useStyles} from "./styles";

export const Bar = memo(({filters, sortBy}) => {
  const dispatch = useDispatch()
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

  const onSetFilter = (item) => {
    dispatch(setFilter(item))
  }

  const onSetSortBy = (item) => {
    dispatch(setSortBy(item))
    toggleVisibility()
  }

  return (
      <div className={`${styles.container}`} ref={sortRef}>
        <div className={`${styles.containerFilter} `}>
          { filters && filters.map((filter) => (
              <Button key={filter}
                      name={filter}
                      onClick={() => onSetFilter(filter)}
              />))
          }
        </div>
        <div className={styles.containerSort}>
          <Button name={"Sort by"}
                  onClick={toggleVisibility} />

          { visible && <DropDown data={sortBy} onClick={onSetSortBy} /> }
        </div>
      </div>
  )
})
