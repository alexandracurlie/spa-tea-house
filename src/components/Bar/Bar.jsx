import React, {useRef, useState} from "react";
import {useDispatch } from "react-redux";
import {setFilter, setSortBy} from "../../redux/actions";
import {Button} from "../Buttons/Button";
import {DropDown} from "../DropDown/DropDown";
import {useStyles} from "./styles";
import {filters, sort} from "../../utilities";

export const Bar = React.memo(() => {
  const styles = useStyles()
  const dispatch = useDispatch();
  const sortRef = useRef();
  const [visible, setVisible] = useState(false);

  //TODO: redux-thunk
  //TODO: onclick
  const onSelectFilter = React.useCallback((value) => {
    dispatch(setFilter(value));
  }, [dispatch] );

  const onSelectSortBy = React.useCallback((value) => {
    dispatch(setSortBy(value));
  }, [dispatch] );



  const toggleVisibility = () => {
    setVisible(!visible);
    console.log(visible)
  };

  const handleClick = (evt) => {
    // evt.path returns undefined in Mozilla Firefox, this is how it works there:
    const path = evt.path || (evt.composedPath && evt.composedPath());

    if (!path.includes(sortRef.current)) {
      setVisible(false);
    }
  };

  React.useEffect(() => {
    document.body.addEventListener("click", handleClick);
  }, []);

  const selectItem = (item) => {
    setVisible(!visible);
    onSelectSortBy(item);
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
