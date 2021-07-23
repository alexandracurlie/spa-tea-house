import React from "react";
import { Button } from "./Button";

export const SortBTNs = React.memo(({ activeItem, sortBy, onClickItem }) => {
  const [visible, setVisible] = React.useState(false);
  const sortRef = React.useRef();

  const toggleVisibilityDropDown = () => {
    setVisible(!visible);
  };

  const handleClick = (evt) => {
    // evt.path returns undefined in Mozilla Firefox, this is how it works there:
    const path = evt.path || (evt.composedPath && evt.composedPath());

    if (!path.includes(sortRef.current)) {
      setVisible(false);
    }
  };

  const selectItem = (item) => {
    setVisible(!visible);
    onClickItem(item);
  };

  React.useEffect(() => {
    document.body.addEventListener("click", handleClick);
  }, []);

  return (
    <div className={"sort-container"} ref={sortRef}>
      <div className={"col"}>
        <Button
          className={"btn btn-primary"}
          name={"Sort by"}
          onClick={toggleVisibilityDropDown}
        />
      </div>
      {visible && (
        <div className={"drop-down"}>
          <ul>
            {sortBy &&
              sortBy.map((item, index) => {
                return (
                  <li
                    className={
                      activeItem === item ? "item item-active" : "item"
                    }
                    id={item}
                    key={`${item}_${index}`}
                    onClick={() => selectItem(item)}
                  >
                    {item}
                  </li>
                );
              })}
          </ul>
        </div>
      )}
    </div>
  );
});
